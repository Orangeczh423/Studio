<style>
  @font-face {
    font-family: codesans;
    src: url(./assets/misans.ttf);
  }

  @font-face {
    font-family: code;
    src: url(./assets/codes.ttf);
  }

  body {
    font-family: codesans;
    background-color: #ffffff;
    overflow-x: hidden;
    border-bottom: #50bfff solid 7px;
    margin-bottom: -20px;
    margin-right: -10px;
  }

  .dsr {
    position: fixed;
    margin-bottom: 40px;
    z-index: 100;
    top: -1px;
    left: 0;
    padding-left: 10px;
    height: 120px;
    display: flex;
    align-items: center;
    border-bottom: 0.1px solid #9cceff7a;
    border-top: 7px solid #50bfff;
    background-color: rgba(255, 255, 255, 0.97); 
    backdrop-filter: blur(1000px);
  }

  .mylogo {
    height: 40px;
    margin-top: 0px;
    margin-left: 50px;
  }

  .pdf {
    width: 1000px;
  }

  .el-menu {
    background-color: #ffffff;
  }

  .el-menu {
    border-right: 0.1px solid #9cceff7a;
  }

  .el-menu-item:focus,
  .el-menu-item:hover {
    outline: 0;
    background-color: #40a0ff58;
  }

  .el-menu-item {
    color: rgb(0, 0, 0);
    font-size: 14px;
  }

  #toolbarViewer {
    opacity: 0;
  }

  .el-menu-item.is-active {
    background-color: #40a0ff58;
  }

  .el-submenu__title {
    color: rgb(0, 0, 0);
    font-size: 14px;
  }

  .el-submenu__title:hover {
    background-color: #40a0ff58;
  }

  .git {
    height: 25px;
    position: absolute;
    right: 200px;
  }

  .myicon {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }

  .p1 {
    transition: color 1s;
    color: #7a7a7c;
  }

  .p1:hover {
    color: #0080ff;
  }

  .p2 {
    transition: color 1s;
    color: #7a7a7c;
  }

  .p2:hover {
    color: #0080ff;
  }
</style>
<style>
  .lopic {
    height: 235px;
    transition: height 1s;
    cursor: pointer;
  }

  .lopic:hover {
    height: 240px;
  }

  .el-divider {
    background-color: #40a0ff22;
  }

  .tip {
    padding: 8px 16px;
    background-color: #17171879;
    border-radius: 0px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
    width: 1070px;
    color: rgb(100, 99, 99);
    font-size: 18px;
    transition: color 1s;
  }

  .tip:hover {
    color: rgb(193, 189, 189);
    border-left: 5px solid #0080ff;
  }

  .a {
    text-decoration: none;
  }

  .container {
    height: 70px;
    width: 800px;
    margin: 100px auto 0 auto;
    position: absolute;
    float: right;
    right: -210px;
    top: -50px;
  }

  .parent {
    position: relative;
  }

  .search {
    width: 300px;
    height: 40px;
    border-radius: 18px;
    outline: none;
    border: 2px solid #0080ff;
    padding-left: 20px;
    position: absolute;
  }

  .btn {
    height: 35px;
    width: 45px;
    position: absolute;
    top: 4px;
    left: 272px;
    background-color: #0080ff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    color: white;
    transition: background-color 1s;
    text-align: center;
  }

  .btn:hover {
    background-color: #217dd8;
  }
