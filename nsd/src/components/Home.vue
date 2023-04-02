<template>
  <div class="Main">
    <div>
      <el-switch
      v-model="value1"
      class="mb-2"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #00B6B6"
      active-text="Day"
      inactive-text="Week"
      />
      <Function v-if="value1"></Function>
      <Week v-if="!value1"></Week>
    </div>
  </div>
</template>

<script>
import Function from './Function.vue'
import Week from './Week.vue'
export default {
    name:'Home',
    components:{
      Function,
      Week
    },
    data(){
      return{
        value1:true
      }
    },
    methods:{
      
    }
}
</script>

<style>


</style>