/* eslint-disable no-undef */
const expect = require("chai").expect;

const app = require("../index");

describe("App Test", () => {
  it("Tests if the Application is Listening", () => {
    expect(app).not.equal(undefined);
  });
});