</style>
<template>
  <div class="main" id="app" oncontextmenu="return false" style="background-color: #ffffff; min-height: 800px">
    <template>
      <el-backtop></el-backtop>
    </template>
    <div class="dsr" style="width: 110%; overflow: hidden">
      <div class="container">
        <form action="" class="parent">
          <input class="search" id="searchInput" type="text" placeholder="在浏览器搜索" />
          <input class="btn" @click="to" value="GO" />
        </form>
      </div>

      <img src="../src/assets/mylogo.png" class="mylogo" alt="" />
      <a href="https://github.com/Orangeczh423"><img src="../src/assets/github.png" class="git" alt="github" /></a>
    </div>

    <div style="margin-top: 120px; background-color: #ffffff; padding: 0">
      
     


      <el-row :gutter="10">
        <el-col  :xs="4" :sm="4" :md="4" :lg="4" style="width: 300px; border-right: 0">
          <el-scrollbar  style="position:fixed;left: -10px; height:100%;width:300px">
            <el-menu  unique-opened="true"  class="el-menu-vertical-demo" style=" min-height: 1000px;">
              <!-- <el-menu  unique-opened="true"  class="el-menu-vertical-demo" style="min-height: 1000px;"> -->
              <router-link class="a" to="/">
                <el-menu-item index="1"><img class="myicon" src="../src/assets/home.png" alt="" />Home
                </el-menu-item>
              </router-link>
              <el-submenu index="2">
                <template slot="title">
                  <img class="myicon" src="../src/assets/logo.png" alt="" />
                  <span>Vue.js</span>
                </template>
                <router-link class="a" to="/Daily">
                  <el-menu-item index="2-1"> 踩坑日志 </el-menu-item>
                </router-link>
                <router-link class="a" to="/HelloWorld">
                  <el-menu-item index="2-2"> Vue的SPA特性 </el-menu-item>
                </router-link>
                <router-link class="a" to="/chazhi">
                  <el-menu-item index="2-3"> 插值绑定 </el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <img class="myicon" src="../src/assets/cs.png" alt="" />
                  <span>网页动画</span>
                </template>
                <router-link class="a" to="/playcanvas">
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <!-- <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item>
                  <el-menu-item index="3-1"> PlayCanvas游戏制作 </el-menu-item> -->
                </router-link>
              </el-submenu>
              <el-menu-item style="color: gray" index="4"><img class="myicon" src="../src/assets/mt.png"
                  alt="" />数字媒体技术基础
              </el-menu-item>
              <el-menu-item style="color: gray" index="5"><img class="myicon" src="../src/assets/js.png"
                alt="" />Javascript
            </el-menu-item>
              <el-menu-item style="color: gray" index="6"><img class="myicon" src="../src/assets/ajax.png"
                alt="" />Ajax
            </el-menu-item>
            </el-menu>

            
          </el-scrollbar> 
        </el-col>
        <el-col class="elcol" :xs="20" :sm="20" :md="20" :lg="20" style="margin-top: 50px; margin-left: 320px">
          <!-- 组件化显示内容 -->

          <router-view></router-view>
          <a href="https://console.cloud.tencent.com/tcb/hosting/index?envId=nannan-8gceb5nt124c014d&rid=4&moduleName=&tabId=file"><img src="./assets/rt.png" class="rt" alt="Power."></a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<!-- <link rel="stylesheet" href="./assets/layui/css/layui.css"> -->
<!-- <script src="https://www.layuicdn.com/layui-v2.6.8/layui.js"></script> -->

<!-- <link href="https://cdn.bootcdn.net/ajax/libs/codemirror/5.65.3/codemirror.min.css" rel="stylesheet"> -->
<!-- <script src="https://cdn.bootcdn.net/ajax/libs/codemirror/5.65.3/codemirror.js"></script> -->

<script type="text/ecmascript-6">
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  data() {
    return {
      welcome: "",
      aboutlion:
        '这是一只来自codepen的狮子，使用Three.js编程实现。按住鼠标左键即可打开电风扇，让狮子凉爽一下！其采用iframe插入到了html网页中。作者： <el-link type="primary">https://codepen.io/Yakudoo/pen/YXxmYR</el-link>',
      searchCriteria: "",
      breadcrumbItems: ["首页"],
    };
  },

  methods: {
    to() {
      var searchValue = document.getElementById("searchInput").value;
      window.location.href = "https://cn.bing.com/search?q=" + searchValue;
    },
  },
  watch: {
    //实现切换路由回到顶部
    $route: function (to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style>
  .rt{
    position: relative;
    height: 42px;
    bottom: 1px;
  }
  .txy {
    height: 40px;
    position: relative;
    left:300px;
  }
  .mue{
    overflow-y: auto;
   
  }
  .mue::-webkit-scrollbar {
    display: none;
  }
  .laycode {
    position: relative;
    margin: 10px 0;
    padding: 15px;
    line-height: 20px;
    border: 1px solid #eee;
    border-left-width: 6px;
    background-color: #fafafa;
    color: #333;
    font-family: Courier New;
    font-size: 12px;
  }

  .copy-text {
    height: 30px;
    width: 60px;
    background-color: #73b0edaa;
    border: 0px;
    border-radius: 9px;
    color: rgb(255, 255, 255);
    position: relative;
    float: right;
    right: 10px;
    cursor: pointer;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    transition: background-color 1s;
  }

  .copy-text:hover {
    background-color: #0080ff;
  }

  .tip {
    padding: 8px 16px;
    background-color: #9ce1ff79;
    border-radius: 0px;
    
    margin: 20px 0;
    width: 1070px;
    color: rgb(130, 127, 127);
    font-size: 18px;
    transition: color 1s,border-left 1s;
    /*用逗号让多个过渡属性分隔*/
  }
  .tip{
    border-left: 5px solid #50bfff;
    /*transition: border-left 3s;*/
  }
  .tip:hover {
    color: rgb(0, 0, 0);
    border-left: 5px solid #0080ff;
  }

  .code {
    letter-spacing: 3px;
    padding-top: 17px;
    background-color: black;
    font-size: 14px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: rgb(144, 140, 136);
    transition: color 2s;
  }

  .code:hover {
    color: rgb(234, 197, 152);
  }

  .inlinepic {
    width: 600px;
    height: 300px;
  }

  /*滚动条样式*/
  ::-webkit-scrollbar {
    width: 4px;
    /*height: 4px;*/
    background-color: #e4f5ff;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(7, 68, 71, 0.1);
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(159, 241, 245, 0.1);
  }
</style>