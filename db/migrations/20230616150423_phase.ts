import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('phase', (table) => {
        table.increments('id').primary()
        table.integer('phase_number').notNullable().defaultTo(1)
        table.integer('vaquejada_id').unsigned().references('id').inTable('vaquejada')
        table.specificType('password_cowboy', 'TEXT[]')
    });

    await knex.schema.createTable('passwords', (table) => {
        table.increments('id').primary()
        table.string('password_cowboy')
        table.integer('phase_id').unsigned().references('id').inTable('phase')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('phase')
}

