const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create a github username property", () => {
      const engineer = new Engineer("Sarah", "1", "sarah@email", "hub");

      expect(engineer.github).toEqual("hub");
    });

    it("should return a github account when getGithub() function is called", () => {
        const engineer = new Engineer("Sarah", "1", "sarah@email", "sarah");
  
        expect(engineer.getGithub()).toEqual("hub");
      });
  
      it("should return all information when getRole() function is called", () => {
        const engineer = new Engineer("Sarah", "1", "sarah@email", "hub");
        const test = "Engineer";
  
        expect(engineer.getRole()).toEqual(test);
      });

  });
});
