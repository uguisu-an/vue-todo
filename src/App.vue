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
$primary: #ff304f;
$secondary: #cacaca;
$success: #015668;
$danger: #06648c;
$info: #0f81c7;
$warning: #0de2ea;
$light: #ececec;
$dark: #222222;

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
