exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function(table) {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('cpf').notNullable();
    table.date('data_nasc').notNullable();
    table.string('profissao').notNullable();
    table.binary('genero').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios');
};
