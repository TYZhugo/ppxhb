<template>
  <div>
    <el-popover
      popper-class="biaoqing"
      placement="top"
      :width="400"
      trigger="click"
    >
      <template #reference>
        <button class="emotionSelect"><img :src="imgUrl" /></button>
      </template>
      <div class="functionList">
        <div @click="getEmo(index)" class="functionItem">
          <el-tooltip effect="light">
            <template #content> 班级信息</template>
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="3"
              :on-exceed="handleExceed"
            >
              <img :src="imgUrl1"/>
            </el-upload>
          </el-tooltip>
          <el-tooltip effect="light">
            <template #content> 班级任务</template>
            <img :src="imgUrl2"/>
          </el-tooltip>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CorclePlus",
  data() {
    return {
      imgUrl: require("../assets/Functions.png"),
      imgUrl1:require("../assets/Information.png"),
      imgUrl2:require("../assets/Task.png")
    };
  },
  components: {},
};
</script>

<style>
.functionList {
  justify-content: space-around;
}
.functionItem.el-icon {
  margin-left: 10px;
}
.functionItem svg {
  width: 35px;
  cursor: pointer;
}
.functionItem{
    display: flex;
    justify-content: space-around;
}
</style>