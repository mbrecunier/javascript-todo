var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of Mischief",
        email: "loki@geocities.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
///<reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.describeHobbyTasks = function (taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_2 = taskCollection; _i < taskCollection_2.length; _i++) {
            var task = taskCollection_2[_i];
            if (task.constructor === ToDoList.HobbyTask) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.describeWorkTasks = function (taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_3 = taskCollection; _i < taskCollection_3.length; _i++) {
            var task = taskCollection_3[_i];
            if (task.constructor === ToDoList.WorkTask) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.describeHomeTasks = function (taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_4 = taskCollection; _i < taskCollection_4.length; _i++) {
            var task = taskCollection_4[_i];
            if (task.constructor === ToDoList.HomeTask) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.listPriority = function (priority, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_5 = taskCollection; _i < taskCollection_5.length; _i++) {
            var task = taskCollection_5[_i];
            if (task.priority === priority) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
///<reference path="to-do-people.ts" />
///<reference path="to-do-listing-functions.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));
console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for (var _i = 0, thorTasks_1 = thorTasks; _i < thorTasks_1.length; _i++) {
    var task = thorTasks_1[_i];
    console.log(task);
}
var getHobbyTasks = ToDoList.describeHobbyTasks(tasks);
console.log("Here are Hobby Tasks: ");
for (var _a = 0, getHobbyTasks_1 = getHobbyTasks; _a < getHobbyTasks_1.length; _a++) {
    var task = getHobbyTasks_1[_a];
    console.log(task);
}
var getHomeTasks = ToDoList.describeHomeTasks(tasks);
console.log("Here are Home Tasks: ");
for (var _b = 0, getHomeTasks_1 = getHomeTasks; _b < getHomeTasks_1.length; _b++) {
    var task = getHomeTasks_1[_b];
    console.log(task);
}
var getWorkTasks = ToDoList.describeWorkTasks(tasks);
console.log("Here are Work Tasks: ");
for (var _c = 0, getWorkTasks_1 = getWorkTasks; _c < getWorkTasks_1.length; _c++) {
    var task = getWorkTasks_1[_c];
    console.log(task);
}
var highTasks = ToDoList.listPriority("High", tasks);
console.log("Here are High Priority Tasks: ");
for (var _d = 0, highTasks_1 = highTasks; _d < highTasks_1.length; _d++) {
    var task = highTasks_1[_d];
    console.log(task);
}
var lowTasks = ToDoList.listPriority("Low", tasks);
console.log("Here are Low Priority Tasks: ");
for (var _e = 0, lowTasks_1 = lowTasks; _e < lowTasks_1.length; _e++) {
    var task = lowTasks_1[_e];
    console.log(task);
}
var mediumTasks = ToDoList.listPriority("Medium", tasks);
console.log("Here are Medium Priority Tasks: ");
for (var _f = 0, mediumTasks_1 = mediumTasks; _f < mediumTasks_1.length; _f++) {
    var task = mediumTasks_1[_f];
    console.log(task);
}
