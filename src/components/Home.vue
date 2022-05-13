<template>
  <div class="hello">
    <div id="showA">
      <div>
        <div style="color:aliceblue; padding:5px; margin:2px; background-color: #FFFFFF">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.id">{{item}}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-divider></el-divider>
      <el-row :gutter="20" class="things">
        <a href="https://v3.cn.vuejs.org/"><img class="lopic" src="../assets/Teches/vue.png" alt="vue">
        </a><a href="https://element.eleme.cn/#/zh-CN"><img class="lopic" src="../assets/Teches/ele.png" alt="vue">
        </a><a href="https://developer.mozilla.org/zh-CN/docs/learn/JavaScript"><img class="lopic"
            src="../assets/Teches/js.png" alt="vue">
        </a><a href="https://www.w3cschool.cn/css3/"><img class="lopic" src="../assets/Teches/css.png" alt="vue">
        </a><a href="https://zq99299.github.io/java-tutorial/"><img class="lopic" src="../assets/Teches/java.png"
            alt="vue">
        </a><a href="https://www.w3school.com.cn/python/python_reference.asp"><img class="lopic"
            src="../assets/Teches/python.png" alt="vue"></a>
      </el-row>



      <div class="tip">
        <p>{{welcome}}</p>
      </div>
      <div class="tip">
        <p>这是一只来自codepen的狮子，使用Three.js编程实现。按住鼠标左键即可打开电风扇，让狮子凉爽一下！其采用iframe插入到了html网页中。作者： <el-link type="primary">
            https://codepen.io/Yakudoo/pen/YXxmYR</el-link>
        </p>
      </div>
      <iframe allowTransparency="true" height="800px" width="1000px" scrolling="no" src="../../static/lion.html" frameborder="0"></iframe>
      <div class="tip">
        <p>本站文档规范：PDF格式，背景颜色为#FFFFFF。字体为黑色，使用Misans字体。
        </p>
      </div>
      <!-- <embed src="../static/1.pdf" type="application/pdf" width="1300px" height="100%" /> -->
      <!-- <pdf ref="pdf" class="pdf" src="../static/1.pdf">
      </pdf> -->
      <!-- <iframe src="../static/1.pdf" marginwidth="0" frameBorder="0" allowtransparency="true" bordercolor="white" style="width:1170px;height:2500px" frameborder="0"></iframe> -->
      <footer style="position:relative;display:flex;right:100px;float:right">
        <p class="p1">最近编辑：2022/5/11</p>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        welcome: '你好！欢迎来到 OrangeStudio ，本网站用于个人学习使用，将会在本网页持续更新前端学习和课程内容。热爱前端设计和开发的数媒程序猿一只。本网站使用Vue.js和及其官方UI框架（饿了么团队开发的element UI）进行开发，虽然本站貌似实现了数据与页面的分离，但是并没有实际作用，这还是一个静态网站（后端知识为0！！）。本网站中的大部分文档采用嵌入pdf实现，既减少了Markdown语法使用成本，也更加灵活，降低开发难度。未来本站将陆续实现文档上传、富文本编写等功能，但那不知道是猴年马月了。 By Chengzihan V0.1 2022/5/11',
        aboutlion: '这是一只来自codepen的狮子，使用Three.js编程实现。按住鼠标左键即可打开电风扇，让狮子凉爽一下！其采用iframe插入到了html网页中。作者： <el-link type="primary">https://codepen.io/Yakudoo/pen/YXxmYR</el-link>',
        searchCriteria: '',
        breadcrumbItems: ['首页']
      }
    }
  }
</script>

<style scoped>
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

  .lopic {
    height: 235px;
    transition: height 1s;
    cursor: pointer;
    box-shadow: 0px 0px 10px #b1dbff00;
  }

  .lopic:hover {
    height: 240px;
  }

  .el-divider {
    background-color: #4593e13f;
  }


</style>