import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('manager', (table) => {
        table.uuid('manager_id').primary()
        table.string('name').notNullable()
        table.string('cpf', 11).unique().notNullable()
        table.string('email').unique().notNullable()
        table.string('password').notNullable
        table.integer('amount').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now).notNullable()
        table.timestamp('create_vaquejada').defaultTo(knex.fn.now).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('manager')
}

