import {assert} from "chai";
const Festival = require("../src/main");

const festival = new Festival();
describe("UrlParamTest", () => {
  describe("getMonthParam", () => {
    it("should return the correct param", () => {
      assert.equal(festival.getMonthParam(1), "refine.mois_habituel_de_debut=01%20(janvier)");
      assert.equal(festival.getMonthParam(12), "refine.mois_habituel_de_debut=12%20(d%C3%A9cembre)");
    });

    it("should throw an error if the month is invalid", () => {
      assert.throws(() => festival.getMonthParam(0), Error);
      assert.throws(() => festival.getMonthParam(13), Error);
    });
  });

  describe("getDepartmentParam", () => {
    it("should return the correct param", () => {
      assert.equal(festival.getDepartmentParam(1), "refine.departement=1");
      assert.equal(festival.getDepartmentParam(95), "refine.departement=95");
      assert.equal(festival.getDepartmentParam(971), "refine.departement=971");
    });

    it("should throw an error if the department is invalid", () => {
      assert.throws(() => festival.getDepartmentParam(0), Error);
      assert.throws(() => festival.getDepartmentParam(96), Error);
      assert.throws(() => festival.getDepartmentParam(979), Error);
    });
  })

  describe("getPostalCodeParam", () => {
    it("should return the correct param", () => {
      assert.equal(festival.getPostalCodeParam("75000"), "refine.code_postal=75000");
    });

    it("should throw an error if the postal code is invalid", () => {
      assert.throws(() => festival.getPostalCodeParam("7500"), Error);
      assert.throws(() => festival.getPostalCodeParam("750000"), Error);
    });
  });
});
