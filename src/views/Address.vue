<template>
  <div class="address">
    <Header :isLeft="true" title="请选择收货地址"></Header>
    <!-- 搜索城市 -->
    <div class="city_search">
      <div class="search">
        <span class="city" @click="$router.push('/city')"
          >{{ city }}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input
          type="text"
          placeholder="小区/写字楼/学校等"
          v-model="search_val"
        />
      </div>
      <Location :address="address" @click="selectedAddress"></Location>
    </div>
    <ul class="area">
      <li v-for="item in areaList" :key="item.id">
        <p class="name">{{ item.name }}</p>
        <p>{{ item.district }}{{ item.address }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Location from '../components/Location.vue';
export default {
  name: 'address',
  data() {
    return {
      search_val: '',
      // 城市名称
      city: '',
      // 输入关键字后，跟随弹出相关“位置信息”列表
      areaList: []
    };
  },
  components: { Header, Location },
  computed: {
    address() {
      return this.$store.getters.location.formattedAddress;
    }
  },
  watch: {
    // 输入任何内容，显示相关位置的列表
    search_val() {
      this.searchPlace();
    }
  },
  methods: {
    // 输入城市名，定位到该城市
    searchPlace() {
      const self = this;
      AMap.plugin('AMap.Autocomplete', function() {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: self.city
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(self.search_val, function(status, result) {
          // 搜索成功时，result即是对应的匹配数据
          console.log(result);
          // 将输入得到的相关位置列表存放于数组
          self.areaList = result.tips;
        });
      });
    },
    // 设置地址
    selectedAddress(item) {
      if (item) {
        this.$store.dispatch(
          'setAddress',
          item.district + item.address + item.name
        );
      } else {
        this.$store.dispatch('setAddress', this.address);
      }
      // 都要跳转到/home
      this.$router.push('/home');
    }
  },
  // 组件独守卫
  beforeRouteEnter(to, from, next) {
    // Home.vue中传入的参数city
    // $router.push({ name: 'address', params: { city: city } })
    console.log(to.params.city);
    // 因为钩子执行时，路由实例还没有创建。vm可以当作this来使用
    next(vm => {
      vm.city = to.params.city;
    });
  }
};
</script>
<style lang="less" scoped>
.address {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
  .city_search {
    background: #fff;
    padding: 10px 20px;
    color: #333;
    .search {
      background-color: #eee;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      border-radius: 10px;
      .city {
        padding: 0 10px;
        i {
          margin-right: 10px !;
        }
      }
      .input {
        background-color: #eee;
        margin-left: 5px;
        border: 0;
        outline: none;
      }
    }
  }
  .area {
    background-color: #fff;
    margin-top: 16px;
    li {
      list-style: none;
      border-bottom: 1px solid #eee;
      padding: 8px 16px;
      color: #aaa;
      p.name {
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
