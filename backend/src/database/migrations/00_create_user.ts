import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('numberPhone').notNullable();
        table.string('email').unique();
        table.string('city');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}
