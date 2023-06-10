import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('phase', (table) => {
        table.increments('id').primary().unique()
        table.integer('vaquejada_id').notNullable().references('vaquejada.id').onDelete('CASCADE');
        table.integer('phase_number').notNullable()
        table.integer('races').notNullable()
        table.integer('vaqueiros').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('phase')
}

