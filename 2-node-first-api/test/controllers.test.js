/* eslint-disable no-undef */
const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../index");

chai.use(chaiHttp);
chai.should();

describe("Running Tests for Controllers", () => {
  describe("Datetime Controller", () => {
    it("Get current Timestamp", done => {
      chai
        .request(app)
        .get("/datetime/now")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("Helloworld Controller", () => {
    it("Get Messages", done => {
      chai
        .request(app)
        .get("/hello-world/")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });

    it("Send Valid Message", done => {
      chai
        .request(app)
        .post("/hello-world/")
        .send({
          message: "hello-world"
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("Send Invalid Message - 'message' undefined", done => {
      chai
        .request(app)
        .post("/hello-world/")
        .send({})
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a("object");
          done();
        });
    });

    it("Send Invalid Message - 'message' has more than 20 characters", done => {
      chai
        .request(app)
        .post("/hello-world/")
        .send({
          message: "Thorin, son of Thrain, son of Thror"
        })
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
