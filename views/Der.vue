<template>
  <div>
    <!-- 4 -->
    
    <myhader></myhader>
      <div class="container py-xl-5 py-lg-3 text-center">
        <div class="title mb-sm-5 mb-4">
            <h3 class="title-w3 text-bl text-center font-weight-bold">新年联欢会</h3>
            <img src="img/titt.png" alt="" class="img-fluid">
        </div>
        <!-- 轮播图 -->
        <div id="demo" class="carousel" data-ride="carousel">
            <!-- 1.轮播图片-->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="img/tu1.jpg" />
                    <h3>新年愿望→家人健康快乐！</h3>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/tu2.jpg" />
                    <h3>新年愿望→家人健康快乐！</h3>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/tu3.jpg" />
                   <h3>新年愿望→家人健康快乐！</h3>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/tu4.jpg" />
                    <h3>新年愿望→家人健康快乐！</h3>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/tu5.jpg" />
                    <h3>新年愿望→家人健康快乐！</h3>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/tu6.jpg" />
                    <h3>新年愿望→家人健康快乐！</h3>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/tu7.jpg" />
                    <h3>新年愿望→家人健康快乐！</h3>
                </div>
            </div>
            <!-- 2.左右箭头-->
            <a data-slide="prev" href="#demo" class="carousel-control-prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a data-slide="next" href="#demo" class="carousel-control-next">
                <span class="carousel-control-next-icon"></span>
            </a>
            <!-- 3.轮播指示器-->
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
                <li data-target="#demo" data-slide-to="5"></li>
                <li data-target="#demo" data-slide-to="6"></li>
            </ul>
        </div>

        <img src="img/ab.jpg" alt="" class="img-fluid mt-2">
        <p class="mx-auto wstyles text-center mt-lg-5 mt-4">
         哪日我们欢聚一堂,抚今追昔,我们举杯同庆,放歌舒怀。为同学之情地久天长,干杯!相聚是短暂而又欢欣的,在充满激情的聚会之后,互道珍重,又要各奔东西了,之后又将是长长的别离,但友情的芬芳会给我们平淡的生活增添一缕和煦的阳光
        </p>
        <router-link to="/Login" style="max-width: 150px;" class="btn button-style mt-sm-5 mt-4">Join Now</router-link>
    </div>

    <!-- 5 -->
    <div class="middle1 py-5">
        <div class="container py-xl-5 py-lg-3">
            <div class="row py-lg-5 my-sm-4">
                <div class="col-lg-7 mt-4">
                    <p class="text-li mb-2">准备，开始，出发...</p>
                    <h3 class="text-wh">让我们庆祝新年晚会</h3>
                </div>
                <div class="col-lg-5 mt-lg-0 mt-5">
                    <h4>让我们 <br>嗨起来!</h4>
                </div>
            </div>
        </div>
    </div>
    <!-- 6 -->
    <div class="serives-agile py-5" id="what">
        <div class="container py-xl-5 py-lg-3">
            <div class="title text-center mb-sm-5 mb-4">
                <h3 class="title-w3 text-bl text-center font-weight-bold"> 为 您 推 荐</h3>
                <div class="arrw">
                    <i class="fa" aria-hidden="true">
                        <img src="img/jiubei-copy.png" alt="">
                    </i>
                </div>
            </div>
            <div class="row welcome-bottom text-center">
                <div class="col-lg-3 col-sm-6">
                    <div class="welcome-grid bg-white py-5 px-4">
                        <img src="img/wh1.jpg" alt="" class="img-fluid">
                        <h4 class="mt-4 mb-3 text-dark">饮料</h4>
                        <p>Quis nostrum ullam corporis suscipit.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-sm-0 mt-5">
                    <div class="welcome-grid bg-white py-5 px-4">
                        <img src="img/wh2.jpg" alt="" class="img-fluid">
                        <h4 class="mt-4 mb-3 text-dark">灯火</h4>
                        <p>Quis nostrum ullam corporis suscipit.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-lg-0 mt-5">
                    <div class="welcome-grid bg-white py-5 px-4">
                        <img src="img/wh3.jpg" alt="" class="img-fluid">
                        <h4 class="mt-4 mb-3 text-dark">DJ 音乐</h4>
                        <p>Quis nostrum ullam corporis suscipit.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-lg-0 mt-5">
                    <div class="welcome-grid bg-white py-5 px-4">
                        <img src="img/wh4.jpg" alt="" class="img-fluid">
                        <h4 class="mt-4 mb-3 text-dark">狂欢</h4>
                        <p>Quis nostrum ullam corporis suscipit.</p>
                    </div>
                </div>
            </div>
            <div class="row welcome-bottom text-center mt-5">
                <div class="col-lg-3 col-sm-6">
                    <div class="welcome-grid bg-white py-5 px-4">
                        <img src="img/wh5.jpg" alt="" class="img-fluid">
                        <h4 class="mt-4 mb-3 text-dark">赠品</h4>
                        <p>Quis nostrum ullam corporis suscipit.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-sm-0 mt-5">
                    <div class="welcome-grid bg-white py-5 px-4">
                        <img src="img/wh6.jpg" alt="" class="img-fluid">
                        <h4 class="mt-4 mb-3 text-dark">装饰</h4>
                        <p>Quis nostrum ullam corporis suscipit.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-lg-0 mt-5">
                    <div class="welcome-grid bg-white py-5 px-4">
                        <img src="img/wh7.jpg" alt="" class="img-fluid">
                        <h4 class="mt-4 mb-3 text-dark">晚餐</h4>
                        <p>Quis nostrum ullam corporis suscipit.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-lg-0 mt-5">
                    <div class="welcome-grid bg-white py-5 px-4">
                        <img src="img/wh8.jpg" alt="" class="img-fluid">
                        <h4 class="mt-4 mb-3 text-dark">跳舞</h4>
                        <p>Quis nostrum ullam corporis suscipit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 7 -->
    <div class="bg-colors py-5">
        <div class="container py-md-2">
            <h4 class="text-center font-weight-bold text-white">Are You Ready
                <a href="" class="text-white button-clk">Joining Our Event Programs ?</a>
            </h4>
        </div>
    </div>
    <!-- 8 -->
    <div class="bg-dark py-5">
        <div class="container py-xl-4 py-lg-3">
            <div class="row">
                <div class="col-lg-4 border-right">
                    <p class="text-li">Signup for Free</p>
                    <h3 class="text-white font-weight-bold mt-2 mb-3">Subscribe Newsletter</h3>
                </div>
                <div class="col-lg-8 news-right-w3ls mt-lg-0 mt-4">
                    <p class="text-light mb-3">Subscribe to our latest news to be updated</p>
                    <form action="#" method="post">
                        <div class="row">
                            <div class="col-md-5 form-group pr-md-0">
                                <input class="form-control" type="text" name="Name" placeholder="Name" required="">
                            </div>
                            <div class="col-md-5 form-group pr-md-0">
                                <input class="form-control" type="email" name="Email" placeholder="Email Address" required="">
                            </div>
                            <div class="col-md-2 form-group pr-md-0 mt-md-0 mt-3">
                                <button class="form-control btn" type="submit">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- 9 -->
    <div class="about-w3sec py-5" id="event">
        <div class="container py-xl-5 py-lg-3">
            <div class="title text-center mb-sm-5 mb-4">
                <h3 class="title-w3 text-bl text-center font-weight-bold"> 活 动 安 排 </h3>
                <div class="arrw">
                    <i class="fa fa-glass" aria-hidden="true">
                        <img src="img/jiubei.png" alt="">
                    </i>
                </div>
            </div>
            <div class="evnt-grid p-sm-5 p-4">
                <div class="row">
                    <div class="col-lg-2 col-sm-3 text-center mt-2">
                        <img src="img/e1.jpg" alt="" class="img-fluid" />
                    </div>
                    <div class="col-lg-7 col-sm-9 abt-block pr-lg-5 mt-sm-0 mt-4">
                        <h3 class="mb-2">Morning Sermon and Prayer</h3>
                        <p>Congue donec leo eget malesuada, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <ul class="list-unstyled mt-3">
                            <li>
                                <span class="fa fa-user-o mr-2">
                                    <!-- <img src="" alt=""> -->
                                </span>Molive Joe
                            </li>
                            <li class="mx-md-4 mx-2">
                                <span class="fa fa-clock-o mr-2"></span>7:30 - 9:30
                            </li>
                            <li>
                                <span class="fa fa-map-marker mr-2"></span>Hall No.1
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 abt-block text-center">
                        <router-link to="/login" style="max-width: 150px;" class="btn button-style mt-sm-5 mt-4">Join Now</router-link>
                    </div>
                </div>
            </div>
            <div class="evnt-grid p-sm-5 p-4 my-5">
                <div class="row">
                    <div class="col-lg-2 col-sm-3 text-center mt-2">
                        <img src="img/e2.jpg" alt="" class="img-fluid" />
                    </div>
                    <div class="col-lg-7 col-sm-9 abt-block pr-lg-5 mt-sm-0 mt-4">
                        <h3 class="mb-2">Candel Light​ ​Service and Singing Worship</h3>
                        <p>Congue donec leo eget malesuada, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <ul class="list-unstyled mt-3">
                            <li>
                                <span class="fa fa-user-o mr-2"></span>Molive Joe
                            </li>
                            <li class="mx-md-4 mx-2">
                                <span class="fa fa-clock-o mr-2"></span>7:30 - 9:30
                            </li>
                            <li>
                                <span class="fa fa-map-marker mr-2"></span>Hall No.1
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 abt-block text-center">
                        <a href="login.html" style="max-width: 150px;" class="btn button-style mt-sm-5 mt-4">Join Now</a>
                    </div>
                </div>
            </div>
            <div class="evnt-grid p-sm-5 p-4">
                <div class="row">
                    <div class="col-lg-2 col-sm-3 text-center mt-2">
                        <img src="img/e3.jpg" alt="" class="img-fluid" />
                    </div>
                    <div class="col-lg-7 col-sm-9 abt-block pr-lg-5 mt-sm-0 mt-4">
                        <h3 class="mb-2">Mid Night Service and New Year Wishes</h3>
                        <p>Congue donec leo eget malesuada, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <ul class="list-unstyled mt-3">
                            <li>
                                <span class="fa fa-user-o mr-2"></span>Molive Joe
                            </li>
                            <li class="mx-md-4 mx-2">
                                <span class="fa fa-clock-o mr-2"></span>7:30 - 9:30
                            </li>
                            <li>
                                <span class="fa fa-map-marker mr-2"></span>Hall No.1
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 abt-block text-center">
                        <a href="login.html" style="max-width: 150px;" class="btn button-style mt-sm-5 mt-4">Join Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 10 -->
    <div class="testimonials text-center py-5" id="testi">
        <div class="container py-xl-5 py-lg-3">
            <div class="title mb-sm-5 mb-4">
                <h3 class="title-w3 text-wh text-center font-weight-bold">呐喊你的心声！</h3>
                <img src="img/tiw.png" alt="" class="img-fluid">
            </div>
            <div class="row pt-4 my-md-4">
                <div class="col-lg-4 testi-sections">
                    <div class="testimonials_grid p-sm-5 p-4">
                        <p class="sub-test"><span>
                        </span> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
                        </p>
                        <div class="row mt-4">
                            <div class="col-5 testi-img-res text-right">
                                <img src="img/te1.jpg" alt="" class="img-fluid" />
                            </div>
                            <div class="col-7 testi_grid text-left mt-xl-3 mt-lg-2 mt-4">
                                <h5 class="mb-1">Petey Cruis</h5>
                                <p>Sub heading</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 testi-sections my-lg-0 my-4">
                    <div class="testimonials_grid p-sm-5 p-4">
                        <p class="sub-test"><span class="fa fa-quote-left mr-2" aria-hidden="true"></span> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
                        </p>
                        <div class="row mt-4">
                            <div class="col-5 testi-img-res text-right">
                                <img src="img/te2.jpg" alt="" class="img-fluid" />
                            </div>
                            <div class="col-7 testi_grid text-left mt-xl-3 mt-lg-2 mt-4">
                                <h5 class="mb-1">Molive Joe</h5>
                                <p>Sub heading</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 testi-sections">
                    <div class="testimonials_grid p-sm-5 p-4">
                        <p class="sub-test"><span class="fa fa-quote-left mr-2" aria-hidden="true"></span> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
                        </p>
                        <div class="row mt-4">
                            <div class="col-5 testi-img-res text-right">
                                <img src="img/te3.jpg" alt="" class="img-fluid" />
                            </div>
                            <div class="col-7 testi_grid text-left mt-xl-3 mt-lg-2 mt-4">
                                <h5 class="mb-1">Paige Turner</h5>
                                <p>Sub heading</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 11 -->
    <section class="blog_w3ls py-5" id="news">
        <div class="container py-xl-5 py-lg-3">
            <div class="title text-center mb-sm-5 mb-4">
                <h3 class="title-w3 text-bl text-center font-weight-bold"> 最 新 消 息 </h3>
                <div class="arrw">
                    <i class="fa fa-glass" aria-hidden="true">
                        <img src="img/jiubei_1.png" alt="">
                    </i>
                </div>
            </div>
            <div class="row pt-4">
                <!-- blog grid -->
                <div class="col-lg-4 col-md-6">
                    <div class="card border-0 med-blog">
                        <div class="card-header p-0">
                            <a href="single.html">
                                <img class="card-img-bottom" src="img/blog2.jpg" alt="Card image cap">
                            </a>
                        </div>
                        <div class="card-body border border-top-0 pb-5">
                            <div class="mb-3">
                                <h5 class="blog-title card-title font-weight-bold m-0">
                                    <a href="single.html">Dictum porta auris</a>
                                </h5>
                                <div class="blog_w3icon">
                                    <span>
                                        Dec 31,2018 - loremipsum</span>
                                </div>
                            </div>
                            <p class="mb-4">Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                            <a href="single.html" class="blog-btn">Read More</a>
                        </div>
                    </div>
                </div>
                <!-- //blog grid -->
                <!-- blog grid -->
                <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                    <div class="card border-0 med-blog">
                        <div class="card-header p-0">
                            <a href="single.html">
                                <img class="card-img-bottom" src="img/blog1.jpg" alt="Card image cap">
                            </a>
                        </div>
                        <div class="card-body border border-top-0 pb-5">
                            <div class="mb-3">
                                <h5 class="blog-title card-title font-weight-bold m-0">
                                    <a href="single.html">Dictum porta auris</a>
                                </h5>
                                <div class="blog_w3icon">
                                    <span>
                                        Jan 01, 2019 - loremipsum</span>
                                </div>
                            </div>
                            <p class="mb-4">Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                            <a href="single.html" class="blog-btn">Read More</a>
                        </div>
                    </div>
                </div>
                <!-- //blog grid -->
                <!-- blog grid -->
                <div class="col-lg-4 col-md-6 mt-lg-0 mt-5">
                    <div class="card border-0 med-blog">
                        <div class="card-header p-0">
                            <a href="single.html">
                                <img class="card-img-bottom" src="img/blog3.jpg" alt="Card image cap">
                            </a>
                        </div>
                        <div class="card-body border border-top-0 pb-5">
                            <div class="mb-3">
                                <h5 class="blog-title card-title font-weight-bold m-0">
                                    <a href="single.html">Dictum porta auris</a>
                                </h5>
                                <div class="blog_w3icon">
                                    <span>
                                        Jan 01, 2020 - loremipsum</span>
                                </div>
                            </div>
                            <p class="mb-4">Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                            <a href="single.html" class="blog-btn">Read More</a>
                        </div>
                    </div>
                </div>
                <!-- //blog grid -->
            </div>
        </div>
    </section>
    <!-- 12 -->
    <!-- <section class="brands">
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
    </section> -->
    <!-- 13 -->
    
    <!-- 描点 -->
 <div class="arr" >
        <a href="#arr" @click="arr">
            <img src="img/yanhua.png" alt="">
        </a>
    </div>
