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
        <p>😢项目无奈地停滞了，这段时间DDL太多了。</p>
      </div>

      <div class="tip">
        <p>{{welcome}}</p>
      </div>
      <div class="tip">
        <p>这是一只来自codepen的狮子，使用Three.js编程实现。按住鼠标左键即可打开电风扇，让狮子凉爽一下！其采用iframe插入到了html网页中。作者： <el-link type="primary">
            https://codepen.io/Yakudoo/pen/YXxmYR</el-link>
        </p>
      </div>
      <div class="dv">

        <iframe allowTransparency="true" height="800px" width="1000px" scrolling="no" src="../../static/lion.html"
          frameborder="0"></iframe>
      </div>
      <div class="tip">
        <p>本站文档规范：PDF格式，背景颜色为#FFFFFF。字体为黑色，使用Misans字体。
        </p>
      </div>
      

      
      <!-- <embed src="../static/1.pdf" type="application/pdf" width="1300px" height="100%" /> -->
      <!-- <pdf ref="pdf" class="pdf" src="../static/1.pdf">
      </pdf> -->
      <!-- <iframe src="../static/1.pdf" marginwidth="0" frameBorder="0" allowtransparency="true" bordercolor="white" style="width:1170px;height:2500px" frameborder="0"></iframe> -->
      <div class="tip">
        <h2>更新日志</h2>
        <el-timeline style="font-size: 16px;">
          <el-timeline-item color="#9b92f833">2022/5/14 支持显示html代码块</el-timeline-item>
          <el-timeline-item color="#9b92f833">2022/5/13 托管到腾讯云</el-timeline-item>
          <el-timeline-item style="color:rgb(106, 116, 116);" color="#9b92f833">2022/5/12 建站</el-timeline-item>
        </el-timeline>
      </div>
      <!-- <a href="https://console.cloud.tencent.com/tcb/hosting/index?envId=nannan-8gceb5nt124c014d&rid=4&moduleName=&tabId=file"><img class="txy" src="../assets/tx.png" alt="腾讯云服务" /></a> -->
      <!-- <footer style="
              position: absolute;
              bottom: 5px;
              left: 480px;
              display: flex;
              font-size: 10px;
            ">
        <p class="p2"> <span style="color:black;font-style: bold;font-size:16px">Powered by Vue & Element.</span> <br>
          ©CZH 2022.Copyright</p>
      </footer> -->
      <footer style="position:relative;display:flex;right:100px;float:right">
        <p class="p1">最近编辑：2022/5/14</p>
      </footer>
    </div>
  </div>
</template>
<script>
  

</script>
<script>
  export default {
    name: 'Home',
    
    data() {
      return {
        day:100,
        msg: 'Welcome to Your Vue.js App',
        welcome: '👋你好！欢迎来到 OrangeUniverse 。来自热爱前端设计和开发的数媒程序猿一只(</>)。本网站使用Vue.js脚手架和及其官方UI框架（饿了么团队开发的element UI）进行开发，虽然本站貌似实现了数据与页面的分离，但是并没有实际作用，这还是一个静态网站（后端知识为0！！）。本网站中的部分文档采用嵌入pdf实现，既减少开发维护成本，也更加灵活。不过我很嫌弃那个iframe嵌入框样式，目前不开放修改其样式！但没办法，Mozilla的pdf.js框架只能弹窗使用，vue-pdf不能复制。未来本站将陆续实现文档上传、富文本编写等功能，但那不知道是猴年马月了。',
        aboutlinon: '这是一只来自codepen的狮子，使用Three.js编程实现。按住鼠标左键即可打开电风扇，让狮子凉爽一下！其采用iframe插入到了html网页中。作者： <el-link type="primary">https://codepen.io/Yakudoo/pen/YXxmYR</el-link>',
        searchCriteria: '',
        breadcrumbItems: ['首页']
      }
    },
    methods:{
      count(){
        //添加上面的倒计时脚本
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth()+1;
      var day = time.getDate();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var second = time.getSeconds();
      var now = new Date(year,month,day,hour,minute,second);
      var endTime = new Date(2022,5,14,0,0,0);
      var leftTime = endTime.getTime() - now.getTime();
      var leftsecond = parseInt(leftTime/1000);
      var day1=Math.floor(leftsecond/(60*60*24));
      var hour1=Math.floor((leftsecond-day1*24*60*60)/3600);
      var minute1=Math.floor((leftsecond-day1*24*60*60-hour1*3600)/60);
      var second1=Math.floor(leftsecond-day1*24*60*60-hour1*3600-minute1*60);
      var timer = setInterval(function(){
        if(day1<10){
          day1 = "0"+day1;
        }
        if(hour1<10){
          hour1 = "0"+hour1;
        }
        if(minute1<10){
          minute1 = "0"+minute1;
        }
        if(second1<10){
          second1 = "0"+second1;
        }
        if(second1==0){
          if(minute1==0){
            if(hour1==0){
              if(day1==0){
                clearInterval(timer);
                //在控制台打印下面的参数
                console.log(day1+"天"+hour1+"小时"+minute1+"分钟"+second1+"秒");
                document.getElementById("time").innerText="距离2022年5月14日还有："+day1+"天"+hour1+"小时"+minute1+"分"+second1+"秒";
              }else{
                day1=day1-1;
                hour1=23;
                minute1=59;
                second1=59;
              }
            }else{
              hour1=hour1-1;
              minute1=59;
              second1=59;
            }
          }else{
            minute1=minute1-1;
            second1=59;
          }
        }else{
          second1=second1-1;
        }
        document.getElementById("time").innerText="距离2022年5月14日还有："+day1+"天"+hour1+"小时"+minute1+"分"+second1+"秒";
      },1000);
      }
      
    },
    mouted(){
     
    }
  }
  //让class为tip的元素背景颜色随时间变化
</script>
<style>
  .el-timeline-item__tail {
    border-left: 2px solid #eceaffb3;
  }
</style>
<style scoped>
  .el-menu-item.is-active {
    background-color: #ffffff58;
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
    /*color: #5ddfff; */
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

  .dv {
    height: 400px;
    width: 1000px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
</style>