import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('jobDetails', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('experienceLevel').notNullable();
        table.string('contract').notNullable();
        table.string('email').unique().notNullable();
        table.string('techs');
        table.string('salary').notNullable();
        table.string('location').notNullable();

        table.string('companyID').notNullable();

        table.foreign('companyID').references('id').inTable('companies');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('jobDetails');
}
