const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//render.renderMain("./templates");

//an array that holds the employee objects created
const finalTeam = []

//A short prompt that asks the user for information about the employee
const prompt = () => inquirer.prompt([
    {
        //Type of employee
        type:"list",
        message:"What type of employee do you want to add?",
        name:"type",
        choices:["Engineer", "Intern", "Manager"]
    },
    {
        //Name of the employee
        type:"input",
        message:"What is the name of the employee?",
        name:"name"
    },
    {
        //Id of the employee
        type:"input",
        message:"What is the id of the employee?",
        name:"id"
    },
    {
        //Email of the employee
        type:"input",
        message:"What is the email of the employee?",
        name:"email"
    },
    {
        //If the employee is an engineer
        //Ask for the github username
        type:"input",
        message:"What is the github username of the engineer?",
        name:"username",
        when: function(answer) {return answer.type ==="Engineer"}
    },
    {
        //If the employee is an intern
        //Ask for the school of the intern
        type:"input",
        message:"What is the school of the Intern?",
        name:"school",
        when: function(answer) {return answer.type ==="Intern"}
    },
    {
        //If the employee is a manager
        //Ask for the office number
        type:"input",
        message:"What is the office number of the manager?",
        name:"officeNumber",
        when: function(answer) {return answer.type ==="Manager"}
    },
    {
        //If user wants to add another employee
        type:"confirm",
        message:"Would you like to add another employee?",
        name:"add"
    }
]).then(function(response){
    //If the employee entered is an engineer
    if(response.type === "Engineer")
    {
        const engineer = new Engineer(response.name, response.id, response.email, response.username);
        finalTeam.push(engineer);
    }

    //If the employee entered is an intern
    else if(response.type === "Intern")
    {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        finalTeam.push(intern);
    }
    
    //If the employee entered is a manager
    else if(response.type === "Manager")
    {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        finalTeam.push(manager);
    }

    //If user wants to add another employee
    if(response.add)
    {
        prompt();
    }

    //Else write the html page based on the employees entered
    else{
        fs.writeFile(outputPath, render(finalTeam), (err) =>{
            if (err)
            {
                throw err;
            }
            else{
                console.log("successfully rendered the html");
            }
        });
    }

});

prompt();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
