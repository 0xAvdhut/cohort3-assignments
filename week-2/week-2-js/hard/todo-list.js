/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(id) {
    this.todos.splice(id, 1);
  }
  update(id, updatedTodo) {
    if (id < this.todos.length && id >= 0) {
      this.todos[id] = updatedTodo;
    }
  }
  getAll() {
    return this.todos;
  }
  get(id) {
    return id < this.todos.length && id >= 0 ? this.todos[id] : null;
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
