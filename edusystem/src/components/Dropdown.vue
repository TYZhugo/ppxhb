<template>
  <div class="menu-items" @click="isOpen = !isOpen">
    <el-dropdown>
    <span class="el-dropdown-link">
      <img :src="imagUrl"/>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="returnLogin"><svg class="icon" width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M512 512a192 192 0 100-384 192 192 0 000 384zm0 64a256 256 0 110-512 256 256 0 010 512zm320 320v-96a96 96 0 00-96-96H288a96 96 0 00-96 96v96a32 32 0 11-64 0v-96a160 160 0 01160-160h448a160 160 0 01160 160v96a32 32 0 11-64 0z"></path></svg>切换账号</el-dropdown-item>
        <el-dropdown-item><svg class="icon" width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M160 832h704a32 32 0 110 64H160a32 32 0 110-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"></path></svg>版本更新</el-dropdown-item>
        <el-dropdown-item><svg class="icon" width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M600.704 64a32 32 0 0130.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0134.432 15.36L944.32 364.8a32 32 0 01-4.032 37.504l-77.12 85.12a357.12 357.12 0 010 49.024l77.12 85.248a32 32 0 014.032 37.504l-88.704 153.6a32 32 0 01-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 01600.704 960H423.296a32 32 0 01-30.464-22.208L357.696 828.48a351.616 351.616 0 01-42.56-24.64l-112.32 24.256a32 32 0 01-34.432-15.36L79.68 659.2a32 32 0 014.032-37.504l77.12-85.248a357.12 357.12 0 010-48.896l-77.12-85.248A32 32 0 0179.68 364.8l88.704-153.6a32 32 0 0134.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 01423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 00-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 000 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0034.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0034.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 000-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 00-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 110 384 192 192 0 010-384zm0 64a128 128 0 100 256 128 128 0 000-256z"></path></svg>个人设置</el-dropdown-item>
        <el-dropdown-item @click="returnLogin"><svg class="icon" width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M352 159.872V230.4a352 352 0 10320 0v-70.528A416.128 416.128 0 01512 960a416 416 0 01-160-800.128z"></path><path fill="currentColor" d="M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"></path></svg>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
</template>

<script>
export default {
    name:'Dropdown',
    emits:['click'],
    data(){
        return{
            isOpen:false,
            imagUrl:require('../assets/Header.png')
        }
    },
    methods:{
      returnLogin(){
        this.$store.commit('loginChange')
        this.$router.push({path:'/Login'})
      }
    }
}
</script>

<style>
a{
    text-decoration: none;
}
.menu-items{
  border-radius: 0px 0px 16px 16px;
}
.el-dropdown-link{
  cursor: pointer;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>