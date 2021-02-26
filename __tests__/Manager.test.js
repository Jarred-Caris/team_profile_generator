const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create a office ID number property", () => {
      const manager = new Manager("Sarah", "1", "sarah@email", "2");

      expect(manager.officeNumber).toEqual("2");
    });

    it("should return a number when getOfficeNumber() function is called", () => {
        const manager = new Manager("Sarah", "1", "sarah@email", "2");
  
        expect(manager.getOfficeNumber()).toEqual("2");
      });
  
      it("should return all information when getRole() function is called", () => {
        const manager = new Manager("Sarah", "1", "sarah@email", "2");
        const test = "Manager";
  
        expect(manager.getRole()).toEqual(test);
      });

  });
});