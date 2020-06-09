const knex = require("./knex");

module.exports = {
    getAll(){
        return knex("lowongan");
    },
    getOne(id){
        return knex("lowongan").where("id_lowongan", id).first();
    },
    create(lowongan){
        return knex("lowongan").insert(lowongan, "*");
    },
    update(id, lowongan){
        return knex("lowongan").where("id_lowongan", id).update(lowongan, "*");
    },
    delete(id){
        return knex("lowongan").where("id_lowongan", id).del();
    }
}