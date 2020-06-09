const knex = require("./knex");

module.exports = {
    getAll(){
        return knex("pelamar");
    },
    getOne(id){
        return knex("pelamar").where("id_pelamar", id).first();
    },
    create(pelamar){
        return knex("pelamar").insert(pelamar, "*");
    },
    update(id, pelamar){
        return knex("pelamar").where("id_pelamar", id).update(pelamar, "*");
    },
    delete(id){
        return knex("pelamar").where("id_pelamar", id).del();
    }
}