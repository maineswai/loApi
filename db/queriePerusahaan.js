const knex = require("./knex");

module.exports = {
    getAll(){
        return knex("perusahaan");
    },
    getOne(id){
        return knex("perusahaan").where("id_perusahaan", id).first();
    },
    create(perusahaan){
        return knex("perusahaan").insert(perusahaan, "*");
    },
    update(id, perusahaan){
        return knex("perusahaan").where("id_perusahaan", id).update(perusahaan, "*");
    },
    delete(id){
        return knex("perusahaan").where("id_perusahaan", id).del();
    }
}