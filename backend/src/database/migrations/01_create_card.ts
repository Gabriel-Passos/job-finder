import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cards', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();

        table.string('userID').notNullable();

        table.foreign('userID').references('id').inTable('users');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cards');
}
