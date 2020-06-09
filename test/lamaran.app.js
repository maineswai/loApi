const knex = require("../db/knex");
const request = require("supertest");
const expect = require("chai").expect;

const app = require("../app");

const fixture = require("./fixtures/fixLamaran");

describe("CRUD lowonganApi", () => {
    before((done) => {
        // run migrate
        knex.migrate.latest()
            .then(() => {
                // run seeds
                return knex.seed.run();
            }).then(() => done());
    });

    it("List all records lamaran", (done) => {
        request(app)
            .get("/api/v1/lamaran")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a("array");
                expect(response.body).to.deep.equal(fixture.lamaran);
                done();
            });
    });

    it("Show one record by id lamaran", (done) => {
        request(app)
            .get("/api/v1/lamaran/1")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a("object");
                expect(response.body).to.deep.equal(fixture.lamaran[0]);
                done();
            });
    });

    it("Creates a record lamaran", (done) => {
        request(app)
            .post("/api/v1/lamaran")
            .send(fixture.lamaranOne)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a("object");
                // fixture.lamaranOne.id = response.body.id;
                expect(response.body).to.deep.equal(fixture.lamaranOne);
                done();
            });
    });

    it("Updates a record lamaran", (done) => {
        fixture.lamaranOne.status = "Diundang wawancara";
        request(app)
            .put("/api/v1/lamaran/3")
            .send(fixture.lamaranOne)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a("object");
                expect(response.body).to.deep.equal(fixture.lamaranOne);
                done();
            });
    });

    it("Delete a record", (done) => {
        request(app)
            .delete("/api/v1/lamaran/2")
            .send(fixture.lamaranOne)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a("object");
                expect(response.body).to.deep.equal({
                    deleted: true
                });
                done();
            });
    });
});