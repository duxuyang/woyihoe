<template>
  <div>
<el-container>
  <el-header>
    <div class="vas_img1"></div>
    <div class="top_right">
      <div class="right_top2">
        <div class="rtimg"></div>
        <div class="rttext">顾家家居旗舰店</div>
      </div>
      <div class="right_top1">
        <div class="simg"></div>
        <div class="sinfo">消息中心(<em> 10 </em>)</div>
        <img src="" alt="">
      </div>
    </div>
  </el-header>
  <el-container>
    <el-aside >
      <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="m1">选项1</el-menu-item>
          <el-menu-item index="1-2" @click="m2">选项2</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1" @click="">选项1</el-menu-item>
          <el-menu-item index="3-2" @click="">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
  </div>
</template>
<script type="text/javascript">
 export default{
    data:function(){
      return {
        msg:'Hello UserList'
      }
    },
    methods:{
      m1:function(){
        this.$router.push('/demo1');
      },
      m2:function(){
        this.$router.push('/demo2');
      } 
    }
  }
</script>
<style>
  .el-header{
   /* background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    height: 70px !important;
    line-height: 70px;
    position: relative;
        padding: 0 0 !important; 
  }
  
  .el-aside {
    width:200px !important;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    position: absolute;
    top:70px;
    left:0;
    bottom: 0;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    margin-left:200px;
  }


  /*头部*/
.top{
  width:100%;
  height:70px;
  overflow: hidden;
}
.vas_img1{
  float: left;
  background:url(../assets/images/logo_aa_01.png) no-repeat;
  width:20%;
  height:100%;
  background-size: 100% 100%;
}
.top_right{
  float: left;
  width:80%;
  height:87px;
  overflow: hidden;
  line-height: 70px;
  border-bottom:3px solid #e7e7e7;
}
.right_top1{
  display: flex;
  align-items :center;
  float:right;
  margin-right:42px;
  overflow: hidden;
  cursor:pointer;
}
.right_top1 .simg{
  width:30px;
  height:30px;
  margin-right:15px;
  background: url(../assets/images/laba_03.png) no-repeat;
  background-size: 100% 100%;
}
.right_top1 .sinfo{
  font-family:"微软雅黑";
  font-size:20px;
  color:#e7ebf4;
}
.right_top1 span em{
  color:red;
}
.right_top2{
   display: flex;
   align-items :center;
  width:28%;
  height:100%;
  background: #e7ebf4;
  float:right;
  overflow: hidden;

}
.right_top2 .rtimg{
  width:21%;
  height:60px;
  border-radius:50px;
  margin-left:66px;
  margin-right:10px;
  background: url(../assets/images/touxiang_03.png) no-repeat;
  background-size: 100% 100%;

}
.right_top2 .rttext{
  float:left;
  font-family:"微软雅黑";
  font-size:20px;
}
  


</style>