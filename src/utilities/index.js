export const filterTodos = (todo, selectedFilter) => {
  switch(selectedFilter) {
    case "active":
      return !todo.isCompleted
    case "completed":
      return todo.isCompleted
    default:
      return todo
  }
}