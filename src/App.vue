<template>
  <Header />
  <AddTodoBar />
  <Todos :loadingTime="store.state.loadingTime" />
  <FilterTodosBar v-if="getScreenSize()" />
  <footer class="footer">
    <span class="footer__info">Drag and drop to reorder list</span>
  </footer>
</template>

<script>
  import Header from "@/components/Header"
  import AddTodoBar from "@/components/AddTodoBar"
  import Todos from "@/components/Todos"
  import FilterTodosBar from "@/components/FilterTodosBar"
  import { provide } from "vue"
  import store from "@/store"

  export default {
    name: 'App',
    components: {
      Header,
      AddTodoBar,
      Todos,
      FilterTodosBar
    },
    methods: {
      getScreenSize() {
        return window.innerWidth <= 1000 
      }
    },
    setup() {
      provide("store", store)
  
      return { store }
    }
  }
</script>

<style lang="sass">
  @import "@/App.sass"

</style>
