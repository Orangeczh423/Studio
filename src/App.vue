<style>
    body {
        background-color: #2A2A2E;
        overflow-x: hidden;
        border-bottom: #50bfff solid 7px;
    }
    
</style>
<style scoped>
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
        border-bottom: 0.1px solid #40a0ff22;
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
        background-color: #2A2A2E;
    }

    
    .el-menu {
        border-right: 0.1px solid #00000022;
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
        outline: 0;
        background-color: #40a0ff58;
    }

    .el-menu-item {
        color: white;
        font-size: 18px;
    }

    #toolbarViewer {
        opacity: 0;
    }

    .el-menu-item.is-active {
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
<style scoped>
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
</style>
<template>
    <div oncontextmenu = "return false" style="background-color: #2A2A2E;min-height:800px">
        <div class="dsr" style="width:110%;background-color: #2A2A2E; overflow: hidden">
            <img src="../src/assets/mylogo.png" class="mylogo" alt="">
            <a href="https://github.com/Orangeczh423"><img src="../src/assets/github.png" class="git" alt="github"></a>
        </div>

        <div style="margin-top:120px;background-color:#2A2A2E;padding:0;">
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="4" style="position:fixed;left:-10px;width:300px;border-right:0">
                    <div>
                        <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px"
                            @select="handleSelect">
                            <el-menu-item index="1"><img class="myicon" src="../src/assets/home.png" alt="">Home
                            </el-menu-item>
                            <el-menu-item @click="jump1" index="2"><img class="myicon" src="../src/assets/logo.png"
                                    alt=""> Vue.js
                            </el-menu-item>
                            <el-menu-item index="3"><img class="myicon" src="../src/assets/media.png" alt="">数字媒体技术基础
                            </el-menu-item>
                        </el-menu>
                    </div>
                    <footer style="position:fixed;bottom:10px;left:10px;display:flex;font-size:10px">
                        <p class="p2">©CZH 2022.Copyright</p>
                    </footer>
                </el-col>
                <el-col :xs="20" :sm="20" :md="20" :lg="20" style="margin-top:50px;margin-left:320px ;">
                    <div>
                        <div style="color:aliceblue; padding:5px; margin:2px; background-color: #2A2A2E">
                            <el-breadcrumb separator="/">
                                <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.id">{{item}}
                                </el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </div>
                    <el-divider></el-divider>
                    <el-row :gutter="20" class="things">
                        <a href="https://v3.cn.vuejs.org/"><img class="lopic" src="../src/assets/Teches/vue.png"
                                alt="vue">
                        </a><a href="https://element.eleme.cn/#/zh-CN"><img class="lopic"
                                src="../src/assets/Teches/ele.png" alt="vue">
                        </a><a href="https://developer.mozilla.org/zh-CN/docs/learn/JavaScript"><img class="lopic"
                                src="../src/assets/Teches/js.png" alt="vue">
                        </a><a href="https://www.w3cschool.cn/css3/"><img class="lopic"
                                src="../src/assets/Teches/css.png" alt="vue">
                        </a><a href="https://zq99299.github.io/java-tutorial/"><img class="lopic"
                                src="../src/assets/Teches/java.png" alt="vue">
                        </a><a href="https://www.w3school.com.cn/python/python_reference.asp"><img class="lopic"
                                src="../src/assets/Teches/python.png" alt="vue"></a>
                    </el-row>

                    <div class="tip">
                        <p>{{welcome}}</p>
                    </div>
                    <div class="tip">
                        <p>这是一只来自codepen的狮子，使用Three.js编程实现。按住鼠标左键即可打开电风扇，让狮子凉爽一下！其采用iframe插入到了html网页中。作者： <el-link
                                type="primary">https://codepen.io/Yakudoo/pen/YXxmYR</el-link>
                        </p>
                    </div>
                    <iframe  height="800px" width="1200px" scrolling="no" src="../static/lion.html"
                        frameborder="0"></iframe>

                    <!-- <embed src="../static/1.pdf" type="application/pdf" width="1300px" height="100%" /> -->
                    <!-- <pdf ref="pdf" class="pdf" src="../static/1.pdf">
                    </pdf> -->
                    <!-- <iframe src="../static/1.pdf" marginwidth="0" frameBorder="0" allowtransparency="true" bordercolor="white" style="width:1170px;height:2500px" frameborder="0"></iframe> -->
                    <footer style="position:relative;display:flex;right:100px;float:right">
                        <p class="p1">最近编辑：2022/5/11</p>
                    </footer>
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
        jump1(){
            console.log(this);
            this.$router.push('/vuer')
          },
          /*
          handleIconClick(ev) {
              console.log(ev);
          },
          
          handleSelect(key, keyPath){
              switch(key){
                  case '1':
                      this.$router.push('/Page1');
                      this.breadcrumbItems  = ['首页']
                      break;
                  case '2':
                      this.$router.push('/Page2')
                      this.breadcrumbItems  = ['Vue.js']
                      break;
                  case '3':
                      this.$router.push('/Page3')
                      this.breadcrumbItems  = ['树莓基础']
                      break;
              }
          },
        */
      },
  }
</script>