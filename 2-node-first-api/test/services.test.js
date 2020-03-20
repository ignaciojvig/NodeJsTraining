/* eslint-disable no-undef */
const expect = require("chai").expect;
const helloWorldService = require("../api/services/helloworld.service");

describe("Running Tests for Services", () => {
  describe("Helloworld Service", () => {
    it("Get list of Messages", () => {
      expect(Array.isArray(helloWorldService.getTexts())).equal(true);
    });
    it("Add a message to MessageList", () => {
      const obj = "Incoming message";
      expect(helloWorldService.addText(obj)).equal(obj);
    });
  });
});
