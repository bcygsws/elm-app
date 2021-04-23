<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="请输入城市" v-model="city_val" />
      </div>
      <button @click="$router.push({ name: 'addr', params: { city: city } })">
        取消
      </button>
    </div>
    <div class="switch_loc">
      <Location :address="city"></Location>
    </div>
  </div>
</template>
<script>
import Location from '../components/Location.vue';
export default {
  name: 'city',
  data() {
    return {
      city_val: ''
    };
  },
  components: { Location },
  computed: {
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  }
};
</script>
<style lang="less" scoped>
.city {
  width: 100%;
  height: 100%;
  padding-top: 45px;
  overflow: auto;
  box-sizing: border-box;
  .search_wrap {
    width: 100%;
    height: 45px;
    padding: 3px 16px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    box-sizing: border-box;
    background-color: #fff;
    .search {
      width: 80%;
      height: 100%;
      line-height: 40px;
      background: #eee;
      border-radius: 10px;
      padding: 0 16px;
      box-sizing: border-box;
      input {
        outline: none;
        border: none;
        margin-left: 5px;
      }
    }
    button {
      color: #009eef;
    }
  }
  .switch_loc {
  }
}
</style>
