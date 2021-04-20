<template>
  <header class="header">
    <div class="header-button is-left" v-show="isLeft">
      <i class="fa fa-chevron-left"></i>
      <button @click="$router.go(-1)">返回</button>
    </div>
    <!-- 标题 -->
    <h1 class="header-title">{{ title }}</h1>
    <!-- 右侧图标 -->
    <div class="header-button is-right" v-show="btn_icon">
      <button @click="$emit('rightClick')">
        <i :class="'fa fa-' + btn_icon"></i>
      </button>
    </div>
  </header>
</template>
<script>
export default {
  name: 'header',
  props: {
    // 页面顶部header标题
    title: String,
    // 返回按钮是否存在
    isLeft: {
      type: Boolean,
      default: false
    },
    btn_icon: String
  }
};
</script>
<style lang="less" scoped>
.header {
  height: 45px;
  line-height: 1;
  background: #009eef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
  font-size: 16px;
  position: relative;
  white-space: nowrap;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  .header-button {
    button {
      background-color: transparent;
      border: 0;
      padding: 0;
      box-shadow: none;
      color: inherit;
      font-size: inherit;
      outline: none;
    }
  }
  .header-title {
    flex: 1;
  }
  .is-left {
    text-align: left;
  }
  .is-right {
    text-align: right;
  }
}
</style>
