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
    <Alphabet :cityInfo="cityInfo" :keys="keys"></Alphabet>
  </div>
</template>
<script>
import Location from '../components/Location.vue';
import Alphabet from '../components/Alphabet.vue';
export default {
  name: 'city',
  data() {
    return {
      city_val: '',
      cityInfo: null,
      // 检索的字母
      keys: []
    };
  },
  components: { Location, Alphabet },
  // 当数据初始化完成时，就开始调用获取城市信息的钩子
  created() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      // 参考：https://blog.csdn.net/qq_41387882/article/details/99707813
      // 使用新接口：https://shadow.elemecdn.com/lib/city-list@0.0.3/city_list.json
      // 原接口
      this.$http
        // .get('api/posts/cities')
        .get('https://shadow.elemecdn.com/lib/city-list@0.0.3/city_list.json')
        .then(res => {
          console.log(res);
          this.cityInfo = res.data;
          /* 原API接口处理方式 */
          // 处理keys
          // this.keys = Object.keys(res.data);
          // this.keys.pop(); // 热门城市那个键移除
          // // 排序
          // this.keys.sort();
          this.keys = res.data.alphabet;
          console.log(this.keys);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
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
