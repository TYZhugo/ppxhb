<template>
  <div class="Report">
    <div class="Report_Header">
        <p>行为检测报告</p>
    </div>
    <div class="Report_Name">
        <p>姓名：XXX</p>
        <p>学号：1111111</p>
    </div>
    <el-divider />
    <div class="Report_Content">
        <p>结构分析</p>
        <p>整体结果:</p>
        <div class="Overall_results">{{this.Overall_results}}</div>
        <p>行为异常分析:</p>
        <div class="Action_analyse">{{this.Action_analyse}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Report',
    data(){
        return{
            Overall_results:"通过答题结果分析，可能存在心理问题为：……",
            Action_analyse:"1：初入大学，小青发现自己有些社恐，不知道自己怎么去人际交往，对此她很恐慌，经常失眠，你会建议她怎么办？\nA：顺其自然，有缘千里来相会B：向家人或老师寻求意见，正视社交问题，逐步克服恐惧C：一味付出去换取好朋友们D：我也社恐导致失眠等问题，不知道怎么办用户选择：B微表情分析：积极10%，消极90%，可能存在可以隐瞒自己社交压力的问题"
        }
    }

}
</script>

<style>
.Report{
    margin-left: 25px;
}
.Report_Header{
    width:700px;
    font-size: 40px;
    color: rgba(212, 48, 48, 1);
    display: flex;
    justify-content: center;
}
.Report_Name{
    font-size: 24px;
}
.Report_Content p{
    font-size: 24px;
    color: rgba(212, 48, 48, 1);
}
.Overall_results{
    font-size: 18px;
}
.Action_analyse{
    font-size: 18px;
}
</style>