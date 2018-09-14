<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body,form,input,textarea,select,option,ul,ol,li,dt,dd,p,pre,h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  border: none;
}
a {
  text-decoration: none;
}
body{
  font-size:0.28rem;
}
@import './style/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  // @extend .all-border;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
