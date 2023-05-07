import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('vaquejada', (table) => {
        table.increments('id').primary().unique()
        table.string('title').notNullable()
        table.string('local').notNullable()
        table.string('date').notNullable()
        table.integer('time_start').notNullable()
        table.string('award').notNullable()
        table.integer('amount_times').notNullable()
        table.timestamp('date_create').defaultTo(knex.fn.now()).notNullable();

        table.string('manager_id').references('manager.id').notNullable().onDelete('CASCADE')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('vaquejada')
}