<myfonter></myfonter>
    </div>

</template>
<script>
import myhader from '../components/myHeader'
import  myfonter from '../components/myFonter'
export default {
  components:{
    myhader,myfonter
  },
  methods: {
   arr(){
     
   }
  },
}
</script>
<style  scoped>


.container {
  color: #fff;
}

.container .title .title-w3 {
  font-size: 42px;
  color: #343a40;
}

.container p.wstyles {
  max-width: 1000px;
  color: #999;
}

.container .button-style {
  padding: 12px 25px;
  border: none;
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 2px solid #00cec9;
  background: #00cec9;
}

.container a:hover {
  background: #ed1965;
  border-color: #ed1965;
  color: #fff;
  -webkit-transition: 0.5s all;
  transition: 0.5s all;
}

.container .carousel-item h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.1);
}

.middle1 {
  background: url(/img/bg.jpg) no-repeat center;
  background-size: cover;
  color: #fff;
}

.middle1 h4 {
  font-size: 5em;
  font-family: 'Arizonia', cursive;
  background: rgba(25, 24, 24, 0.37);
  text-align: center;
  padding: 30px 10px;
}

.middle1 h3 {
  font-size: 3em;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 1.4;
}

.serives-agile {
  background: url(/img/bg2.png) no-repeat top;
  background-size: contain;
}

