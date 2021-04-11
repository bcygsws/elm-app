<template>
  <div class="login">
    <!-- logo标识 -->
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
      <!-- 手机号 -->
      <input-group
        type="number"
        v-model="phone"
        placeholder="手机号"
        :btnTittle="btnTittle"
        :disabled="disabled"
        :error="errors.phone"
      ></input-group>
      <!-- 验证码 -->
      <input-group
        type="number"
        v-model="verifyCode"
        placeholder="验证码"
        :error="errors.code"
      ></input-group>
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
      btnTittle: '获取验证码',
      disabled: false,
    };
  },
  components: {
    'input-group': InputGroup,
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
        background-color: ##8bda81;
      }
    }
  }
}
</style>
