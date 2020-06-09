const dumPerusahaan = require("../dummy/dumPerusahaan");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("perusahaan").del()
    .then(function () {
      // Inserts seed entries
      return knex("perusahaan").insert(dumPerusahaan);
    });
};
