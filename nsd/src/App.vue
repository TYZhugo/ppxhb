<template>
  <div class="App">
    <Header></Header>
    <div class="showArea"><router-view></router-view></div>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position : absolute;
	width : 100%;
	height : 100%;
  display: flex;
  justify-content: center;

}
.App{
  flex-wrap: wrap;
  width: 100%;
  background-image: url('./assets/beijing.jpg');
  background-size: cover;
}
.showArea{
  display: flex;
  justify-content: center;
}
</style>

