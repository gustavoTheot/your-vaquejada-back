import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('refreshToken', (table) => {
        table.uuid('id').primary()
        table.integer('expiresIn').notNullable()
        
        table.string('user_id').references('manager.id').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('refreshToken')
}

