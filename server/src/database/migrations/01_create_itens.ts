import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
    // criar a tabela
}

export async function down(knex: Knex) {
    // faz contrario do up, voltar a tras
    return knex.schema.dropTable('items');
}