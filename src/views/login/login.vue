<template>
  <div>
    <div class="logo"></div>
    <div class="am-list">
      <div class="am-list-item">
        <input type="text" class="lg-reqguired" name="name"  placeholder="手机号/邮箱/会员名">
      </div>
      <div class="am-list-item">
        <input type="password" class="lg-reqguired lg-password" name='pwd' placeholder="请输入密码">
      </div>
    </div>
    <div>
      <div class="am-field am-footer">
        <router-link to="/msg_login">短信验证码登录</router-link>
        <router-link to="/reg">免费注册</router-link>
        <!-- <a href="/msg_login">短信验证码登录</a>
        <a href="">免费注册</a>-->
      </div>
    </div>
    <div class="am-field am-fieldBottom">
      <button class="am-button am-button-submit" @click="handleLogin">登 录</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    handleLogin () {
      // axios.post('http://localhost:3000/users', { user: name })
      //   .then(data => {
      //     // eslint-disable-next-line eqeqeq
      //     console.log(data)
      //     if (data.status !== 200) {
      //       // this.$Message.err(data.data.message)
      //     } else {
      //       this.$store.dispatch('userLogin', true)
      //       localStorage.setItem('Flag', 'isLogin')
      //       this.$Message.success(data.data.message)
      //       let redirect = '/mine'
      //       this.$router.replace(redirect)
      //     }
      // })
    }
  }
}
</script>

<style lang="less">
.logo {
  width: 80px;
  height: 80px;
  background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png)
    no-repeat;
  background-size: contain;
  margin: 47px auto 0;
}
.am-list {
  width: 329px;
  position: relative;
  margin: 0 auto;
  font-size: 16px;
  color: #333;
  .am-list-item {
    position: relative;
    width: 100%;
    margin: 45px 0 0;
    border-bottom: 1px solid #ff5000;
    .lg-reqguired {
      font-size: inherit;
      width: 290px;
      height: 18px;
      margin: 0 0 6px 4px;
      outline: none;
      border: 0;
      color: #333;
      &::-webkit-input-placeholder {
        color: #c0c0c0;
      }
    }
    .lg-password {
      width: 270px;
    }
  }
}
.am-field {
  font-size: 14px;
  width: 329px;
  margin: 22px auto 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .am-button {
    background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
    color: #fff;
    box-shadow: 0 0.08rem 0.16rem #f7c7b1;
  }
  .am-button-submit {
    font-size: 16px;
    width: 100%;
    height: 43px;
    line-height: 43px;
    border-radius: 20px;
    text-align: center;
    border: 0;
  }
}
.am-fieldBottom {
  margin-top: 35px;
}
</style>
