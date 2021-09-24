<template>
  <main class="todos">
    <div class="todos__container">
      <DraggableList :todos="store.getters.getFilteredTodos()" />
    </div>
    <div class="todos__info">
      <p class="todos__count">{{store.state.todos.length}} items left</p>
        <FilterTodosBar class="large-screen" v-if="getScreenSize()" />
      <button @click="store.methods.clearCompletedTodos" class="todos__del">Clear Completed</button>
    </div>
  </main>
</template>

<script>
  import { inject } from "vue"
  import Todo from "./Todo"
  import FilterTodosBar from "./FilterTodosBar"
  import DraggableList from "./DraggableList.vue"

  export default {
    name: "Todos",
    components: {
      Todo,
      FilterTodosBar,
      DraggableList
    },
    methods: {
      getScreenSize() {
        return window.innerWidth >= 1000 
      }
    },
    setup() {
      const store = inject("store")
      store.methods.getTodos()

      return { store }
    }
  }
</script>
