import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('companies', table => {
    table.string('id').primary();
    table.string('companyName', 100).notNullable();
    table.string('email', 100).unique().notNullable();
    table.string('password', 100).notNullable();
    table.string('companySize', 40).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('companies');
}
