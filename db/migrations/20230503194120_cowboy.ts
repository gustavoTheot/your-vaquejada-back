import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('cowboy', (table) => {
        table.increments('id').primary()
        table.integer('password').unique()
        table.boolean('boiTv').notNullable()
        table.string('cowboy').notNullable()
        table.string('beats_treadmill').notNullable()
        table.string('horse').notNullable()
        table.integer('points')
        
        table.string('vaquejada_id').references('vaquejada.id').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('cowboy')
}

