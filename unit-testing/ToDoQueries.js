const axios = require("axios");

async function fetchAllTodos() {
  const result = await axios.get("http://localhost:5050/v1/todos/all");

  const todos = result.data;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await axios.get("http://localhost:5050/v1/todos/byid", {
    params: { todoId },
  });

  const todo = result.data.todo;

  //console.log("Mein Todo /byid", todo);

  return todo;
}

async function fetchTodoByUserId(userId) {
  const result = await axios.get("http://localhost:5050/v1/todos/byuserid", {
    params: { userId },
  });

  const todo = result.data.todo;

  //console.log("Mein Todo /byuserid", todo);

  return todo;
}

module.exports = { fetchAllTodos, fetchTodoById, fetchTodoByUserId };
