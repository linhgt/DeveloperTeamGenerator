// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    //Intern is an Employee
    constructor(name, id, email, school)
    {
        super(name, id, email);
        this.school = school;
    }

    //Return role Intern
    getRole() {
        return "Intern";
    }

    //Return github username
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;