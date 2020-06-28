<template>
  <el-container>
    <el-header>
      <my-header />
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12" :offset="6">
          <div class="miantext">
            <h1>免费在线作图、实时协作</h1>
            <h3>支持流程图、思维导图、原型图、UML、网络拓扑图、组织结构图等</h3>
          </div>
          <div class="lunbo-box">
            <el-carousel height="400px">
              <el-carousel-item v-for="(item,index) in banner_img" :key="index">
                <img :src="item.src" height="400px" alt="轮播图" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- <div class="lunbo-box">
            <el-carousel indicator-position="none">
              <el-carousel-item class="lunbo-box-item" v-for="(item,index) in banner_img" :key="index">
               
              </el-carousel-item>
            </el-carousel>
          </div>-->
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <my-footer />
    </el-footer>
  </el-container>
</template>
<script>
import myFooter from "~/components/public/footer/index.vue";
import myHeader from "~/components/public/header/index.vue";
export default {
  data: function() {
    return {
      banner_img: [
        { src: require("../assets/img/pc1.jpg") },
        { src: require("../assets/img/pc2.jpg") },
        { src: require("../assets/img/banner1.png") },
        { src: require("../assets/img/banner2.jpeg") }
      ]
    };
  },
  components: {
    myFooter,
    myHeader
  }
};
</script>

<style lang="scss" scoped>
</style>