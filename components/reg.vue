<template>
  <div class="bg-img">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center d-flex justify-content-between">
          <ul class="row">
            <li>
              <router-link to="/Login">login</router-link>
            </li>
            <li class="active">
              <router-link to="/reg">reg</router-link>
            </li>
            <li>
              <a href="#">Forgot Password?</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <!-- Start Sign In Form -->
          <form
            action="#"
            class="fh-form fadeInLeft"
            data-animate-effect="fadeInLeft"
          >
            <h2>Sign Up</h2>
            <div class="form-group">
              <div class="alert alert-success" role="alert">
                Your info has been saved.
              </div>
            </div>
            <div class="form-group">
              <!-- <label for="name">Name</label> -->
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Username"
                autocomplete="off"
                value
                v-model="Username"
              />
              <span id="uname-msg"></span>
            </div>
            <div class="form-group">
              <label for="email" class="sr-only">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                autocomplete="off"
                value
                v-model="email"
              />
              <span id="uname-msg"></span>
            </div>
            <div class="form-group">
              <label for="password" class="sr-only">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                autocomplete="off"
                value
                v-model="Password"
              />
              <span id="uname-msg"></span>
            </div>
            <div class="form-group">
              <label for="re-password" class="sr-only">Re-type Password</label>
              <input
                type="Password"
                class="form-control"
                id="re-password"
                placeholder="Re-type Password"
                autocomplete="off"
                value
                v-model="Password1"
              />
              <span id="uname-msg"></span>
            </div>
            <div class="form-group">
              <label for="remember">
                <input type="checkbox" id="remember" /> Remember Me
              </label>
            </div>
            <div class="form-group">
              <p>
                Already registered?
                <router-link to="/login">Sign In</router-link>
              </p>
            </div>
            <div class="form-group">
              <input
                type="button"
                value="Sign Up"
                class="btn btn-primary"
                @click="reg"
              />
            </div>
          </form>
          <!-- END Sign In Form -->
        </div>
      </div>

      <div class="row this-end">
        <div class="col-md-12 text-center">
          <p>
            <small>
              &copy; 版权所有
              <a href="#" target="_blank" title="欢迎加入">欢迎加入</a>
              <a href="#" title="欢迎加入" target="_blank">欢迎加入</a>
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Username: "tom",
      Password: "123456",
      Password1: "123456",
      email: "1602072414@qq.com"
    };
  },
  methods: {
    reg() {
      var reg = /^[a-zA-Z0-9]{3,12}$/;
      var regp = /^[0-9]{6,8}$/;
      //  var rege= /\w+\@([A-Za-z0-9]|-)+\.[a-z]{2,3}(\.[a-z]{2})?/ig;
      var rege = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      var n = this.Username;
      var p = this.Password;
      var e = this.email;
      if (!reg.test(n)) {
        this.$messagebox("错误！", "用户名格式不正确(数字+大小写字母{3-12})");
        // this.$toast('用户名格式不正确');
        return;
      } else if (!regp.test(p)) {
        this.$messagebox("错误！", "密码格式不正确(6-8位)");
        // this.$toast('密码格式不正确');
        return;
      } else if (!rege.test(e)) {
        this.$messagebox("错误！", "邮箱格式不正确");
        return;
      } else if (this.Password !== this.Password1) {
        this.$messagebox("错误！", "两次密码不同");
        return;
      }
      //发送ajax请求
      var url = "/reg";
      var obj = { uname: this.Username, upwd: this.Password };
      console.log(1);
      console.log(obj);
      this.axios.get(url, {params:obj}).then(res => {
        console.log(res);
        console.log(2);
        if(res.data.code==-1){
          this.$toast('用户已存在，请重新登陆')
        }else{
          this.$messagebox.confirm("注册成功", "是否跳转登陆页面").then(res=>{
            this.$router.push('/login')
          }
          ).catch(err=>{console.log(err)});

        }
      });

    //  else {
      //   this.$messagebox
      //     .confirm("是否跳转登录页面")
      //     // .then(this.$router.push("/login"))
      //     .then((res)=>{console.log(res)})
      //     .catch((err) => {
      //       this.$toast("请求失败");
      //     });
      // }
      // //dom四部曲
      //           //查找要触发的元素
      //           var $txtName = $(':text');
      //           var $txtPwd = $(':password');
      //           var $txtEm = $('#email');
      // 					var $txtpwd=$('#re-password');
      //           //绑定事件处理函数
      //           $txtName.blur(function() {
      //               voli.call(this, 3, 9, "用户名必须介于3~9位之间")
      //           })
      //           $txtPwd.blur(function() {
      //               voli.call(this, 6, 8, "密码必须介于6~8位之间!")
      //           })
      //           $txtEm.blur(function() {
      //               voli.call(this, 6, 6, "邮箱格式不合法！")
      //           })

      //           function voli(minlen, maxlen, errMsg) {
      //               //查找要修改的元素
      //               //修改input，this
      //               $txt = $(this);
      //               //查找span
      //               $span = $txt.next();
      //               // var $txtEm = $('#email');
      //               //修改元素
      //               //判断   邮箱
      //               // var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/ig;

      //               //判断    如果验证通过: 当前文本框的内容的长度大于等于最小长度且小于等于最大长度才行
      //               var reg = /\w+@([A-Za-z0-9]|-)+\.[a-z]{2,3}(\.[a-z]{2})?/ig;
      //               var i = $txtEm.val();

      //               // console.log(i)
      //               if ($txt.val().length >= minlen && $txt.val().length <= maxlen) {
      //                   $span.html("<img src='/img/ok.png'>");
      //                   return true;
      //               } else if ($txt.val().length < minlen && $txt.val().length > maxlen) {
      //                   $span.html("<img src='/img/err.png'>" + errMsg);
      //                   return false;
      //               } else if (reg.test(i) == true) {
      //                   $span.html("<img src='/img/ok.png'>");
      //                   return true;
      //                   // } else if (reg.test(i) == false) {
      //               } else {
      //                   $span.html("<img src='/img/err.png'>" + errMsg);
      //                   return false;
      //               }
      //           }

      //               //zhuce
      //           $(':button').click(function() {
      //               if (voli.call($txtName, 3, 9, "用户名必须介于3~9位之间") == false) {
      //                   $txtName.focus();
      //               } else if (voli.call($txtPwd, 6, 8, "密码必须介于6~8位之间!") == false) {
      //                   $txtPwd.focus();
      //                   console.log('2')
      //               } else if (voli.call($txtEm, "邮箱格式不合法！") == false) {
      //                   $txtEm.focus();
      //                   console.log('1')
      //               } else {
      //                   alert('注册成功')
      //               }
      //           })
    }
  }
};
</script>
<style scoped>
.bg-img {
  background-position: -30% center;
  background: url(/img/bg-8.jpg) no-repeat;
  background-size: cover;
}

