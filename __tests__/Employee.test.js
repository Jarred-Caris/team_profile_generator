const Employee = require("./lib/Employee");

test ("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test ("Can set name through constructor", () => {
    const name = "Jarred";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test ("Can set ID through constructor", () => {
    const number = 1234;
    const employee = new Employee(number);
    expect(employee.id).toBe(number);
});

test ("Can set email through constructor", () => {
    const number = "test@email.com";
    const employee = new Employee(number);
    expect(employee.id).toBe(number);
});