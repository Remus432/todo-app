// Fetch Settings
const endpoint = "http://localhost:3000"
const settings = {
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
}

export const postTodo = async (todoText) => {
  // Request's Body
  const postReqSettings = {
    ...settings,
    method: "POST",
    body: JSON.stringify({ text: todoText, isCompleted: false })
  }
  // Fetch Request
  try {
    const response = await fetch(endpoint, postReqSettings)
    const data = await response.json()

    return await data
  } catch (err) {
    return err
  }
}

// Get Todos From MongoDB Collection
export const fetchTodos = async () => {
  // Request's Body
  const getReqSettings = {
    ...settings,
    method: "GET"
  }

  try {
    const response = await fetch(`${endpoint}/todos`, getReqSettings)
    const data = await response.json()
    return await data
  } catch(err) {
    return err
  }
}

export const postTodos = async (id, todo) => {
  const putReqSettings = {
    ...settings,
    method: "PUT",
    body: JSON.stringify({ id, todo })
  }

  try {
    const response = await fetch(`${endpoint}/update-todos`, putReqSettings)
    const data = await response.json()
    return await data
  } catch(err) {
    return err
  }
}

export const deleteCompletedTodos = async () => {
  const deleteReqSettings = {
    ...settings,
    method: "DELETE"
  }

  try {
    const response = await fetch(`${endpoint}/delete-todos`, deleteReqSettings)
    const data = await response.json()
    return await data
  } catch(err) {
    return err
  }
}

export const clearTodoFetch = async (id) => {
  const deleteReqSettings = {
    ...settings,
    method: "DELETE",
    body: JSON.stringify({ id })
  }

  try {
    const response = await fetch(`${endpoint}/delete-todo`, deleteReqSettings)
    const data = await response.json()
    return await data
  } catch(err) {
    return err
  }
}

export const updateTodoCompletion = (todo, id) => {
  return todo._id === id 
    ? { ...todo, isCompleted: !todo.isCompleted }
    : todo
} 

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