.serives-agile .welcome-grid {
  -webkit-box-shadow: 0 20px 70px -20px rgba(0, 0, 0, 0.34);
          box-shadow: 0 20px 70px -20px rgba(0, 0, 0, 0.34);
}

.serives-agile .welcome-grid:hover {
  -webkit-transition: all .5s;
  transition: all .5s;
  -webkit-transform: translateY(-2%);
          transform: translateY(-2%);
}

.serives-agile .welcome-grid img {
  border-radius: 50%;
}

.serives-agile .welcome-grid img:hover {
  -webkit-animation: imgIcon 5s infinite;
          animation: imgIcon 5s infinite;
}

.serives-agile .welcome-grid h4 {
  color: #343a40;
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: 600;
}

.serives-agile .welcome-grid p {
  color: #343a40;
  font-size: 14px;
}

.arrw {
  width: 150px;
  height: 2px;
  background: #00cec9;
  text-align: center;
  margin: 20px auto;
  position: relative;
}

.arrw i {
  color: #00cec9;
  font-size: 24px;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: -12px;
  width: 30%;
  margin: 0 auto;
}

.arrw .fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.arrw .fa img:hover {
  -webkit-animation: huang 3s infinite;
          animation: huang 3s infinite;
}

.bg-colors {
  background: #00cec9;
}

