let todo = [];

while (true) {
    let req = prompt("Enter What you want to do");

    if (req === "Quit") {
        console.log("Quitting the app");
        break;
    }

    if (req === "List") {
        console.log("____________________________________________");

        if (todo.length === 0) {
            console.log("No tasks available.");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log(i, todo[i]);
            }
        }

        console.log("____________________________________________");
    }

    else if (req === "Add")
         {
        console.log("____________________________________________");

        let task = prompt("Kindly enter the task you want to add");
            todo.push(task);
            console.log("Task added successfully");
       } 
   
    

    else if (req === "Delete") {

        if (todo.length === 0) {
            console.log("Nothing to delete");
        } else {

            let idx = prompt("Enter the index of the item you want to delete");

            if (idx >= 0 && idx < todo.length) {
                todo.splice(idx, 1);
                console.log("Item deleted successfully");
            } else {
                console.log("Invalid index");
            }
        }
    }

    else {
        console.log("Invalid Command");
    }
}