// TODO: Write code to define and export the Employee class
class Employee{
    //Employee has a name, an id and an email
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //Return this employee's name
    getName(){
        return this.name;
    }

    //Return this employee's id
    getId(){
        return this.id;
    }

    //Return this employee's email
    getEmail(){
        return this.email;
    }
}

module.exports = Employee;