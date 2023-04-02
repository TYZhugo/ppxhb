<template>
  <div class="Header" v-if="this.$store.state.isLogin">
    <div>
      <Dropdown class="Drop"></Dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
    name:'Header',
    components:{
      Dropdown
    }
}
</script>

<style>
.Header{
  width: 100%;
  height: 60px;
  background-color: rgb(187, 187, 187);
}
.Drop{
  float: right;
}
</style>