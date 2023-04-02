<template>
  <div class="Week">
    <div class="WeekList">
        <div class="OneDayList">
            <h1>周一</h1>
            <div v-for="(item,index) in Monday" :key="index" class="Employees">
                <div class="Employee" @click="showInfo(item)">
                    {{ item.time }}
                    <div class="Employee-info">
                    <img :src="(item.position=='门店经理'?imag2:(item.sex=='男'?imag1:imag3))"/>
                    <div>
                        <p>{{ item.name }}</p>
                        <p>{{ item.position }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="OneDayList">
            <h1>周二</h1>
            <div v-for="(item,index) in Tuesday" :key="index" class="Employees">
                <div class="Employee" >
                    {{ item.time }}
                    <div class="Employee-info">
                    <img :src="(item.position=='门店经理'?imag2:(item.sex=='男'?imag1:imag3))"/>
                    <div>
                        <p>{{ item.name }}</p>
                        <p>{{ item.position }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="OneDayList">
            <h1>周三</h1>
            <div v-for="(item,index) in Wednesday" :key="index" class="Employees">
                <div class="Employee" >
                    {{ item.time }}
                    <div class="Employee-info">
                    <img :src="(item.position=='门店经理'?imag2:(item.sex=='男'?imag1:imag3))"/>
                    <div>
                        <p>{{ item.name }}</p>
                        <p>{{ item.position }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="OneDayList">
            <h1>周四</h1>
            <div v-for="(item,index) in Thursday" :key="index" class="Employees">
                <div class="Employee" >
                    {{ item.time }}
                    <div class="Employee-info">
                    <img :src="(item.position=='门店经理'?imag2:(item.sex=='男'?imag1:imag3))"/>
                    <div>
                        <p>{{ item.name }}</p>
                        <p>{{ item.position }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="OneDayList">
            <h1>周五</h1>
            <div v-for="(item,index) in Friday" :key="index" class="Employees">
                <div class="Employee" >
                    {{ item.time }}
                    <div class="Employee-info">
                    <img :src="(item.position=='门店经理'?imag2:(item.sex=='男'?imag1:imag3))"/>
                    <div>
                        <p>{{ item.name }}</p>
                        <p>{{ item.position }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog
    v-model="centerDialogVisible"
    title="员工信息"
    width="30%"
    align-center
    >
    <input v-model="personalInfo.name"/>
    <span>{{ personalInfo }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script>
export default {
    name:'Week',
    data(){
        return{
            Monday:[
                {
                    name:'张三',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00'
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00'
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00'
                },
                {
                    name:'xiaoA',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00'
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00'
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00'
                }
            ],
            Tuesday:[
                {
                    name:'xiaoA',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00'
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00'
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00'
                },
                {
                    name:'xiaoA',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00'
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00'
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00'
                }
            ],
            Wednesday:[
                {
                    name:'xiaoA',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00'
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00'
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00'
                },
                {
                    name:'xiaoA',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00'
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00'
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00'
                }
            ],
            Thursday:[
                {
                    name:'xiaoA',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00'
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00'
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00'
                },
                {
                    name:'xiaoA',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00'
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00'
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00'
                }
            ],
            Friday:[
                {
                    name:'xiaoA',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00'
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00'
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00'
                },
                {
                    name:'xiaoA',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00'
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00'
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00'
                }
            ],
            Free:[],
            imag1:require('../assets/yuangong.png'),
            imag2:require('../assets/jingli.png'),
            imag3:require('../assets/nvyuangong.png'),
            centerDialogVisible:false,
            personalInfo:{}
        }
    },
    methods:{
        showInfo(item){
            this.centerDialogVisible = true
            this.personalInfo = item
        }
    }
    

}
</script>

<style>
.WeekList{
    display: flex;
    margin-left:100px;
}
.OneDayList{
    border: 1px solid gray;
    width: 200px;
    text-align: center;
    background-color: whitesmoke;
}
.Employee{
    border-top-style:solid;
    border-top-width: 1px;
    
}
.Employee :hover{
    cursor: pointer;
}
.Employee-info{
    display: flex;
    align-items: center;
    justify-content: center;
}
.Employees{
    height: 100px;
    
}
.Employee img{
    width: 52px;
    height: 52px;
    margin-right: 20px;
}
</style>