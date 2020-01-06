<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 text-center d-flex justify-content-between">
          <ul class="menu row">
            <li class="active ">
              <router-link to="/Login">登录</router-link>
            </li>
            <li><router-link to="/reg">注册 </router-link></li>
            <li><router-link to="#">忘记密码?</router-link></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class=" col-md-4 col-md-offset-4">
          <!-- Start Sign In Form -->
          <form
            action="#"
            class="fh-form  fadeIn "
            data-animate-effect="fadeIn"
          >
            <h2>登录</h2>
            <div class="form-group">
              <label for="username" class="sr-only">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                autocomplete="off"
                v-model="Username"
              />
              <span></span>
            </div>
            <div class="form-group">
              <label for="password" class="sr-only">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                autocomplete="off"
                v-model="Password"
              />
              <span></span>
            </div>
            <div class="form-group">
              <label for="remember"
                ><input type="checkbox" id="remember" v-model="remember" />
               记住我！</label
              >
            </div>
            <div class="form-group">
              <p>
                不注册? <router-link to="/reg">注册</router-link> |
                <a href="#">忘记密码?</a>
              </p>
            </div>
            <div class="form-group">
              <!-- <router-link to="#"> -->
              <input
                type="button"
                value="登录"
                class="btn btn-primary"
                @click="login"
              />
              <!-- </router-link> -->
            </div>
          </form>
          <!-- END Sign In Form -->
        </div>
      </div>

      <div class="row text-end">
        <div class="col-md-12 text-center">
          <p>
            <small
              >&copy; 版权所有 <a href="#" target="_blank">欢迎加入</a>
              <a href="#" title="" target="_blank">欢迎加入</a></small
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      Username: "",
      Password: "",
      remember: false
    };
  },
  methods: {
    login() {
      this.loginin({
        //给user
        uname: this.Username,
        upwd: this.Password
      }).then(res => {
        if (!this.remember) {
          localStorage.setItem("uname", this.Username);
        } else {
          sessionStorage.setItem("uname", this.Username);
        }
      

      var reg = /^[a-zA-Z0-9]{3,12}$/;
      var regp = /^[0-9]{6,8}$/;

      var n = this.Username;
      var p = this.Password;
      if (!reg.test(n)) {
        this.$messagebox("错误！", "用户名格式不正确(数字+大小写字母{3-12})");
        // this.$toast('用户名格式不正确');
        return;
      } else if (!regp.test(p)) {
        this.$messagebox("错误！", "密码格式不正确(6-8位)");
        // this.$toast('密码格式不正确');
        return;
      }
      // else{
      //   this.$toast('验证成功');
      //   this.$router.push('/');

      // }

      //7:发送ajax请求!!
      var url = "login";
      var obj = { uname: n, upwd: p };
      console.log(4);
      console.log(obj);
      this.axios
        .get("login", { params: { uname: n, upwd: p } })
        .then(res => {
          //成功回调函数48
          console.log(5);
          // console.log(res);
          //8:获取服务器返回结果
          console.log(res.data.code);
          if (res.data.code == -1) {
            console.log(6);
            //9:出错显示出错信息
            this.$messagebox("消息", "用户名或密码有误！");
          } else {
            this.$toast("登录成功");

            // alert("登录成功");
            console.log(7);
            console.log("请求成功：  " + res.status + "," + res.statusText);
            //10:跳转/Product
            this.$router.push("/");
          }
        })
        .catch(res => {
          console.log("请求失败：" + res.status + "," + res.statusText);
        });
      //  //查找要触发的元素
      //     var $txtName = $('#username');
      //     var $txtPwd = $('#password');
      //     //绑定事件处理函数
      //     //文本框失去焦点
      //     $txtName.blur(function() {
      //         vali.call(this, 3, 9, "用户名必须介于3~9位之间!")
      //     })
      //     $txtPwd.blur(function() {
      //         vali.call(this, 6, 8, "密码必须介于6~8位之间!")
      //     })

      //     function vali(minlen, maxlen, errMsg) {
      //         //查找要修改的元素
      //         //当前this指向span
      //         var $txt = $(this);
      //         var $span = $txt.next();
      //         //修改元素
      //         //如果验证通过；当前文本框的内容大于等于最小长度且小于等于最大长度
      //         if ($txt.val().length >= minlen && $txt.val().length <= maxlen) {
      //             $span.html("<img src='/img/ok.png'>");
      //         } else {
      //             $span.html("<img src='/img/err.png'>" + errMsg);
      //         }

      //     }
    });
    },
    ...mapActions([
      //去vuex的actions中取出名为login的函数放到此地
      "loginin" //,"logout","registor"
    ])
  }
};
</script>
<style scoped>
.container-fluid {
  background: url(/img/bg-5.jpg) no-repeat;
  background-size: cover;
}

.container-fluid div ul {
  list-style: none;
  margin: 30px auto;
  text-align: center;
  padding: 0;
}

.container-fluid div ul li {
  padding: 5px;
}

.container-fluid div ul li a {
  color: #3cc;
  font-size: 16px;
}

.container-fluid div ul li a:hover {
  color: #3cc;
  -webkit-transform: scale(2);
  transform: scale(2);
}

.container-fluid div {
  margin: 0 auto;
}

.container-fluid div .fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn 10s forwards;
  animation: fadeIn 10s forwards;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}

.container-fluid div .fh-form {
  width: 360px;
  height: 500px;
  margin: 4em auto;
  padding: 30px;
  -webkit-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
  box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.container-fluid div .fh-form h2 {
  text-transform: uppercase;
  margin-bottom: 30px;
}

.container-fluid div .fh-form .form-group {
  margin-bottom: 30px;
}

.container-fluid div .fh-form .form-group .form-control {
  font-size: 16px;
  font-weight: 300;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 50px;
}

.container-fluid div .fh-form .form-group label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 300;
}

.container-fluid div .fh-form .form-group p {
  font-size: 14px;
  color: #9f9f9f;
  font-weight: 300;
  margin-bottom: 10px;
}

.container-fluid div .fh-form .form-group .btn-primary {
  height: 50px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  background: #33cccc;
  color: #ffffff;
  -webkit-box-shadow: -2px 10px 20px -1px rgba(51, 204, 204, 0.4);
  box-shadow: -2px 10px 20px -1px rgba(51, 204, 204, 0.4);
}

.container-fluid div .text-end {
  padding-top: 60px;
  clear: both;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
/*# sourceMappingURL=denglu.css.map */
</style>
