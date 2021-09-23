<template>
  <main class="todos">
    <div class="todos__container">
      <draggable v-model="store.state.todos" group="todos" item-key="_id">
        <template #item="{element, index}">
          <Todo :key="index" :id="element._id" :text="element.text" :isCompleted="element.isCompleted"  />
        </template>
      </draggable>
    </div>
    <div class="todos__info">
      <p class="todos__count">{{store.state.todos.length}} items left</p>
      <FilterTodosBar :isLargeScreen="getScreenSize()" />
      <button @click="store.methods.clearCompletedTodos" class="todos__del">Clear Completed</button>
    </div>
  </main>
</template>

<script>
  import { inject } from "vue"
  import Todo from "./Todo"
  import FilterTodosBar from "./FilterTodosBar"
  import draggable from "vuedraggable"

  export default {
    name: "Todos",
    components: {
      Todo,
      FilterTodosBar,
      draggable
    },
    methods: {
      getScreenSize() {
        return window.innerWidth >= 1440 ? true : false
      }
    },
    setup() {
      const store = inject("store")
      store.methods.getTodos()
      return { store }
    }
  }
</script>
