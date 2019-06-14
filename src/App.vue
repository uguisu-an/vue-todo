<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
$primary: #528078;
$secondary: #eed75a;
$success: #fec100;
$danger: #703b3b;
$info: #63e792;
$warning: #ffe869;
$light: #fdfbf7;
$dark: #555555;

@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: $dark;
    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>
