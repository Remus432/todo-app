<template>
  <section ref="bar" role="search">
    <form @submit="store.methods.addTodo" class="search-bar">
      <div class="search-bar__circle"></div>
      <input type="text" name="task" placeholder="Create a new todo..." class="search-bar__input">
    </form>
  </section>
</template>

<script>
  import { inject, onMounted, ref } from "vue"
  import { gsap } from "gsap"

  export default {
    name: "AddTodoBar",
    setup() {
      const store = inject("store")
      const bar = ref(null)

      onMounted(() => {
        gsap.from(bar.value, { opacity: 0, y: 100, ease: "power1.out", duration: 1 })
      })

      return { store, bar }
    }
  }
</script>
