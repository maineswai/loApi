
exports.up = function(knex) {
  return knex.schema.createTable("perusahaan", (table) => {
    table.increments("id_perusahaan").primary().notNullable()
    table.string("nama")
    table.string("email")
    table.string("password")
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("perusahaan");
};
