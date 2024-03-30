#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\nLet's make Todo's list...\n");

let Todos = [];
let condtion = true;

while (condtion) {
let mylist = await inquirer.prompt(
    [{
        message: "What do you want to add in your list?",
        type: "input",
        name: "task"
    },
    {
        message: "Do you want to add more?",
        type: "confirm",
        name: "confirmation"
    }]
    )

Todos.push(mylist.task);
console.log(Todos); 

if (!mylist.confirmation){
    condtion = false;

    let cancel = await inquirer.prompt(
        [{
            message: "Do you want to delete any item from your list?",
            type: "confirm",
            name: "delete"
        }]
        )
        if (cancel.delete){
            let deleteItem = await inquirer.prompt(
                [{message: "Which item you want to delete?",
                type: "list",
                name: "index",
                choices: Todos.map((todo,index)=>({name: todo.task, value: index}))
                }]
                )
        const itemTodelete = deleteItem.index;
        const deleteditem = Todos.splice(itemTodelete, 1)[0];
        console.log(`\nItem deleted:, ${deleteditem}\n`);
        console.log(`"Here is your updated list, Thank you!", \n\n[${Todos}]`);
    } else {
        console.log(`\nHere is your list, Thank you!, \n\n[${Todos}]`);
    }
}
}
