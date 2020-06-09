const dumPelamar = require("../dummy/dumPelamar");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("pelamar").del()
    .then(function () {
      // Inserts seed entries
      return knex("pelamar").insert(dumPelamar);
    });
};
