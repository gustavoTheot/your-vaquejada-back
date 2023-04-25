import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('vaqueiro', (table) => {
        table.increments('id_vaqueiro').notNullable()
        table.string('cowboy').notNullable()
        table.string('bateEsteira').notNullable()
        table.string('horseOne').notNullable()
        table.integer('points')
        
        table.string('vaquejada_id').references('vaquejada.id').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('vaqueiro')
}