.bg-colors h4 {
  letter-spacing: 1px;
  font-size: 30px;
  a-text-decoration: none;
  a-background: transparent;
}

.form-group button {
  background: #00cec9;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
  padding: 0;
  -webkit-transition: 0.5s all;
  transition: 0.5s all;
}

.form-group button:hover {
  background: #ed1965;
}

.about-w3sec {
  background: url(/img/k2.png) no-repeat top;
  background-size: contain;
}

.about-w3sec .evnt-grid {
  -webkit-transition: 0.5s all;
  transition: 0.5s all;
}

.about-w3sec .evnt-grid:hover {
  background: #fff;
  -webkit-box-shadow: 0px 6px 18px 5px rgba(0, 0, 0, 0.07);
          box-shadow: 0px 6px 18px 5px rgba(0, 0, 0, 0.07);
  -webkit-transition: 0.5s all;
  transition: 0.5s all;
}

.about-w3sec .evnt-grid img {
  border-radius: 50%;
}

.about-w3sec .evnt-grid .abt-block h3 {
  font-size: 27px;
  color: #333;
  letter-spacing: 1px;
}

.about-w3sec .evnt-grid .abt-block p {
  color: #999;
}

.about-w3sec .evnt-grid .abt-block .list-unstyled li {
  display: inline-block;
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 600;
  color: #000;
}

