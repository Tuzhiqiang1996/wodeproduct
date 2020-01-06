<template>
  <div>

<section class="brands">
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col-md-2 col-4 main-brand bg-grey">
                    <span class="fa fa-500px mb-3" aria-hidden="true"></span>
                    <h5>一夜暴富</h5>
                </div>
                <div class="col-md-2 col-4 main-brand bg-black">
                    <span class="fa fa-gg mb-3" aria-hidden="true"></span>
                    <h5>钱包鼓鼓</h5>
                </div>
                <div class="col-md-2 col-4 main-brand bg-dark2">
                    <span class="fa fa-lastfm mb-3" aria-hidden="true"></span>
                    <h5>岁岁平安</h5>
                </div>
                <div class="col-md-2 col-4 main-brand bg-grey">
                    <span class="fa fa-openid mb-3" aria-hidden="true"></span>
                    <h5>岁岁有我</h5>
                </div>
                <div class="col-md-2 col-4 main-brand bg-black">
                    <span class="fa fa-ravelry mb-3" aria-hidden="true"></span>
                    <h5>大吉大利</h5>
                </div>
                <div class="col-md-2 col-4 main-brand bg-dark2">
                    <span class="fa fa-angellist mb-3" aria-hidden="true"></span>
                    <h5>一切顺利</h5>
                </div>
            </div>
        </div>
    </section>


    <footer class="footer py-sm-5 py-4 text-center bg-dark">
        <div class="container py-xl-4 py-lg-3">
            <!-- logo -->
            <div class="logo-2 text-center">
                <h2>
                    <a class="" href="index.html"><img src="img/logo.png" alt="" class="img-fluid">未来可期</a>
                </h2>
            </div>
            <!-- //logo -->
            <div class="footer-ex my-5">
                <h3 class="footer-tha">为自己鼓掌！</h3>
                <img src="img/img5.png" alt="" class="img-fluid">
            </div>
            <!-- social icons footer -->
            <div class="w3l-footer text-center">
                <ul class="list-unstyled">
                    <li>
                        <a href="#">
                            <span class="fa fa-facebook-f"></span>
                        </a>
                    </li>
                    <li class="mx-1">
                        <a href="#">
                            <span class="fa fa-twitter"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="fa fa-dribbble"></span>
                        </a>
                    </li>
                    <li class="ml-1">
                        <a href="#">
                            <span class="fa fa-vk"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- //social icons footer -->
        </div>
        <div class="footer-pos">
            <img src="img/gift.png" alt="" class="img-fluid">
        </div>
        <div class="footer-pos-2">
            <img src="img/gift2.png" alt="" class="img-fluid">
        </div>
    </footer>
   
    <!-- //end -->
    <div class="row end-End">
        <p class="col-12">
            ❤如果你足够勇敢说再见，生活就会奖励你一个新的开始！ღ
        </p>
    </div>
  </div>
</template>
<style  scoped>

.main-brand {
  padding: 2em;
}
.bg-grey {
  background: #00cec9;
}

.bg-black {
  background: #04dcd7;
}

.bg-dark2 {
  background: #05e6e1;
}

.main-brand {
  padding: 2em;
}


.footer {
  position: relative;
}

.footer .logo-2 a {
  font-weight: 700;
  font-size: 40px;
  color: #fff;
  text-shadow: 2px 5px 3px rgba(0, 0, 0, 0.06);
  font-family: 'Arizonia', cursive;
  letter-spacing: 1px;
}

.footer h3.footer-tha {
  color: #fff;
  font-family: 'Great Vibes', cursive;
  font-size: 3em;
  letter-spacing: 1px;
}

.footer .footer-pos {
  position: absolute;
  right: 4%;
  top: 30%;
  -webkit-transform: rotate(-30deg);
          transform: rotate(-30deg);
}

.footer .footer-pos img:hover {
  -webkit-animation: huang 3s infinite;
          animation: huang 3s infinite;
}

.footer .footer-pos-2 {
  position: absolute;
  bottom: 0;
  left: 2%;
}

.footer .footer-pos-2 img:hover {
  -webkit-animation: huang 3s infinite;
          animation: huang 3s infinite;
}

.end-End {
  color: #fff;
  text-align: center;
  height: 50px;
  background: #000;
  line-height: 50px;
}

@-webkit-keyframes huang {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  5% {
    -webkit-transform: rotate(10deg);
            transform: rotate(10deg);
  }
  10% {
    -webkit-transform: rotate(-9deg);
            transform: rotate(-9deg);
  }
  15% {
    -webkit-transform: rotate(8deg);
            transform: rotate(8deg);
  }
  20% {
    -webkit-transform: rotate(-7deg);
            transform: rotate(-7deg);
  }
  25% {
    -webkit-transform: rotate(6deg);
            transform: rotate(6deg);
  }
  30% {
    -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
  }
  35% {
    -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
  }
  40% {
    -webkit-transform: rotate(-3deg);
            transform: rotate(-3deg);
  }
  45% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  50% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
}

@keyframes huang {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  5% {
    -webkit-transform: rotate(10deg);
            transform: rotate(10deg);
  }
  10% {
    -webkit-transform: rotate(-9deg);
            transform: rotate(-9deg);
  }
  15% {
    -webkit-transform: rotate(8deg);
            transform: rotate(8deg);
  }
  20% {
    -webkit-transform: rotate(-7deg);
            transform: rotate(-7deg);
  }
  25% {
    -webkit-transform: rotate(6deg);
            transform: rotate(6deg);
  }
  30% {
    -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
  }
  35% {
    -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
  }
  40% {
    -webkit-transform: rotate(-3deg);
            transform: rotate(-3deg);
  }
  45% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  50% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
}
</style>