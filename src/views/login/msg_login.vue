<template>
  <div>
    <div class="logo"></div>
    <div class="am-list">
      <div class="am-list-item">
        <input type="text" class="lg-reqguired" name="" placeholder="请输入手机号码">
      </div>
      <div class="am-list-item am-list-jy">
        <input type="password" class="lg-reqguired lg-password" name="" placeholder="校验码">
        <div class="am-list-button">
          <span id="getCheckCode">获取短信校验码</span>
        </div>
      </div>
    </div>
    <div class="am-field am-footer">
      <a href="">免费注册</a>
    </div>
    <div class="am-field am-fieldBottom">
      <button class="am-button am-button-submit">登 录</button>
      <button class="btn-change am-button-submit">账号密码登录</button>
    </div>
  </div>
</template>

<style lang="less">
  .logo{
    width: 80px;
    height: 80px;
    background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png) no-repeat;
    background-size: contain;
    margin: 47px auto 0;
  }

  .am-list{
    width: 329px;
    position: relative;
    margin: 0 auto;
    font-size: 16px;
    color: #333;
      .am-list-item{
        position: relative;
        width: 100%;
        margin: 45px 0 0;
        border-bottom: 1px solid #ff5000;
          .lg-reqguired{
            font-size: inherit;
            width: 290px;
            height: 18px;
            margin: 0 0 6px 4px;
            outline: none;
            border: 0;
            color: #333;
              &::-webkit-input-placeholder{
                color: #C0C0C0;
              }
          }
      }
      .am-list-jy{
        display: flex;
        justify-content: space-between;
        align-items: center;
          .am-list-button{
            border-left: .02666667rem solid #b5b5b5;
                #getCheckCode{
                  width: 127px;
                  display: block;
                  text-align: center;
                  color: #ff5000;
                  font-size: 16px;
                }
          }
      }
      .lg-password{
        width: 180px;
      }
  }
  .am-field{
    font-size: 14px;
    width: 329px;
    margin: 22px auto 0;
    display: flex;
    flex-flow: row nowrap;
    flex-direction: column;
    justify-content: space-between;
    .am-button{
      background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
      color: #fff;
      box-shadow: 0 6px 5px #f7c7b1;
    }
    .am-button-submit{
      font-size: 16px;
      width: 100%;
      height: 43px;
      line-height: 43px;
      border-radius: 20px;
      text-align: center;
      border: 0;
    }
    .am-fieldBottom{
      margin-top: 35px;
    }

    .btn-change{
      font-size: 16px;
      border: 1px solid #ff5000;
      color: #ff5000;
      background: #fff;
      text-decoration: none;
      margin: 22px auto 0;
    }
  }

</style>
