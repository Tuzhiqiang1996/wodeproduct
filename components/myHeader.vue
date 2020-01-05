<template>
  <div>
    <div class="happy" id="arr">
        <header>
            <div class="container-fulid">
                <div class="navbar navbar-expand-lg  navbar-dark head ">
                    <!--1、不折叠的菜单-->
                    <a class="navbar-brand head-a " href=""><img src="/img/logo.png  " alt="" class="img-fluid">Celebration</a>
                    <!--2、lg隐藏，lg以下显示按钮-->
                    <button data-target="#dd" data-toggle="collapse" class="navbar-toggler">
                        Menu
                    </button>
                    <!--3、隐藏的折叠栏-->
                    <div id="dd" class="collapse navbar-collapse dd ">
                        <ul class="  navbar-nav   
                    head-right">
                            <li class="nav-item">
                                <router-link class="nav-link active" to="/">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="">
                                    Pages
                                </a>
                                <ul class=''>
                                    <li><a href="" class="drop-text active">About Us</a></li>
                                    <li><a href="" class="drop-text">Event Schedule</a></li>
                                    <li><a href="" class="drop-text">Our News</a></li>
                                    <li><a href="#what" class="drop-text">What We do</a></li>
                                    <li><a href="#testi" class="drop-text">Testimonials</a></li>
                                   
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/Gall">Gallery</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/Contact">Contact</router-link>
                            </li>
                             <li class="nav-item">
                               <router-link to="/login" class="nav-link">Login</router-link></li>
                                   
                               <li class="nav-item">
                                <router-link to="/reg" class="nav-link">Register</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <!-- 1 -->
        <div class="container " style="    margin: 0 auto;">
            <div class="banner-tops-style">
                <div class="style-banner text-center">
                    <img src="/img/img2.png" alt="" class="img-fluid">
                    <h4 class="text-li mb-5 mt-2">2020</h4>
                    <h3 class="text-wh mb-4">New Year Celebration</h3>
                    <img src="/img/img5.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <!-- 2 -->
        <div class="icon-effects-w3-2">
            <img src="/img/icon-3.png" alt="" class="img-fluid">
        </div>
        <div class="icon-effects-w3-2-1">
            <img src="/img/icon-3.png" alt="" class="img-fluid">
        </div>
        <!-- 3 -->
        <div class="icon-effects-w3-3">
            <img src="/img/ba2.png" alt="" class="img-fluid">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style  scoped>
/* * {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
  margin: 0;
} */

header ul ul {
  display: none;
  position: absolute;
  top: 58px;
  background: #333;
  padding: 10px;
  border-radius: 4px;
  z-index: 9;
}

header ul ul li {
  width: 170px;
  float: none;
  display: list-item;
  position: relative;
  margin-bottom: 10px;
  border-radius: 4px;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
}

header ul ul li:hover > ul {
  display: inherit;
}

header ul ul li a {
  color: #fff;
  padding: 5px 10px;
  display: block;
  font-size: 14px;
  background: transparent;
}

/* header ul ul li a:hover {
  color: #00cec9;
  background: #fff;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
} */

.happy {
  position: relative;
  background: url(/img/b3.jpg) no-repeat bottom;
  background-size: cover;
  min-height: 800px;
}

.happy .head .head-a {
  float: left;
  display: initial;
  font-weight: 700;
  font-size: 40px;
  color: #fff;
  text-shadow: 2px 5px 3px rgba(0, 0, 0, 0.06);
  font-family: 'Work Sans', sans-serif;
  padding: 0;
  letter-spacing: 1px;
}

.happy .head .dd {
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

.happy .head .dd .head-right li a {
  color: #666;
  font: bold italic 16px arial;
  background: #fff;
  margin-right: 10px;
  border-radius: 8px;
  text-align: center;
}

.happy .head .dd .head-right li a:hover {
  color: #00cec9;
  -webkit-transition: all 0.5s initial;
  transition: all 0.5s initial;
}

.happy .head .dd .head-right li .active {
  color: #00cec9;
}

.happy .head .dd .head-right li:nth-child(2):hover ul {
  -webkit-transition: height 10s;
  transition: height 10s;
  -webkit-animation: move .2s initial;
          animation: move .2s initial;
  display: block;
      background: transparent;
          text-decoration: none;
}

.happy .head .dd .head-right li:nth-child(2) ul {
  /* height: 0; */
  display: none;
  -webkit-transition: all .5s linear;
  transition: all .5s linear;
}

.happy .style-banner {
  padding-top: 12em;
}

.happy .style-banner .img-fluid {
  max-width: 100%;
  height: auto;
}

.happy .style-banner h4 {
  font-size: 5em;
  font-style: italic;
  color: #fff;
  position: relative;
  font-family: 'Righteous', cursive;
}

.happy .style-banner h4::before {
  content: "";
  background: #fff;
  width: 100px;
  height: 2px;
  position: absolute;
  bottom: -12px;
  right: 38%;
}

.happy .style-banner h4::after {
  content: "";
  background: #fff;
  width: 100px;
  height: 2px;
  position: absolute;
  bottom: -12px;
  left: 38%;
}

.happy .style-banner h3 {
  color: #fff;
  font-size: 4em;
  line-height: 1.3;
  font-family: 'Great Vibes', cursive;
  letter-spacing: 1px;
}

.happy .icon-effects-w3-2 {
  position: absolute;
  bottom: 64%;
  left: 20%;
  -webkit-animation: imgIcon 5s infinite linear;
          animation: imgIcon 5s infinite linear;
}

.happy .icon-effects-w3-2-1 {
  position: absolute;
  bottom: 50%;
  left: 55%;
  -webkit-animation: imgIcon 5.5s infinite linear;
          animation: imgIcon 5.5s infinite linear;
}

.happy .icon-effects-w3-3 {
  position: absolute;
  bottom: 32%;
  right: 10%;
  -webkit-animation: imgIcon 8s infinite linear;
          animation: imgIcon 8s infinite linear;
}
ul,
li {
  padding: 0;
  text-align: center;
}

@-webkit-keyframes imgIcon {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

@keyframes imgIcon {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

body {
  padding: 0;
  margin: 0;
  background: #FFF;
  font-family: 'Lato', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-family: 'Roboto Condensed', sans-serif;
}
a{
      text-decoration: none;
}
p {
  margin: 0;
  padding: 0;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 1.9;
  color: #999;
  font-family: 'Lato', sans-serif;
}

img {
  vertical-align: middle;
  border-style: none;
}

@-webkit-keyframes move {
  0% {
    width: 115px;
  }
  100% {
    width: 100%;
  }
}

@keyframes move {
  0% {
    width: 115px;
  }
  100% {
    width: 100%;
  }
}

.carousel-control-prev,
.carousel-control-next {
  width: 4%;
  height: 20%;
  top: 40%;
  background-color: #aaa;
  border-radius: 0.25rem;
}

.carousel-indicators li {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: #fff;
}

.carousel-indicators .active {
  background-color: #0aa1ed;
}

.arr {
  position: fixed;
  right: 50px;
  bottom: 50px;
}

.arr img {
  width: 50px;
  -webkit-transform: rotate(-33deg);
          transform: rotate(-33deg);
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
/*# sourceMappingURL=dongle.css.map */
</style>