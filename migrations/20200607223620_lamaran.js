
exports.up = function(knex) {
  return knex.schema.createTable("lamaran", (table) => {
    table.increments("id_lamaran").notNullable()
    table.integer("id_pelamar")
    table.integer("id_lowongan")
    table.foreign("id_pelamar").references("pelamar.id_pelamar").onDelete("CASCADE")
    table.foreign("id_lowongan").references("lowongan.id_lowongan").onDelete("CASCADE")
    table.string("status")
    table.text("pesan")
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("lamaran");
};
