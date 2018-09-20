<template>
  <div id="app">
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
  background-color: #fff;
}
@import './style/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} 
</style>
