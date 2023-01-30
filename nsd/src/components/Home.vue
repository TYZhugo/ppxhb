<template>
  <div class="Main">
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
    name:'Home',
    methods:{
        login(){
            this.$router.push('/Login')
        }
    }
}
</script>

<style>

</style>