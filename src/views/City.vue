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
    <div style="height:100%;">
      <div class="switch_loc">
        <Location :address="city"></Location>
      </div>
      <Alphabet
        :cityInfo="cityInfo"
        :keys="keys"
        ref="allCity"
        @selectCity="selectCity"
      ></Alphabet>
    </div>
  </div>
</template>
<script>
import Location from '../components/Location.vue';
import Alphabet from '../components/Alphabet.vue';
export default {
  name: 'city',
  data() {
    return {
      // 列表中输入的完整或部分城市名称
      city_val: '',
      cityInfo: null,
      // 检索的字母
      keys: [],
      // 定义所有城市存放的数组
      allCities: [],
      // 关键字检索城市列表
      searchList: []
    };
  },
  components: { Location, Alphabet },
  // 当数据初始化完成时，就开始调用获取城市信息的钩子
  created() {
    // 刷新页面后，city会报错误：undefined city
    this.getCityInfo();
  },
  watch: {
    city_val() {
      // city_Val值一改变city_val方法就触发，函数searchCity被调用
      this.searchCity();
    }
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
          // 此处“所有城市”数据已经拿到，为了保证DOM渲染完成后，才能进行滚动操作，用到$nextTick
          this.$nextTick(() => {
            this.$refs.allCity.initScroll();
          });
          this.cityInfo.cityList.forEach(item => {
            item['cities'].forEach(city => {
              this.allCities.push(city);
            });
          });
          console.log(this.allCities);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 点击某个城市，跳转至对应城市所在位置
    selectCity(prop) {
      console.log(prop);
      this.$router.push({ name: 'addr', params: { city: prop.name } });
    },
    // 在文本输入框中输入部分或完整城市名称
    searchCity() {
      if (!this.city_val) {
        // 文本框中没有输入任何城市名相关内容
        this.searchList = [];
      } else {
        //输入了城市名相关的关键字
        // 过滤器函数返回满足条件的子数组
        this.searchList = this.allCities.filter(item => {
          return item.name.indexOf(this.city_val) !== -1;
        });
        console.log(this.searchList);
      }
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
    height: 65px;
    padding: 8px 16px;
    box-sizing: border-box;
    background-color: #fff;
  }
}
</style>
