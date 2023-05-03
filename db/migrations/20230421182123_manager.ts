import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('manager', (table) => {
        table.uuid("id").primary();
        table.string("name").notNullable();
        table.string("cpf").unique().notNullable();
        table.integer("phone").notNullable();
        table.string('email').unique().notNullable();
        table.string("password").notNullable();
        table.integer("cowboy_number").notNullable();
        table.timestamp("date_create").defaultTo(knex.fn.now()).notNullable();

        table.string('adm_id').references('administrator.id').onDelete('CASCADE')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('manager')
}

