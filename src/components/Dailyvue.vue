<template>
  <div style="background-color:transparent" class="hello">
    <h2>2022/5/12</h2>
    <div class="tip">
      <p>在使用npm run build打包vue项目后，发现element ui的图标包丢失了！真的很惊讶，后查阅csdn找到解决办法：找到utils.js文件，加上publicPath: '../../'</p>
      <pre id="code" class="code">
      <input class="copy-text" type="button" data-clipboard-target="#code" @click="copy();" value="Copy"></input>
        if (options.extract) { <br>
          return ExtractTextPlugin.extract({<br>
            use: loaders,<br>
            fallback: 'vue-style-loader',<br>
            publicPath: '../../'<br>
          })<br>
        }<br>
      </pre>
    </div>
    <div class="tip">
      <p>Vue实现一键复制功能：https://blog.csdn.net/womeiqianlene/article/details/104919107</p>
    </div>
  
    <!-- <pdf v-for="i in numPages" :src="src" :key="i" :page="i"  ref="pdf" class="pdf" ></pdf> -->
    <footer style="position:relative;display:flex;right:100px;float:right">
      <p class="p1">最近编辑：2022/5/12</p>
    </footer>
  </div>

</template>
<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.10/dist/clipboard.min.js"></script>
<script>
  import pdf from 'vue-pdf'

  export default {
    components: {
      pdf
    },
    name: 'HelloWorld',
    data() {

      return {
        src: '../../static/Vue-spa.pdf',
        numPages: undefined,
        item: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      copy() {
        var that = this;
        console.log("clk");
        var clipboard = new this.clipboard('.copy-text');
            clipboard.on('success', function(e) {
                e.clearSelection(); //选中时不显示选中的背景色
                that.$message({
                  message: '复制成功',
                  type: 'success'
                });
            });
            clipboard.on('error', function() {
              that.$message({
                message: '复制失败',
                type: 'warn'
              });
            });
    }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pdfViewer .page {
    background-color: white;
  }

  :root {
    --body-bg-color: rgb(255, 255, 255);
  }
 

</style>