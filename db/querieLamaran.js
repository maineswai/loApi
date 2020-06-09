const knex = require("./knex");

module.exports = {
    getAll(){
        return knex("lamaran");
    },
    getOne(id){
        return knex("lamaran").where("id_lamaran", id).first();
    },
    create(lamaran){
        return knex("lamaran").insert(lamaran, "*");
    },
    update(id, lamaran){
        return knex("lamaran").where("id_lamaran", id).update(lamaran, "*");
    },
    delete(id){
        return knex("lamaran").where("id_lamaran", id).del();
    }
}