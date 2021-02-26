const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create a name through constructor", () => {
      const employee = new Employee("Sarah", "1", "sarah@email");

      expect(employee.name).toEqual("Sarah");
    });

    it("should create a number through constructor", () => {
      const employee = new Employee("Sarah", "1", "sarah@email");

      expect(employee.id).toEqual("1");
    });

    it("should create a email address through constructor", () => {
      const employee = new Employee("Sarah", "1", "sarah@email");

      expect(employee.email).toEqual("sarah@email");
    });

    it("should return a name when getName() function is called", () => {
      const employee = new Employee("Sarah", "1", "sarah@email");

      expect(employee.getName()).toEqual("Sarah");
    });

    it("should return all information when getRole() function is called", () => {
      const employee = new Employee("Sarah", "1", "sarah@email");
      const test = "Employee";

      expect(employee.getRole()).toEqual(test);
    });
  });
});
