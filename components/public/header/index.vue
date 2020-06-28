<template>
  <div class="header">
    <el-row class="headerFlowOn">
      <el-col :span="6" class="headerFlow">
        Flow
        <span class="headerOn">On</span>
      </el-col>
      <el-col :span="18" class="headerOther">
        <el-row>
          <el-col :span="1" :offset="15">
            <nuxt-link to="/recommend">推荐</nuxt-link>
            <!-- <div class="grid-content bg-purple">推荐</div> -->
          </el-col>
          <el-col :span="1">
            <nuxt-link to="/template">模版</nuxt-link>
            <!-- <div class="grid-content bg-purple">模版</div> -->
          </el-col>
          <el-col :span="1">
            <nuxt-link to="/price">价格</nuxt-link>
            <!-- <div class="grid-content bg-purple">价格</div> -->
          </el-col>
          <el-col :span="1">
            <nuxt-link to="/course">教程</nuxt-link>
            <!-- <div class="grid-content bg-purple">教程</div> -->
          </el-col>
          <el-col :span="1">
            <nuxt-link to="/login">登录</nuxt-link>
            <!-- <div class="grid-content bg-purple">登录</div> -->
          </el-col>
          <el-col :span="1">
            <nuxt-link to="/register">
              <el-button type="primary" class="registerbtn">注册</el-button>
            </nuxt-link>
            <!-- <div class="grid-content bg-purple">注册</div> -->
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.header {
  height: 50px;
  width: 100%;
}
.headerFlowOn {
  font-size: 26px;
}
.headerOn {
  background: #5cabda;
  color: white;
}
.headerOther {
  font-size: 15px;
  text-align: center;
  line-height: 50px;
}
.headerOther a {
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
</style>