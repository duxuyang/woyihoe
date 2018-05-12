<template>
  <div>
    <div class="box">
      <div class="top">
        <img class="yj_logo" src="../assets/images/logo_03.png" alt="">
        <div class="caption">商家后台管理系统</div>
      </div>
      <div class="con">
        <div class="con_tu">
          <div class="con_top">
            <div class="ct_left">
              <img src="../assets/images/zhg_03.png" alt="">
            </div>
            <div class="ct_zi">用户登录</div>
            <div class="ct_right">
              <img src="../assets/images/yhg_03.png" alt="">
            </div>
          </div>  
          <div class="cc_ming">
            <img class="bsp1" src="../assets/images/yonghu_03.png" alt="">
            <input class="bip1" id="manager" type="text" v-model="phone" placeholder="请输入手机号">
          </div>
          <div class="cc_mima">
            <img class="bsp2" src="../assets/images/mima_03.png" alt="">
            <input class="bip2" id="password" type="password" v-model="pass" placeholder="请输入密码">
          </div>
          <div class="cc_yzm">
            <p class="yy"><input type="text" id="code" v-model="code" placeholder="填写验证码"/></p>
            <p class="yy" ><img src="/code" alt="" class="code_pic" id="code_pic"/></p>
            <p class="yy1" id="code_h" style="cursor:pointer;">
              <span id="code_h1" class="code_h3">看不清？,<br />
              <b id="code_h2">换一张
              </b></span>
            </p>
           </div>     
          <div id="login" @click="login">登录</div>
          <div class="login_re">
            <div class="lre_forget"><a href="">忘记密码？</a></div>
            <div class="lre_register"><a href="">注册</a></div>
          </div>
        </div>
      </div>
      <div class="foot">京ICP备16043352号-1 版权所有</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '',
      phone:'',
      pass:'',
      code:''
    }
  },
  methods:{
    login:function(){
      if(this.phone==""){
        alert("用户名不能为空");
      }else if(this.pass==""){
        alert("密码不能为空");
      }else if(this.code==""){
        alert("验证码不能为空");
      }else{

      }
    }
  }
}
</script>
<style scoped>
.box{
  width:100%;
  height:100%;
}
.top{
  overflow: hidden;
  width:100%;
  height:100px;
  line-height: 100px;
  padding-top:33px;
}
.yj_logo{
  float: left;
  margin-left: 165px;
  width:144px;
  height:62px;
}
.caption{
  float: left;
  height:62px;
  line-height: 62px;
  margin-left: 25px;
  font-size: 36px;
  font-family:"微软雅黑";
  color:#5e5e5e;
}
.con{
  background: url(../assets/images/bjtu_02.png) no-repeat;
  height:750px;
  background-size: 100% 100%; 
  position:relative;
}
.foot{
  height:90px;
  line-height: 90px;
  float:right;
  padding-right:100px;
  font-size: 20px;
  font-family: "微软雅黑";
  color:#c1c1c1;
}
.con_tu{
  width:420px;
  height:470px;
  padding-top:15px;
  background: rgba(90,90,90,0.8);
  overflow: hidden;
  position:absolute;
  top:0;
  right:100px;
}
.con_top{
  margin-top: 60px;
}
.ct_zi{
  color: #fff;
  font-size: 25.42px;
  font-family: "微软雅黑";
  float: left;
  margin: 0 6px;
  letter-spacing:1px;
}
.ct_left,.ct_right{
  margin-top:7px;
  float: left;
}
.ct_right{
  margin-top:4px;
  float:right;
}
.con_con{
  width:320px;
  margin: 0 auto;
}
.cc_ming,.cc_mima{
  overflow: hidden;
  width:320px;
  margin: 160px auto 0;
  border: 1.5px solid #fff;
  border-radius:5px;
}
.cc_yzm{
  overflow:hidden;
  width:320px;
  margin:20px auto 0;
  height:40px;
} 
.yy{
  float:left;
  height:40px;
  line-height:40px;
}
.yy1{
  float:left;
  height:40px;
  margin-left:18px;
}
.cc_mima{
  margin: 30px auto 0;
}
.bsp1,.bsp2{
  float: left;
  margin:6px 10px;
  border-right:2px solid #d8d8d8;
  padding-right:10px;
}
.bip1,.bip2{
  height:38px;
  float:right;
  width:263px;
  font-size: 20px;
  border:none;
  outline:none;
  background: rgba(255,255,255,0);
  color: rgba(255,255,255,0.9);
  font-family: "微软雅黑";
}
#code{
  height:38px;
  width:120px;
  border: 1.5px solid #fff;
  border-radius:5px;
  background: rgba(255,255,255,0);
  padding-left:5px;
  font-size:20px;
  color: rgba(255,255,255,0.9);
} 
#code_pic{
   display:inline-block;
   text-align:center;
  width:80px;
  height:38px;
  border: 1.5px solid transparent;
  background-color: #fff;
  color:blue;
  margin-left:20px;
  font-size:20px;
}

#code_h1{
  color:#fff;
  font-size:14px;
}
#code_h2{
  color:#3D9ED9;
}
.code_h3{
  height:10px;
}
.login_re{
  width:270px;
  overflow: hidden;
  margin:7px auto 0;
  font-size: 18px;
  color: #ccc;
  cursor: pointer;
  font-family: "微软雅黑";
}
.login_re a{
  color:#ccc;
}
.lre_forget{
  float:left;
}
.lre_register{
  float:right;
}
#login{
  width:307px;
  height:40px;
  margin: 35px auto 8px;
  text-align:center;
  background: #fe7549;
  color: #fff;
  line-height:45px;
  border-radius:5px;
  font-size: 20px;
  cursor: pointer;
  font-family: "微软雅黑";
  letter-spacing:2px;
}

</style>
