// const knex = require("../db/knex");
// const request = require("supertest");
// const expect = require("chai").expect;

// const app = require("../app");

// const fixture = require("./fixtures/fixLowongan");

// describe("CRUD lowonganApi", () => {
//     before((done) => {
//         // run migrate
//         knex.migrate.latest()
//             .then(() => {
//                 // run seeds
//                 return knex.seed.run();
//             }).then(() => done());
//     });

//     it("List all records lowongan", (done) => {
//         request(app)
//             .get("/api/v1/lowongan")
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("array");
//                 expect(response.body).to.deep.equal(fixture.lowongan);
//                 done();
//             });
//     });

//     it("Show one record by id lowongan", (done) => {
//         request(app)
//             .get("/api/v1/lowongan/1")
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("object");
//                 expect(response.body).to.deep.equal(fixture.lowongan[0]);
//                 done();
//             });
//     });

//     it("Creates a record lowongan", (done) => {
//         request(app)
//             .post("/api/v1/lowongan")
//             .send(fixture.lowonganOne)
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("object");
//                 // fixture.lowonganOne.id = response.body.id;
//                 expect(response.body).to.deep.equal(fixture.lowonganOne);
//                 done();
//             });
//     });

//     it("Updates a record lowongan", (done) => {
//         fixture.lowonganOne.perusahaan = "Gojek";
//         request(app)
//             .put("/api/v1/lowongan/4")
//             .send(fixture.lowonganOne)
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("object");
//                 expect(response.body).to.deep.equal(fixture.lowonganOne);
//                 done();
//             });
//     });

//     it("Delete a record lowongan", (done) => {
//         request(app)
//             .delete("/api/v1/lowongan/2")
//             .send(fixture.lowonganOne)
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