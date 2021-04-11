<template>
  <div class="text_group">
    <!-- 组件结构 -->
    <div class="input_group" :class="{ 'is-valid': error }">
      <input
        :type="type"
        :value="value"
        :name="name"
        :placeholder="placeholder"
        @input="dfdas"
      />
      <!-- 输入框后面的按钮，传则有，没传就没有,disabled控制，文本输入框中点击过的按钮，不能再次点击了 -->
      <button v-if="btnTittle" :disabled="disabled" @click="fasfda">
        {{ btnTittle }}
      </button>
    </div>
    <!-- 有的时候，验证码有错误，输入框底部 红色字体提示“验证码错误” error有值表示验证码错误 -->
    <div v-if="true" class="invalid-feedback">{{ error }}</div>
  </div>
</template>
<script>
export default {
  name: 'text_group',
  // 这个子组件是要引入到Login.vue中复用的，那么就需要使用到父子组件通信
  props: {
    // 文本输入框的类型
    type: {
      type: String,
      default: 'text',
    },
    // 文本输入框的值
    value: String,
    // 占位符的类型
    placeholder: String,
    // 文本框识别名name
    name: String,
    // 是否有“获取验证码”这样的按钮，有值则有，无值则表示文本框中没有按钮
    btnTittle: String,
    // 是否可用
    disabled: Boolean,
    // 错误处理
    error: String,
  },
};
</script>
<style lang="less" scoped>
.text_group {
  .input_group {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    input {
      width: 60%;
      height: 100%;
      outline: none;
    }
    button {
      outline: none;
      border: none;
      background-color: #fff;
    }
    button[disabled] {
      color: #aaa;
    }
  }
  .invalid-feedback {
    color: red;
    padding-top: 5px;
  }
}
.is-valid {
  border: 1px solid #aaa;
}
</style>
