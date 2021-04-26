<template>
  <!-- 声明滚动区域，refs表示dom对象 -->
  <div class="alphabet wraper" v-if="cityInfo" ref="alpha">
    <div class="scroll_wrap">
      <!-- 热门城市模块 -->
      <div class="hot_wrap cityList">
        <!-- 热门城市 标题 -->
        <p class="title">热门城市</p>
        <!-- 热门城市列表 -->
        <ul class="hot_city">
          <!-- 热门城市-单击后，跳转至对应城市 -->
          <li
            v-for="(item, index) in hotCity"
            :key="index"
            @click="$emit('selectCity', item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 所有城市 -->
      <div class="city_wrap">
        <div class="city_content">
          <!-- 按照顺序排列的循环字母 -->
          <!-- <div class="city_alphabet" v-for="(item, index) in keys"> -->
          <div
            class="city_alphabet cityList"
            v-for="(item, index) in cityInfo.cityList"
            :key="index"
          >
            {{ item.idx }}
            <!-- 在每个字母下，渲染所有城市 -->
            <ul class="cities">
              <!-- 所有城市，点击后跳转至对应城市 -->
              <li
                v-for="item1 in item.cities"
                :key="item1.id"
                @click="$emit('selectCity', item1)"
              >
                {{ item1.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="area_keys">
      <ul>
        <!-- # 点击跳转至热门城市选区 -->
        <li @click="selectedKeys(0)">#</li>
        <!-- 字母 A B C D 索引依次为1,2,3,4 -->
        <li
          v-for="(item, index) in keys"
          :key="index"
          @click="selectedKeys(index + 1)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// 引入better-scroll组件
import BScroll from 'better-scroll';
export default {
  name: 'Alphabet',
  data() {
    return {
      // 由于处理的接口中，没有热门城市，编织一组模拟数据
      hotCity: [
        { id: 1, name: '北京' },
        { id: 2, name: '上海' },
        { id: 3, name: '广州' },
        { id: 4, name: '重庆' },
        { id: 5, name: '杭州' },
        { id: 6, name: '郑州' },
        { id: 7, name: '南京' },
        { id: 8, name: '武汉' },
        { id: 9, name: '苏州' },
        { id: 10, name: '天津' },
        { id: 11, name: '厦门' },
        { id: 12, name: '青岛' }
      ],
      // 初始化better-scroll时接收实例化对象
      scroll: null
    };
  },
  // 接收的数据
  props: {
    cityInfo: Object,
    keys: Array
  },
  methods: {
    /* 这个方法，在所有数据加载完成后触发。而触发发生在其父组件city中，需要在
    city组件中调用initScroll()方法 */
    initScroll() {
      this.scroll = new BScroll('.wraper', {
        // 设置滚动属性
        // 可点击
        click: true,
        // 开启纵向滚动
        scrollY: true
      });
    },
    selectedKeys(index) {
      // 23个元素 ： 热门城市区+22个字母区
      // console.log(this.$refs.alpha.getElementsByClassName('cityList'));
      // 点击标识符:即 # 和 字母，跳转到对应区域
      /* scrollToElement(el, time, offsetX, offsetY, easing)  */
      const cityList = this.$refs.alpha.getElementsByClassName('cityList');
      const el = cityList[index];
      this.scroll.scrollToElement(el, 250);
    }
  }
};
</script>
<style lang="less" scoped>
.alphabet {
  margin-top: 10px;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #fff;
  /* 下面两个css样式必须设置 */
  height: calc(~'100% - 65px');
  overflow: hidden;
  .scroll_wrap {
    overflow: auto;
    .hot_wrap {
      .title {
        color: #aaa;
        padding: 15px 0;
      }
      .hot_city {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li {
          width: 30%;
          background-color: #f1f1f1;
          margin: 0 10px 10px 0;
          text-align: center;
          padding: 10px;
          box-sizing: border-box;
        }
      }
    }
    .city_wrap {
      .city_alphabet {
        .cities {
          li {
            padding: 10px;
            border-bottom: 1px solid #eee;
          }
        }
      }
    }
  }
  .area_keys {
    position: fixed;
    right: 0;
    top: 25%;
    color: #aaa;
    font-size: 12px;
    line-height: 1.6;
    text-align: center;
    padding: 0 5px;
  }
}
</style>
