<template>
<div>
  <Header></Header>
<div class='main'>
<div class='menu'>
  <Menu></Menu>
</div>
<router-view></router-view>
</div>
</div>
</template>

<script>
import Header from './Header.vue'
import Menu from './Menu.vue'
export default {
  name: 'App',
  components: {
    Header,
    Menu
  },
  
}
</script>

<style>
.main{
  display: flex;
}

.menu{
width:300px;
background-color: aquamarine;
height:700px;
}
</style>
