<template>
  <draggable  v-model="todos" group="todos" item-key="_id">
    <template #item="{element, index}">
      <Todo :key="index" :id="element._id" :text="element.text" :isCompleted="element.isCompleted"  />
    </template>
  </draggable>
</template>

<script>
  import draggable from "vuedraggable"
  import Todo from "./Todo"
  import { gsap } from "gsap"
  import { onMounted } from "vue"

  export default {
    name: "DraggableList",
    components: {
      draggable,
      Todo
    },
    props: {
      todos: Array
    },
    setup() {
      onMounted(() => {
        setTimeout(() => {
          document.querySelector(".todos__container").classList.remove("hide")
          gsap.from(".todos__item", { opacity: 0, y: 50, stagger: .5, ease: "power1.out", duration: .8 })
        }, 500)
        
      })
    }
  }
</script>

<style lang="sass">
  .list-enter-from 
    opacity: 0
  
  .list-enter-to
    opacity: 1
  
  .list-enter-active
    transition: all .5s ease-in
</style>