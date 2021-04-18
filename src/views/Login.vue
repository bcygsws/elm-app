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
      <!-- 我们希望的是手机号和验证码都输入后，登录按钮，才可以点击。使用computed进行监听 -->
      <button :disabled="isClick" @click="handleLogin">登录</button>
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
      disabled: false
    };
  },
  components: {
    InputGroup
  },
  computed: {
    isClick() {
      // 任何一个值为空，不能点击
      if (!this.phone || !this.verifyCode) return true;
      else return false;
    }
  },
  methods: {
    getVerifyCode() {
      if (this.validatePhone()) {
        this.reverseTime();
        // 发送网络请求
        // this.$http
        //   .post('api/posts/sms_send', {
        //     tpl_id: '140481',
        //     key: '795be723dd9e88c3ea98e2b6713ab795',
        //     // 手机号
        //     phone: this.phone
        //   })
        //   .then(res => {
        //     console.log(res);
        //   });
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
          phone: '请填写正确的手机号'
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
    // 定义一个方法，模拟点击“获取验证码”的倒计时效果
    reverseTime() {
      let time = 45;
      const timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer);
          this.btnTitle = '获取验证码';
          this.disabled = false;
        } else {
          this.btnTitle = time + '秒后重试';
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    handleLogin() {
      // 点击按钮登录
      // 1.取消错误提醒
      this.errors = {};
      // 发送请求，去检查验证码是否错误
      // this.$http
      //   .post('api/posts/sms_back', {
      //     phone: this.phone,
      //     code: this.verifyCode
      //   })
      //   .then(res => {
      //     console.log(res);
      //     // 检验成功，设置登录状态，并且跳转到/
      //     localStorage.setItem('ele_login', true);
      //     // 2.进入主页面
      //     this.$router.push('/');
      //   })
      //   .catch(err => {
      //     // 没有检验成功，返回验证码错误提示
      //     this.errors = { code: err.response.data.msg };
      //   });
      // 开发状态下，跳过验证
      // 登录状态值
      localStorage.setItem('ele_login', true);
      // 跳转至 '/'
      this.$router.push('/');
    }
  }
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
