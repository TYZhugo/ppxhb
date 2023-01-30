<template>
  <div class="Information">
    <div><img :src="imgUrl1"/></div>
    <div>
        <p>教师信息：</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'Information',
    data(){
        return{
            imgUrl1:require('../assets/Header.png')
        }
    }

}
</script>

<style>
.Information{
    color: rgba(212, 48, 48, 1);
    font-size: 24px;
}
</style>