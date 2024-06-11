import inquirer from "inquirer";

let todoList = [];

let condition = true

console.log("\n\tWelcome to CodeWithDaniyal - ToDoList APPLICATION\n")

while(condition){
    let userInput = await inquirer.prompt([
        {
            type: "input",
            name: "task",
            message: "Enter Your New Task",
        }
    ]);
    todoList.push(userInput.task);
    console.log(`${userInput.task} Task Added`);

    let addMoreTask = await inquirer.prompt([
        {
            type: "confirm",
            name: "addMoreTask",
            message: "Do You Want To Add More Task?",
            default: "False",
        }
    ])

    condition = addMoreTask.addmore
}

console.log(`Your updated today list: ${todoList}`)