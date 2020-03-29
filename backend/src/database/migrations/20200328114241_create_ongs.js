//Responsável pela criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('ongs', (table) => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};
//Responsável por desfazer o que foi criado acima caso algo tenha dado errado.
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
