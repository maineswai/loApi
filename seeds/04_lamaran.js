const dumLamaran = require("../dummy/dumLamaran");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("lamaran").del()
    .then(function () {
      // Inserts seed entries
      return knex("lamaran").insert(dumLamaran);
    });
};
