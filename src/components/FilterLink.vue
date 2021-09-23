<template>
  <li class="filter-options__item">
    <a @click="store.methods.switchFilter" :data-filter="option" :class="`filter-options__link ${setActiveClass(option, store.state.selectedFilter)}`" href="#">{{option}}</a>
  </li>
</template>

<script>
  import { inject } from "vue"

  export default {
    name: "FilterLink",
    props: {
      option: String
    },
    methods: {
      setActiveClass(option, currFilter) {
        return option === currFilter ? "active" : ""
      }
    },
    setup() {
      const store = inject("store")

      return { store }
    }
  }
</script>
