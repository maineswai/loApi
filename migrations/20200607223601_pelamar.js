
exports.up = function(knex) {
  return knex.schema.createTable("pelamar", (table) => {
    table.increments("id_pelamar").primary().notNullable()
    table.string("nama")
    table.string("kelamin")
    table.string("telp")
    table.string("email")
    table.string("password")
    table.text("alamat")
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("pelamar")
};
