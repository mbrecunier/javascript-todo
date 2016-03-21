///<reference path="to-do-classes-interfaces.ts" />
///<reference path="to-do-people.ts" />
///<reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High", people.diane));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High", people.loki));

tasks.push(new ToDoList.HobbyTask("Practice origami.", people.loki));
tasks.push(new ToDoList.HobbyTask("Bake a pie.", people.thor));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor))
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor))
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));


// console.log(tasks);
// var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
// console.log("Here are Thor's tasks: ");
// for(var task of thorTasks){
//   console.log(task);
// }
// var getHobbyTasks = ToDoList.describeHobbyTasks(tasks);
// console.log("Here are Hobby Tasks: ");
// for(var task of getHobbyTasks) {
//   console.log(task);
// }
// var getHomeTasks = ToDoList.describeHomeTasks(tasks);
// console.log("Here are Home Tasks: ");
// for(var task of getHomeTasks) {
//   console.log(task);
// }
// var getWorkTasks = ToDoList.describeWorkTasks(tasks);
// console.log("Here are Work Tasks: ");
// for(var task of getWorkTasks) {
//   console.log(task);
// }
// var highTasks = ToDoList.listPriority("High", tasks);
// console.log("Here are High Priority Tasks: ");
// for(var task of highTasks) {
//   console.log(task);
// }
// var lowTasks = ToDoList.listPriority("Low", tasks);
// console.log("Here are Low Priority Tasks: ");
// for(var task of lowTasks) {
//   console.log(task);
// }
// var mediumTasks = ToDoList.listPriority("Medium", tasks);
// console.log("Here are Medium Priority Tasks: ");
// for(var task of mediumTasks) {
//   console.log(task);
// }

// UI

$(document).ready(function() {
  //for each person in people, append an option with a value of person's name
  $("#search-users").submit(function(event) {
    event.preventDefault();
    var user = $("select#users").val();
    console.log(tasks);
    tasks.forEach(function(i){
      if(i.assignedTo.name === user)
      {
      $(".display").append("<p>" + i.description + "</p>");
      }
    });
  });
});
