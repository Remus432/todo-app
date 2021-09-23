<template>
  <header class="header">
    <h1 class="header__logo">Todo</h1>
    <img @click="toggleTheme" src="/images/icon-moon.svg" alt="Theme Icon" class="header__theme">
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toggleTheme() {
      document.documentElement.classList.toggle("dark-theme")
      document.body.classList.toggle("dark-theme")
    }
  }
}
</script>

