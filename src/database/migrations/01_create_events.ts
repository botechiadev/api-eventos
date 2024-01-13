import {Knex} from 'knex';


export async function up(knex:Knex){
    return knex.schema.createTable('events', table=>{
        table.increments('id_event').primary();
        table.string('name', 50).notNullable();
        table.string('description', 200);
        table.datetime('date_time').notNullable();
        table.string('responsable', 50).notNullable();
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('events')
}
