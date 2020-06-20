import knex from '../database/connection';

interface jobDetail {
    title: string;
    description: string;
    experienceLevel: string;
    contract: string;
    email: string;
    techs: [string];
    salary: string;
    location: string;

    companyID?: string;
}

interface Page {
    page: number;
}

class JobsDetailsController {
    public async index({ page }: Page): Promise<jobDetail[]> {
        const jobDetails = await knex('jobDetails')
            .join('companies', 'companies.id', '=', 'jobDetails.companyID')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'jobDetails.*',
                'companies.name',
                'companies.cnpj',
                'companies.email',
                'companies.companySize',
            ]);

        return jobDetails;
    }

    public async create({
        title,
        description,
        companyID,
        experienceLevel,
        contract,
        email,
        techs,
        salary,
        location,
    }: jobDetail): Promise<jobDetail> {
        const jobDetail = {
            title,
            description,
            companyID,
            experienceLevel,
            contract,
            email,
            techs,
            salary,
            location,
        };

        await knex('jobDetails').insert(jobDetail);

        return jobDetail;
    }
}

export default JobsDetailsController;