.about-w3sec .evnt-grid .abt-block .list-unstyled li span {
  display: -webkit-inline-box;
  width: 18px;
  height: 18px;
  background-size: cover;
  display: -webkit-inline-box;
}

.about-w3sec .evnt-grid .abt-block .list-unstyled li .fa-user-o {
  background: url(/img/renwu2.png) no-repeat center;
}

.about-w3sec .evnt-grid .abt-block .list-unstyled li .fa-clock-o {
  background: url(/img/shijian.png) no-repeat center;
}

.about-w3sec .evnt-grid .abt-block .list-unstyled li .fa-map-marker {
  background: url(/img/zu.png) no-repeat center;
}

.testimonials {
  background: url(/img/bg3.jpg) no-repeat center;
  background-size: cover;
}

.testimonials .title .title-w3 {
  color: #fff;
}

.testimonials .testi-sections .testimonials_grid {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
}

.testimonials .testi-sections .testimonials_grid .sub-test {
  color: #999;
}

.testimonials .testi-sections .testimonials_grid .sub-test span {
  background: url(/img/yinhao.png) no-repeat;
  background-size: cover;
  width: 18px;
  height: 18px;
  display: inline-block;
}

.testimonials .testi-sections .testimonials_grid .testi-img-res img {
  border-radius: 50%;
}

.testimonials .testi-sections .testimonials_grid .testi_grid h5 {
  color: #000;
}

.testimonials .testi-sections .testimonials_grid .testi_grid p {
  color: #999;
}

.blog_w3ls {
  background: url(/img/bg5.png) repeat top;
  background-size: contain;
}

.blog_w3ls .card-header {
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.blog_w3ls h5.card-title a,
.blog_w3ls h5.card-title {
  color: #000;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
}

.blog_w3ls h5.card-title a:hover,
.blog_w3ls h5.card-title:hover {
  background: transparent;
  text-decoration: none;
}

.blog_w3ls .blog_w3icon span {
  color: #777;
  text-transform: uppercase;
  font-size: 12px;
  word-spacing: 3px;
  letter-spacing: 1px;
}

.blog_w3ls p {
  color: #999;
}

.blog_w3ls a.blog-btn {
  font-size: 14px;
  letter-spacing: 1px;
  background: #ed1965;
  color: #fff;
  padding: 11px 20px;
  display: inline-block;
}

.blog_w3ls a.blog-btn:hover {
  background: #00cec9;
  text-decoration: none;
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
