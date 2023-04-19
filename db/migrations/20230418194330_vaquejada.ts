import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('vaquejada', (table) => {
        table.uuid('vaquejada_id').primary()
        table.uuid('password').unique().notNullable()
        table.string('puller').notNullable()
        table.string('horseOne').notNullable()
        table.string('horseTwo').notNullable()
        table.string('bateEsteira').notNullable()
        table.uuid('id_vaquejada').references('manager_id').inTable('manager')
        table.boolean('next').references('administrator_id').inTable('administrator')
    })
}


export async function down(knex: Knex): Promise<void> {
}

