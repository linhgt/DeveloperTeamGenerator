// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    //Engineer is an Employee
    constructor(name, id, email, github)
    {
        super(name, id, email);
        this.github = github;
    }

    //Return role Engineer
    getRole() {
        return "Engineer";
    }

    //Return github username
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;
