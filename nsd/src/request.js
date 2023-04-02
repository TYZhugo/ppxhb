 import axios from "axios";


 const instance = axios.create({
    baseURL:'https://geoapi.qweather.com/v2/city/lookup?',//这个地方写要请求的传递参数的地址，你先写，后期我再改
    timeout:5000
 })


 //请求拦截器
 instance .interceptors.request.use(function(config){
    return config;
 },function(error) {
    return Promise.reject(error);
 })

 //响应拦截器
 instance.interceptors.response.use(function(response) {
    return response;
 }, function (error){
    return Promise.reject(error);
 })


 export default instance