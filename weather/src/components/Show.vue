<template>
  <div v-if="isshow">
    <p>{{showName}}</p>
    <p>天气情况:{{nowWheather.text}}</p>
    <p>风向:{{nowWheather.winDir}}，{{nowWheather.windScale}}级</p>
    <p>能见度:{{nowWheather.vis}}KM</p>
    <p>云量(%):{{nowWheather.cloud}}</p>
    <p>观测时间:{{nowWheather.obsTime}}</p>
  </div>
</template>

<script >
export default {
    props:['nowWheather','isshow','showName']

}
</script>

<style>

</style>