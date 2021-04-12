<template>
  <div class="login">
    <!-- logo标识 -->
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
    </div>
    <!-- 手机号 -->
    <InputGroup
      type="number"
      v-model="phone"
      placeholder="手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    />
    <!-- 验证码 -->
    <InputGroup
      type="number"
      v-model="verifyCode"
      placeholder="验证码"
      :error="errors.code"
    />
    <div class="login_desc">
      <!-- 用户服务协议 -->
      <p>
        新用户登录即自动注册，表示同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <button>登录</button>
    </div>
  </div>
</template>
<script>
import InputGroup from '../components/InputGroup.vue';
export default {
  name: 'login',
  data() {
    return {
      phone: '',
      verifyCode: '',
      errors: {},
      btnTitle: '获取验证码',
      disabled: false,
    };
  },
  components: {
    InputGroup,
  },
  methods: {
    created() {
      console.log(this.phone);
    },
    getVerifyCode() {
      if (this.validatePhone()) {
        // 发送网络请求
      }
      // 手机号合法,发送网络请求
      // if (this.validatePhone) {
      // } else {
      //   // 手机号不合法，清空手机号，提示“红色字样”
      //   this.phone === '';
      //   this.errors.phone = '手机号不合法';
      // }
    },
    // 验证输入的手机号是否合法，返回值是布尔型
    validatePhone() {
      // 手机号是否填写
      let reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if (!this.phone) {
        this.errors = { phone: '手机号不能为空' };
        return false;
      } else if (!reg.test(this.phone)) {
        this.errors = {
          phone: '请填写正确的手机号',
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  .logo {
    text-align: center;
    img {
      width: 150px;
    }
  }
  .text_group,
  .login_desc,
  .login_btn {
    margin-top: 20px;
  }
  .login_desc {
    color: #aaa;
    line-height: 22px;
    span {
      color: #4d90fe;
    }
  }
  .login_btn {
    button {
      width: 100%;
      height: 40px;
      background-color: #48ca38;
      border-radius: 4px;
      color: #fff;
      font-size: 14px;
      border: none;
      outline: none;
    }
    button[disabled] {
      background-color: #8bda81;
    }
  }
}
</style>
