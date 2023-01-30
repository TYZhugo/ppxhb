<template>
  <div class="main">
    <p>请输入城市：</p>
    <input v-model="location" />
    <button @click="weatherCheck">查询</button>
    <p v-for="(item , index) in list" :key="index" @click="check(item.name,item.id)" class="city">{{item.name}}</p>
    <div class="showW">
        <Show :isshow="isShow" :nowWheather="nowW" :showName="showName"></Show>
    </div>
  </div>
</template>

<script >
import Show from './Show.vue'
export default {
  name: "Home",
  data() {
    return {
      location: "",
      list: [],
      nowW:[],
      isShow:false,
      showName:''
    };
  },
  components:{
    Show
  },
  methods: {
    weatherCheck() {
      this.axios
        .get("https://geoapi.qweather.com/v2/city/lookup?",{
            params:{
            location:this.location,
            key:"d728fc13d1034790be79e8098737ef3a"
            }
        }).then((data)=>{
            console.log(data)
            this.list=data.data.location
            console.log(this.list)
            alert("click the city whose weather you want to know")
        })
    },
    check(name,id){
        this.axios.get("https://devapi.qweather.com/v7/weather/now?",{
            params:{
              location:id,
              key:"d728fc13d1034790be79e8098737ef3a"
            }
        }).then((res)=>{
            console.log(res)
            this.nowW = res.data.now
            this.isShow = true
            this.showName = name
        })
    }
  },
};
</script>

<style>
.showW{
    font-size: 20px;
}
.city{
    cursor: pointer;
}
</style>