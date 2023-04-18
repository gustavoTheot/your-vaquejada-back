import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('vaquejada', (table) => {
        table.uuid('vaquejada_id').primary()
        table.uuid('password').unique().notNullable()
        table.string('puller').notNullable()
        table.string('horse').notNullable()
        table.string('bateEsteira').notNullable()
        table.foreign('id_vaquejada').references('manager.manager_id').deferrable('deferred')
    })
}


export async function down(knex: Knex): Promise<void> {
}

