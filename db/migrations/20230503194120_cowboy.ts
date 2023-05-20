import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('cowboy', (table) => {
        table.increments('id').primary()
        table.string('password').unique()
        table.boolean('boi_tv').notNullable()
        table.string('cowboy_name').notNullable()
        table.string('beats_treadmill').notNullable()
        table.string('horse').notNullable()
        table.string('horse_beats_treadmill')
        table.integer('points')
        
        table.integer('vaquejada_id').references('vaquejada.id').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('cowboy')
}

