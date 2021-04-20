<template>
  <div class="location">
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
