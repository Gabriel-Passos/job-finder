import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cards', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();

        table.string('companyID').notNullable();

        table.foreign('companyID').references('id').inTable('companies');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cards');
}
