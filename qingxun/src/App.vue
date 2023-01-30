<template>
  
<HelloWorld ref="getEmoji" @changeText="changeText"></HelloWorld>>
<el-input id="textarea" class="chatInput" type="textarea" :rows="3" placeholder="请输入内容" v-model="message"/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{

changeText() {
            var textArea = document.getElementById('textarea');
            function changeSelectedText(obj, str) {
                 if (document.selection) {
                    // IE浏览器
                    obj.focus();
                    var sel = document.selection.createRange();
                    sel.text = str;
                }
            }
            changeSelectedText(textArea, this.$refs.getEmoji.faceList[this.$refs.getEmoji.emojiItem]);
            this.message = textArea.value;// 要同步data中的数据
            console.log(this.$refs.getEmoji.faceList[this.$refs.getEmoji.emojiItem]);
        },
}

  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
