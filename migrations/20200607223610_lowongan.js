
exports.up = function(knex) {
  return knex.schema.createTable("lowongan", (table) => {
    table.increments("id_lowongan").primary().notNullable()
    table.string("perusahaan")
    table.string("posisi")
    table.string("kategori")
    table.string("cabang")
    table.text("syarat")
    table.string("gaji")
    table.string("gambar")
    table.text("deskripsi")
    table.text("lokasi")
    table.integer("id_perusahaan")
    table.foreign("id_perusahaan").references("perusahaan.id_perusahaan").onDelete("CASCADE")
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("lowongan");
};
