const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create a school property", () => {
      const intern = new Intern("Sarah", "1", "sarah@email", "Uni");

      expect(intern.school).toEqual("Uni");
    });

    it("should return a name when getSchool() function is called", () => {
        const intern = new Intern("Sarah", "1", "sarah@email", "Uni");
  
        expect(intern.getSchool()).toEqual("Uni");
      });
  
      it("should return all information when getRole() function is called", () => {
        const intern = new Intern("Sarah", "1", "sarah@email", "Uni");
        const test = "Intern";
  
        expect(intern.getRole()).toEqual(test);
      });

  });
});
