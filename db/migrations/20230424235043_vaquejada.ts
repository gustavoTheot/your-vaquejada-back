import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('vaquejada', (table) => {
        table.increments('id').notNullable()
        table.text('title').notNullable()
        table.timestamp('date_create').defaultTo(knex.fn.now()).notNullable();

        table.string('manager_id').references('manager.id').notNullable().onDelete('CASCADE')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('vaquejada')
}