.container div ul {
  list-style: none;
  margin: 30px auto;
  text-align: center;
  padding: 0;
}

.container div ul li {
  padding: 5px;
}

.container div ul li a {
  color: #3cc;
  font-size: 16px;
}

.container div ul li a:hover {
  color: #3cc;
  -webkit-transform: scale(2);
  transform: scale(2);
}

.container .fh-form {
  width: 360px;
  height: 700px;
  background: #fff;
  padding: 30px;
  margin-top: 4em;
}

.container .fh-form h2 {
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 0 30px 0;
  color: #000;
}

.container .fh-form div .form-control {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 300;
  height: 50px !important;
  background: #fff;
  border-radius: 0px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.container .fh-form div .form-control label {
  font-weight: 300;
}

.container .fh-form div .btn-primary {
  height: 50px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  background: #33cccc;
  color: #ffffff;
  -webkit-box-shadow: -2px 10px 20px -1px rgba(51, 204, 204, 0.4);
  box-shadow: -2px 10px 20px -1px rgba(51, 204, 204, 0.4);
}

.container .this-end p {
  color: #fff;
  padding-top: 60px;
  clear: both;
}

.container .fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-50px, 0, 0);
    transform: translate3d(-50px, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-50px, 0, 0);
    transform: translate3d(-50px, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
/*# sourceMappingURL=zhuce.css.map */
</style>
