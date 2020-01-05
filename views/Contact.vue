<template>
  <div>
 <myhader></myhader>
    	<!-- contact -->
	<section class="contact-wthree py-5" id="contact">
		<div class="container py-xl-5 py-lg-3">
			<div class="title text-center mb-sm-5 mb-4">
				<h3 class="title-w3 text-bl text-center font-weight-bold">Contact Us</h3>
				<div class="arrw">
					<i class="fa fa-glass" aria-hidden="true"></i>
				</div>
			</div>
			<div class="row pt-xl-4">
				<div class="col-lg-7">
					<div class="contact-form-wthreelayouts">
						<form action="#" method="post" class="register-wthree">
							<div class="form-group">
								<label>
									Your Name
								</label>
								<input class="form-control" type="text" placeholder="Johnson" name="name" required="">
							</div>
							<div class="form-group">
								<label>
									Mobile
								</label>
								<input class="form-control" type="text" placeholder="xxxx xxxxx" name="mobile" required="">
							</div>
							<div class="form-group">
								<label>
									Email
								</label>
								<input class="form-control" type="email" placeholder="example@email.com" name="email" required="">
							</div>
							<div class="form-group">
								<label>
									Your message
								</label>
								<textarea placeholder="Type your message here" name="message" class="form-control"></textarea>
							</div>
							<div class="form-group mt-4 mb-0">
								<button type="submit" class="btn btn-w3layouts w-100">Send</button>
							</div>
						</form>
					</div>
				</div>
				<div class="col-lg-5 text-center mt-lg-0 mt-5">
					<div class="row flex-column">
						<div class="contact-w3">
							<span class="fa fa-envelope-open  mb-3">     <img src="/img/renwu2.png" alt=""></span>
							<div class="d-flex flex-column">
								<a href="mailto:example@email.com" class="d-block">info@example1.com</a>
								<a href="mailto:example@email.com" class="my-2 d-block">info@example2.com</a>
								<a href="mailto:example@email.com">info@example3.com</a>
							</div>
						</div>
						<div class="contact-w3 my-4">
							<span class="fa fa-phone mb-3">
                     <img src="/img/renwu2.png" alt="">
              </span>
							<div class="d-flex flex-column">
								<p>+456 123 7890</p>
								<p class="my-1">+456 123 7890</p>
								<p>+856 123 7890</p>
							</div>
						</div>
						<div class="contact-w3">
							<span class="fa fa-home mb-3">     <img src="/img/renwu2.png" alt=""></span>
							<address>71 Pilgrim Avenue <br>44 Shirley Ave.<br> Goldfield Rd. Broome St, Newyork.</address>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
	<!-- //contact -->
	<!-- map -->
	<div class="map p-2">
     <img src="/img/renwu2.png" alt="">
	</div>
	<!-- //map -->
	<myfonter></myfonter>
  </div>
</template>
<script>
import myhader from '../components/myHeader'
import  myfonter from '../components/myFonter'
export default {
  components:{
    myhader,myfonter
  }
}
</script>


<style  scoped>
.contact-wthree {
    background: url(/img/bg5.png) repeat top;
    background-size: contain;
    -webkit-background-size: contain;
    -o-background-size: contain;
    -moz-background-size: contain;
    -ms-background-size: contain;
}

textarea {
    height: 200px;
    resize: none;
}

form.register-wthree .form-control {
    padding: 12px 20px;
    border: 1px solid #dbdde2;
    border-radius: 0;
    -webkit-box-shadow: 2px 8px 10px 0px rgba(50, 46, 46, 0.23);
    -moz-box-shadow: 2px 8px 10px 0px rgba(50, 46, 46, 0.23);
    box-shadow: 2px 8px 10px 0px rgba(50, 46, 46, 0.23);
    letter-spacing: 1px;
}

.contact-form-wthreelayouts {
    padding: 3em;
    background: #fffcfc;
    box-shadow: 0px 6px 18px 5px rgba(0, 0, 0, 0.07);
}

.map iframe {
    width: 100%;
    border: none;
    min-height: 450px;
}

.contact-w3 span {
    color: #ed1965;
    font-size: 1.2em;
    display: inline-block;
    vertical-align: middle;
    background: #fff;
    width: 50px;
    height: 50px;
    line-height: 50px;
    -webkit-box-shadow: 5px 10px 10px 0px rgba(216, 216, 216, 0.78);
    -moz-box-shadow: 5px 10px 10px 0px rgba(216, 216, 216, 0.78);
    box-shadow: 5px 10px 10px 0px rgba(216, 216, 216, 0.78);
    /* border-radius: 8% 37% 5% 26%; */
    /* border: 1px solid #fff; */
    text-align: center;
}

.contact-w3 {
    background: #fffcfc;
    padding: 2em 1em;
    box-shadow: 0 20px 70px -20px rgba(0, 0, 0, 0.34);
}

.contact-w3 a,
.contact-w3 address p,
.contact-w3 p {
    color: #000;
    font-size: 0.9em;
    letter-spacing: 0.5px;
}

h5.cont-form {
    margin: 1em 0;
    text-align: center;
    text-transform: capitalize;
    font-size: 1.7em;
    font-family: 'Lato', sans-serif;
    color: #0083ff;
    font-weight: 600;
}

.contact-w3 a,
.contact-w3 address p {
    color: #000;
    font-size: 0.9em;
    letter-spacing: 0.5px;
}

button.btn.btn-w3layouts {
    outline: none;
    padding: 11px 40px;
    font-size: 16px;
    color: #fff;
    background: #ed1965;
    border: none;
    letter-spacing: 1px;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
    transition: 0.5s all;
}
button.btn.btn-w3layouts:hover {
    background: #000;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
    transition: 0.5s all;
}

</style>