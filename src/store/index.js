import { reactive } from "vue"
import {  filterTodos } from "../utilities"
import HttpReq from "../httpReq"

const state = reactive({
  todos: [],
  currTheme: "light",
  selectedFilter: "all",
  loadingTime: 0
})

const methods = {
  async addTodo(e) {
    e.preventDefault();

    const todoText = e.target.elements.task;
    const postTodoReq = new HttpReq("POST", "/add-todo", { text: todoText.value, isCompleted: false })

    state.todos = [...state.todos, await postTodoReq.fetchReq()]
    
    todoText.value = "";
  },
  async getTodos() {
    const getTodosReq = new HttpReq("GET", "/todos")
    const todos = await getTodosReq.fetchReq()
    state.todos = todos
  },
  async toggleTodoCompletion(e) {
    let todoId = undefined

    if (e.target.classList.contains("todos__item-circle")) todoId = e.target.parentElement.parentElement.id
    if (e.target.classList.contains("todos__item-check")) todoId = e.target.parentElement.parentElement.parentElement.id
    
    const putTodosReq = new HttpReq("PUT", "/update-todos", {id: todoId, todo: state.todos.filter(todo => todo._id === todoId) })
    const updatedTodos = await putTodosReq.fetchReq() 

    state.todos = updatedTodos
  },
  async clearCompletedTodos() {
    const deleteTodosReq = new HttpReq("DELETE", "/delete-todos")
    const todos = await deleteTodosReq.fetchReq()
    state.todos = todos
  },
  async clearTodo(e) {
    const id = e.target.parentElement.id
    const deleteTodoReq = new HttpReq("DELETE", "/delete-todo", { id })
    
    state.todos = await deleteTodoReq.fetchReq()
  },
  switchFilter(e) {
    state.selectedFilter = e.target.dataset.filter
  }
}

const getters = {
  getFilteredTodos() {
    const filteredTodos = state.todos.filter(todo => filterTodos(todo, state.selectedFilter))
    return filteredTodos
  },
  getLoadingTime() {
    return state.loadingTime
  }
}

export default {
  state,
  methods,
  getters
}