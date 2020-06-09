const dumLowongan = require("../dummy/dumLowongan");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("lowongan").del()
    .then(function () {
      // Inserts seed entries
      return knex("lowongan").insert(dumLowongan);
    });
};
