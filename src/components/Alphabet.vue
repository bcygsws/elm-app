<template>
  <div class="alphabet" v-if="cityInfo">
    <div class="scroll_wrap">
      <!-- 热门城市模块 -->
      <div class="hot_wrap">
        <!-- 热门城市 标题 -->
        <p class="title">热门城市</p>
        <!-- 热门城市列表 -->
        <ul class="hot_city">
          <li v-for="(item, index) in hotCity" :key="index">{{ item }}</li>
        </ul>
      </div>
      <!-- 所有城市 -->
      <div class="city_wrap">
        <div class="city_content">
          <!-- 按照顺序排列的循环字母 -->
          <!-- <div class="city_alphabet" v-for="(item, index) in keys"> -->
          <div
            class="city_alphabet"
            v-for="(item, index) in cityInfo.cityList"
            :key="index"
          >
            {{ item.idx }}
            <!-- 在每个字母下，渲染所有城市 -->
            <ul class="cities">
              <li v-for="item1 in item.cities" :key="item1.id">
                {{ item1.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Alphabet',
  data() {
    return {
      // 由于处理的接口中，没有热门城市，编织一组模拟数据
      hotCity: [
        '北京',
        '上海',
        '广州',
        '重庆',
        '杭州',
        '郑州',
        '南京',
        '武汉',
        '苏州',
        '天津',
        '厦门',
        '青岛'
      ]
    };
  },
  // 接收的数据
  props: {
    cityInfo: Object,
    keys: Array
  }
};
</script>
<style lang="less" scoped>
.alphabet {
  margin-top: 10px;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #fff;
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
}
</style>
