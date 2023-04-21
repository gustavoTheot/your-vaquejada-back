import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('manager', (table) => {
        table.uuid("id").primary();
        table.string("name").notNullable();
        table.string("cpf").unique().notNullable();
        table.bigInteger("phone").notNullable();
        table.string('email').unique().notNullable();
        table.string("password").notNullable();
        table.string("cowboy_number").notNullable();
        table.timestamp("data_create").defaultTo(knex.fn.now()).notNullable();

        
        table.uuid('manager_id')
        table.foreign('manager_id').references('administrator.id')
        
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('manager')
}

