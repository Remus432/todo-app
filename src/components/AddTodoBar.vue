<template>
  <section role="search">
    <form @submit="store.methods.addTodo" class="search-bar">
      <div class="search-bar__circle"></div>
      <input type="text" name="task" placeholder="Create a new todo..." class="search-bar__input">
    </form>
  </section>
</template>

<script>
  import { inject } from "vue"

  export default {
    name: "AddTodoBar",
    setup() {
      const store = inject("store")

      return { store }
    }
  }
</script>
