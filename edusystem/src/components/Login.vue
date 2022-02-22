<template>
  <div>
      nihao
      <button @click="login">123</button>
  </div>
</template>

<script>
export default {
    name:'Login',
    methods:{
        login(){
            this.$store.commit('loginSuccess')
            this.$router.push('/')
        }
    }
    
}
</script>

<style>

</style>