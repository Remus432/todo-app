<template>
  <draggable v-model="todos" group="todos" item-key="_id">
    <template #item="{element, index}">
      <Todo :key="index" :id="element._id" :text="element.text" :isCompleted="element.isCompleted"  />
    </template>
  </draggable>
</template>

<script>
  import draggable from "vuedraggable"
  import Todo from "./Todo"

  export default {
    name: "DraggableList",
    components: {
      draggable,
      Todo
    },
    props: {
      todos: Array
    }
  }
</script>
