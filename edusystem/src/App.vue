<template>
<div class="app">
  <Header></Header>
  <div class="main">
  <Menu></Menu>
<router-view></router-view>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from "./components/Menu.vue"
export default {
  name: 'App',
  components: {
    Menu,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top:0;
  width: 100%;
  display: flex;
  justify-content: center;

}
.app{
  border: 1px solid #000;
  height:914px;
  background-color: white;
  width: 1200px;
}
</style>
