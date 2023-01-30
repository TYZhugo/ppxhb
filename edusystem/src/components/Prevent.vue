<template>
  <div class="Prevent">
    <div class="Prevent_Header">
        <span>姓名</span>
        <span>疏导次数</span>
        <span>关键词</span>
        <span>严重程度</span>
    </div>
    <div v-for="(i) in 6" :key="i" @click="goReport" class="students"><img :src="imgUrl" alt="空空如也"></div>
  </div>
</template>

<script>
export default {
    name:'Prevent',
    data(){
        return{
            imgUrl:require('../assets/StudentsHeader.png')
        }
    },
    methods:{
        goReport(){
            this.$router.push('/Report')
        }
    }

}
</script>

<style>
.Prevent_Header{
    display: flex;
    justify-content: space-around;
    width: 700px;
    color: rgba(212, 48, 48, 1);
    font-size: 36px;
    margin-left: 70px;
}
.students{
    cursor: pointer;
}
</style>