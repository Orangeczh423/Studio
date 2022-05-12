<style>
    body {
        background-color: #FFFFFF;
        overflow-x: hidden;
        border-bottom: #50bfff solid 7px;
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
    }

    .mylogo {
        height: 40px;
        margin-left: 80px;
    }

    .pdf {
        width: 1000px;

    }

    .el-menu {
        background-color: #FFFFFF;
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
        font-size: 18px;
    }

    #toolbarViewer {
        opacity: 0;
    }

    .el-menu-item.is-active {
        background-color: #40a0ff58;
    }

    .el-submenu__title {
        color: rgb(0, 0, 0);
        font-size: 18px;
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
        color: #0080FF;
    }

    .p2 {

        transition: color 1s;
        color: #7a7a7c;
    }

    .p2:hover {
        color: #0080FF;
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
        border-left: 5px solid #0080FF;
    }

    .a {
        text-decoration: none;
    }
</style>
<template>

    <div id="app" oncontextmenu="return false" style="background-color: #FFFFFF;min-height:800px">
        <div class="dsr" style="width:110%;background-color: #FFFFFF; overflow: hidden">
            <img src="../src/assets/mylogo.png" class="mylogo" alt="">
            <a href="https://github.com/Orangeczh423"><img src="../src/assets/github.png" class="git" alt="github"></a>
        </div>

        <div style="margin-top:120px;background-color:#FFFFFF;padding:0;">
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="4" style="position:fixed;left:-10px;width:300px;border-right:0">
                    <div>
                        <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px">
                            <router-link class="a" to="/">
                                <el-menu-item index="1"><img class="myicon" src="../src/assets/home.png" alt="">Home
                                </el-menu-item>
                            </router-link>
                            <el-submenu index="2">
                                <template slot="title">
                                    <img class="myicon" src="../src/assets/logo.png" alt="">
                                    <span>Vue.js</span>
                                </template>
                                <router-link class="a" to="/Daily">
                                    <el-menu-item index="2-1">
                                        踩坑日志
                                    </el-menu-item>
                                </router-link>
                                <router-link class="a" to="/HelloWorld">
                                    <el-menu-item index="2-2">
                                        Vue的SPA特性
                                    </el-menu-item>
                                </router-link>
                                <el-menu-item style="color: gray;" index="2-3">
                                    插值绑定
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item style="color: gray;" index="3"><img class="myicon" src="../src/assets/media.png" alt="">数字媒体技术基础
                            </el-menu-item>
                            <!-- <el-submenu index="4">
                                <template slot="title">
                                    <img class="myicon" src="../src/assets/cs.png" alt="">
                                    <span>计算机组成原理课程设计</span>
                                </template>
                                <router-link class="a" to="/HelloWorld">
                                    <el-menu-item index="4-1">
                                        Vue的SPA特性
                                    </el-menu-item>
                                </router-link>
                                <el-menu-item index="4-2">
                                    插值绑定
                                </el-menu-item>
                            </el-submenu> -->
                        </el-menu>
                    </div>
                    <footer style="position:fixed;bottom:10px;left:10px;display:flex;font-size:10px">
                        <p class="p2">©CZH 2022.Copyright</p>
                    </footer>
                </el-col>
                <el-col :xs="20" :sm="20" :md="20" :lg="20" style="margin-top:50px;margin-left:320px ;">
                    <!-- 组件化显示内容 -->
                    <router-view></router-view>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import pdf from 'vue-pdf'
  export default {
    components:{
        pdf
    },
      data(){
          return {
              welcome:'你好！欢迎来到 OrangeStudio ，本网站用于个人学习使用，将会在本网页持续更新前端学习和课程内容。热爱前端设计和开发的数媒程序猿一只。本网站使用Vue.js和及其官方UI框架（饿了么团队开发的element UI）进行开发，虽然本站貌似实现了数据与页面的分离，但是并没有实际作用，这还是一个静态网站（后端知识为0！！）。本网站中的大部分文档采用嵌入pdf实现，既减少了Markdown语法使用成本，也更加灵活，降低开发难度。未来本站将陆续实现文档上传、富文本编写等功能，但那不知道是猴年马月了。 By Chengzihan V0.1 2022/5/11',
              aboutlion:'这是一只来自codepen的狮子，使用Three.js编程实现。按住鼠标左键即可打开电风扇，让狮子凉爽一下！其采用iframe插入到了html网页中。作者： <el-link type="primary">https://codepen.io/Yakudoo/pen/YXxmYR</el-link>',
              searchCriteria: '',
              breadcrumbItems: ['首页']
          }
      },
      
      methods:{
         
      },
  }
</script>

<style>
    .copy-text{
        height: 30px;
        width: 60px;
        background-color: #c5def7;
        border: 0px;
        border-radius: 9px;
        color: rgb(0, 0, 0);
        position: relative;
        float: right;
        right: 10px;
        cursor: pointer;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: background-color 1s;
    }   
    .copy-text:hover{
        background-color: #3893ed;
    }
    .tip {
        padding: 8px 16px;
        background-color: #9ce1ff79;
        border-radius: 0px;
        border-left: 5px solid #50bfff;
        margin: 20px 0;
        width: 1070px;
        color: rgb(130, 127, 127);
        font-size: 18px;
        transition: color 1s;
      }
    
      .tip:hover {
        color: rgb(0, 0, 0);
        border-left: 5px solid #0080FF;
      }
      .code{
          padding-top: 17px;
          background-color: black;
          font-size: 15px;
          font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          color: rgb(144, 140, 136);
          transition: color 2s;
      }
      .code:hover{
          color: bisque;
      }
</style>