// const knex = require("../db/knex");
// const request = require("supertest");
// const expect = require("chai").expect;

// const app = require("../app");

// const fixture = require("./fixtures/fixPelamar");

// describe("CRUD lowonganApi", () => {
//     before((done) => {
//         // run migrate
//         knex.migrate.latest()
//             .then(() => {
//                 // run seeds
//                 return knex.seed.run();
//             }).then(() => done());
//     });

//     it("List all records pelamar", (done) => {
//         request(app)
//             .get("/api/v1/pelamar")
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("array");
//                 expect(response.body).to.deep.equal(fixture.pelamar);
//                 done();
//             });
//     });

//     it("Show one record by id pelamar", (done) => {
//         request(app)
//             .get("/api/v1/pelamar/1")
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("object");
//                 expect(response.body).to.deep.equal(fixture.pelamar[0]);
//                 done();
//             });
//     });

//     it("Creates a record pelamar", (done) => {
//         request(app)
//             .post("/api/v1/pelamar")
//             .send(fixture.pelamarOne)
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("object");
//                 // fixture.pelamarOne.id = response.body.id;
//                 expect(response.body).to.deep.equal(fixture.pelamarOne);
//                 done();
//             });
//     });

//     it("Updates a record pelamar", (done) => {
//         fixture.pelamarOne.nama = "Febrian";
//         request(app)
//             .put("/api/v1/pelamar/3")
//             .send(fixture.pelamarOne)
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("object");
//                 expect(response.body).to.deep.equal(fixture.pelamarOne);
//                 done();
//             });
//     });

//     it("Delete a record", (done) => {
//         request(app)
//             .delete("/api/v1/pelamar/2")
//             .send(fixture.pelamarOne)
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("object");
//                 expect(response.body).to.deep.equal({
//                     deleted: true
//                 });
//                 done();
//             });
//     });
// });