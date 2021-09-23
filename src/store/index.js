import { reactive } from "vue"
import { postTodo, fetchTodos, updateTodoCompletion, postTodos, filterTodos, deleteCompletedTodos, clearTodoFetch } from "../utilities"

const state = reactive({
  todos: [],
  currTheme: "light",
  selectedFilter: "all"
})

const methods = {
  async addTodo(e) {
    e.preventDefault();

    const todoText = e.target.elements.task;
    postTodo(todoText.value).then(res => state.todos = [...state.todos, res])

    todoText.value = "";
  },
  getTodos() {
    fetchTodos().then(todos => state.todos = [...todos])
  },
  toggleTodoCompletion(e) {
    let todoId = undefined

    if (e.target.classList.contains("todos__item-circle")) todoId = e.target.parentElement.parentElement.id
    if (e.target.classList.contains("todos__item-check")) todoId = e.target.parentElement.parentElement.parentElement.id
    
    postTodos(todoId, state.todos.filter(todo => todo._id === todoId))

    state.todos = state.todos.map(todo => updateTodoCompletion(todo, todoId))
  },
  clearCompletedTodos() {
    deleteCompletedTodos()
      .then(res => state.todos = res)
      .catch(err => console.log(err))
  },
  clearTodo(e) {
    const id = e.target.parentElement.id
    clearTodoFetch(id).then(res => state.todos = res)
  },
  switchFilter(e) {
    state.selectedFilter = e.target.dataset.filter
  }
}

const getters = {
  getFilteredTodos() {
    const filteredTodos = state.todos.filter(todo => filterTodos(todo, state.selectedFilter))
    return filteredTodos
  }
}

export default {
  state,
  methods,
  getters
}