import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('vaqueiro', (table) => {
        table.string('horseOne').notNullable()
        table.string('cowboy').notNullable()
        table.string('bateEsteira').notNullable()
        table.integer('points')

        table.uuid('id_vaqueiro').notNullable()
        table.foreign('id_vaqueiro').references('id').inTable('manager')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('vaqueiro')
}

