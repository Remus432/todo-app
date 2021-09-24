<template>
  <nav :class="`filter-options ${isLargeScreen ? 'lg-layout' : ''}`">
    <ul class="filter-options__list">
      <FilterLink :key="index" v-for="option, index in ['all', 'active', 'completed']" :option="option" />
    </ul>
  </nav>
</template>

<script>
  import FilterLink from "./FilterLink"

  export default {
    name: "FilterTodosBar",
    components: {
      FilterLink
    },
    props: {
      isLargeScreen: Boolean
    }
  }
</script>
