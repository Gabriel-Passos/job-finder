import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('jobs', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('salary').notNullable();
    table.string('description').notNullable();
    table.string('curriculumEmail', 100).unique().notNullable();
    table.string('contactEmail', 100).unique().notNullable();
    table.string('city', 60).notNullable();
    table.string('uf', 2).notNullable();
    table.integer('expTypes').notNullable();
    table.integer('contractTypes').notNullable();

    table
      .string('company_id')
      .notNullable()
      .references('id')
      .inTable('companies');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('jobs');
}
