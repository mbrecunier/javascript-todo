///<reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var describeHobbyTasks = function(taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.constructor === HobbyTask) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var describeWorkTasks = function(taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.constructor === WorkTask) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var describeHomeTasks = function(taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.constructor === HomeTask) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var listPriority = function(priority: String ,taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.priority === priority) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }


}
