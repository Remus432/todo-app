<template>
  <div ref="todos" class="todos__item" :id="_id">
    <div class="wrapper">
      <div @click="store.methods.toggleTodoCompletion" :class="`todos__item-circle ${isCompleted ? 'completed' : ''}`">
        <img src="/images/icon-check.svg" alt="Checked Icon" class="todos__item-check">
      </div>
      <h2 class="todos__item-task">{{text}}</h2>
    </div>
    <img @click="store.methods.clearTodo" src="/images/icon-cross.svg" alt="Cross Delete Icon" class="todos__item-del">
  </div>
</template>


<script>
  import { inject, ref, onMounted } from "vue"
  import { gsap } from "gsap"

  export default {
    name: "Todo",
    props: {
      _id: String,
      text: String,
      isCompleted: Boolean
    },
    setup() {
      const store = inject("store")
      const todos = ref(null)



      return { store, todos }
    }
  }
</script>

