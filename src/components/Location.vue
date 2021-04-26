<template>
  <div class="location">
    <!-- 引发上外边距塌陷的问题，使用触发BFC来解决 -->
    <div class="title">当前定位</div>
    <div class="desc" @click="$emit('click')">
      <i class="fa fa-location-arrow"></i>
      <span>{{ address}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'location',
  props: { address: String }
};
</script>
<style lang="less" scoped>
.location {
  /* 解决第一个子盒子上边距塌陷问题：通过触发BFC。
  参考：https://blog.csdn.net/qq_32381815/article/details/78987828 */
  .title {
    font-size: 12px;
    margin: 10px 0;
  }
  .desc {
    i {
      color: #009eef;
    }
    span {
      display: inline-block;
      width: 90%;
      color: #333;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 5px;
    }
  }
}
</style>
