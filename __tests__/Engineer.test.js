const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create a github username property", () => {
      const engineer = new Engineer("Sarah", "1", "sarah@email", "sarah");

      expect(engineer.github).toEqual("sarah");
    });

    it("should return a gitsarah account when getGithub() function is called", () => {
        const engineer = new Engineer("Sarah", "1", "sarah@email", "sarah");
  
        expect(engineer.getGithub()).toEqual("sarah");
      });
  
      it("should return all information when getRole() function is called", () => {
        const engineer = new Engineer("Sarah", "1", "sarah@email", "sarah");
        const test = "Engineer";
  
        expect(engineer.getRole()).toEqual(test);
      });

  });
});
