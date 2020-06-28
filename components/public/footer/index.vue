<template>
  <div class="footer">
    <el-row justify="center" class="footer-title">
      <el-col :span="24">FlowOn，免费在线作图，思维导图，流程图，实时协作</el-col>
    </el-row>
    <el-row class="footer-nav">
      <el-col :span="24">
        <nuxt-link to="/">首页</nuxt-link>&nbsp;|&nbsp;&nbsp;
        <nuxt-link to="/recommend">推荐</nuxt-link>&nbsp;|&nbsp;&nbsp;
        <nuxt-link to="/joinUs">加入我们</nuxt-link>&nbsp;|&nbsp;
        <nuxt-link to="/aboutUs">关于我们</nuxt-link>&nbsp;|&nbsp;
        <nuxt-link to="/serviceterm">服务条款</nuxt-link>&nbsp;|&nbsp;
        <nuxt-link to="/help">帮助中心</nuxt-link>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="relation">
      <el-col :span="16">
        <div>
          <el-row :gutter="10">
            <el-col :span="6">QQ &nbsp; &nbsp; &nbsp; &nbsp;群 &nbsp; &nbsp;:</el-col>
            <el-col :span="18">290676520</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">邮 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;箱 &nbsp; &nbsp;:</el-col>
            <el-col :span="18">290676520@qq.com</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">电 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;话 &nbsp; &nbsp;:</el-col>
            <el-col :span="18">158711111111</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">官&nbsp; 网&nbsp;地&nbsp;址&nbsp;&nbsp;&nbsp;:</el-col>
            <el-col :span="18">www.flowno.com</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">工&nbsp; 作&nbsp;时&nbsp;间&nbsp;&nbsp;&nbsp;:</el-col>
            <el-col :span="18">www.flowno.com</el-col>
          </el-row>
          <el-row>
            <el-col :span="24">湖北省武汉市洪山区&nbsp; ©2020 &nbsp;</el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-row>
            <el-col :span="24"  class="wxicon">
              <img
                class="weixinrelation"
                src="../../../assets/img/weixinrelation.jpg"
                alt
                sizes="60px"
                srcset
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="contetionrelation">关注微信公众号</el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer-title {
  font-size: 20px;
  margin-bottom: 20px;
  color: #555;
  text-align: center;
}
.footer {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}
.footer-nav {
  font-size: 13px;
  color: #666;
  margin-bottom: 14px;
  text-align: center;
}
.footer-nav a {
  font-size: inherit;
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
.relation {
  width: 100%;
  text-align: left;
  font-size: 13px;
  color: #444;
  line-height: 30px;
}
.wxicon{
    text-align: center;
}
.weixinrelation {
  width: 100px;
  text-align: center;
  display: inline-block;
  margin-bottom: 7px;
}
.contetionrelation {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}
</style>