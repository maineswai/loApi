// const knex = require("../db/knex");
// const request = require("supertest");
// const expect = require("chai").expect;

// const app = require("../app");

// const fixture = require("./fixtures/fixPerusahaan");

// describe("CRUD lowonganApi", () => {
//     before((done) => {
//         // run migrate
//         knex.migrate.latest()
//             .then(() => {
//                 // run seeds
//                 return knex.seed.run();
//             }).then(() => done());
//     });

//     it("List all records perusahaan", (done) => {
//         request(app)
//             .get("/api/v1/perusahaan")
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("array");
//                 expect(response.body).to.deep.equal(fixture.perusahaan);
//                 done();
//             });
//     });

//     it("Show one record by id perusahaan", (done) => {
//         request(app)
//             .get("/api/v1/perusahaan/1")
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("object");
//                 expect(response.body).to.deep.equal(fixture.perusahaan[0]);
//                 done();
//             });
//     });

//     it("Creates a record perusahaan", (done) => {
//         request(app)
//             .post("/api/v1/perusahaan")
//             .send(fixture.perusahaanOne)
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("object");
//                 // fixture.perusahaanOne.id = response.body.id;
//                 expect(response.body).to.deep.equal(fixture.perusahaanOne);
//                 done();
//             });
//     });

//     it("Updates a record perusahaan", (done) => {
//         fixture.perusahaanOne.nama = "Gojek";
//         request(app)
//             .put("/api/v1/perusahaan/3")
//             .send(fixture.perusahaanOne)
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.be.a("object");
//                 expect(response.body).to.deep.equal(fixture.perusahaanOne);
//                 done();
//             });
//     });

//     it("Delete a record perusahaan", (done) => {
//         request(app)
//             .delete("/api/v1/perusahaan/2")
//             .send(fixture.perusahaanOne)
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