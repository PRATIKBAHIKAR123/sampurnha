
import Header from "./components/header";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="page-wrapper">
 	
    {/*  Preloader */}
    {/* <div className="preloader"></div> */}
 	

	
	{/* Banner Section*/}
	<section className="banner-section" id="home-banner">
		<div className="patern-layer-one" style={{backgroundImage: "url(images/background/banner-bg.png)"}}></div>
		<div className="bg-layer" style={{backgroundImage: "url(images/background/2.jpg)"}}></div>
		<div className="auto-container">
			<div className="row clearfix">
			
				{/*  Content Column */}
				<div className="content-column col-lg-7 col-md-12 col-sm-12">
					<div className="inner-column">
						<h1>Get connect to other. <br/> Just ask Topapp</h1>
						<div className="text">Access to opportunities for career advancement and <br/> professional growth relies heavily on connections.</div>
						<div className="newsletter-form">
							<form method="post" action="contact.html">
								<div className="form-group">
									<input type="email" name="email" defaultValue="" placeholder="Enter mail address" required/>
									<button type="submit" className="theme-btn btn-style-two"><span className="txt">Take free trial</span></button>
								</div>
							</form>
						</div>
						<div className="address">*We will give a trial download link to your mail address</div>
						{/* Video Box*/}
						<div className="video-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
							<figure className="video-image">
								<img src="/images/resource/video.jpg" alt=""/>
							</figure>
							<a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image overlay-box"><span className="fa fa-play"><i className="ripple"></i></span></a>
						</div>
					</div>
				</div>
				
				{/*  Carousel Column */}
				<div className="carousel-column col-lg-5 col-md-12 col-sm-12">
					<div className="inner-column">
						
						<div className="slider-outer">
				
							{/*  Custom Pager */}
							<div className="pager-box">
								<div className="inner-box">
									<div className="banner-pager clearfix" id="banner-pager">
									  <a className="pager one wow zoomIn" data-wow-delay="100ms" data-wow-duration="1500ms" data-slide-index="0" href=""><div className="image img-circle">1</div></a>
									  <a className="pager two wow zoomIn" data-wow-delay="200ms" data-wow-duration="1500ms" data-slide-index="1" href=""><div className="image img-circle">2</div></a>
									  <a className="pager three wow zoomIn" data-wow-delay="300ms" data-wow-duration="1500ms" data-slide-index="2" href=""><div className="image img-circle">3</div></a>
									</div>
								</div>
							</div>
						
							{/*  Column / Slides */}
							<div className="slides-box" style={{backgroundImage: "url(images/resource/mobile.png)"}}>
								<div className="inner-box">
									
									<div className="banner-slider">
									
										<div className="slide-item">
											<div className="image">
												<img src="/images/resource/search.png" alt="" />
											</div>
										</div>
										
										{/* <div className="slide-item">
											<div className="image">
												<img src="/images/resource/screenshot01.png" alt="" />
											</div>
										</div>
										
										<div className="slide-item">
											<div className="image">
												<img src="/images/resource/slider-05.png" alt="" />
											</div>
										</div> */}
										
									</div>
								</div>
								
								<div className="mobile-small-image">
									<img src="/images/resource/play.png" alt="" />
								</div>
								
								<div className="heart-image-icon">
									<img src="/images/icons/heart.png" alt="" />
								</div>
								
								<div className="plus-small-image">
									<img src="/images/icons/plus.png" alt="" />
								</div>
								
							</div>
								
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
	</section>
	{/* End Banner Section*/}

  {/*  Featured Section */}
	<section className="featured-section" id="featured">
		<div className="auto-container">
			<div className="row clearfix">
				
				{/*  Content Column */}
				<div className="content-column col-lg-5 col-md-12 col-sm-12">
					<div className="iner-column">
						<div className="sec-title">
							<div className="title"><span>Fe</span>atures</div>
							<h2>Learn the features of new Beautiful <span>lifest</span>y<span>le</span> app!</h2>
						</div>
						<div className="text">
							<p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's stan dard dummy text ever since the 1500s.</p>
							<p>The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts.</p>
						</div>
						<ul className="list-style-one">
							<li>Identfy the most trending sessions & exibitors.</li>
							<li>24 hours customer supports facilites.</li>
							<li>Take action to improve your event value.</li>
						</ul>
						<a href="#" className="theme-btn btn-style-three"><span className="txt">Contact Us</span></a>
					</div>
				</div>
				
				{/*  Blocks Column */}
				<div className="blocks-column col-lg-7 col-md-12 col-sm-12">
					<div className="inner-column">
						{/*  Cloud Icon */}
						<div className="cloud-icon">
							<img src="/images/icons/cloud-icon.png" alt="" />
						</div>
						<div className="row clearfix">
							
							{/*  Featured Block */}
							<div className="featured-block titlt col-lg-6 col-md-6 col-sm-12" data-tilt data-tilt-max="8">
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-writing"></span>
									</div>
									<h3>Easy to edit</h3>
									<div className="text">Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.</div>
								</div>
							</div>
							
							{/*  Featured Block */}
							<div className="featured-block titlt style-two col-lg-6 col-md-6 col-sm-12" data-tilt data-tilt-max="6">
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-protection-shield-with-a-check-mark"></span>
									</div>
									<h3>Full protection</h3>
									<div className="text">The app needs to be running in the background, as it tracks BLE regions. </div>
								</div>
							</div>
							
							{/*  Featured Block */}
							<div className="featured-block titlt style-three col-lg-6 col-md-6 col-sm-12" data-tilt data-tilt-max="10">
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-dashboard"></span>
									</div>
									<h3>Hi speedy app</h3>
									<div className="text">Speedy App provides instant information on thousands of hire and buy products.</div>
								</div>
							</div>
							
							{/*  Featured Block */}
							<div className="featured-block style-four col-lg-6 col-md-6 col-sm-12">
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-writing"></span>
									</div>
									<h3>Easy to edit</h3>
									<div className="text">Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.</div>
								</div>
							</div>
							
						</div>
						{/*  Side Image */}
						<div className="side-image">
							<img src="/images/resource/girl-icon.png" alt="" />
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
	</section>

  {/*  Steps Section */}
	<section className="steps-section">
		<div className="patern-layer-one" style={{backgroundImage: "url(images/background/pattern-2.png)"}}></div>
		<div className="patern-layer-two" style={{backgroundImage: "url(images/background/pattern-3.png)"}}></div>
		<div className="patern-layer-three" style={{backgroundImage: "url(images/background/pattern-4.png)"}}></div>
		<div className="auto-container">
			
			{/*  Carousel Wrapper */}
			<div id="steps-thumb" className="carousel slide carousel-thumbnails" data-ride="carousel">
				<div className="row clearfix">
				
					{/*  Carousel Column */}
					<div className="carousel-column col-lg-6 col-md-12 col-sm-12">
						{/*  Slides */}
						<div className="carousel-inner" role="listbox" style={{backgroundImage: "url(images/resource/mobile.png)"}}>
							<div className="slides">
							
								<div className="carousel-item active">
									<div className="content">
										<div className="image">
											<a href="images/resource/mokeup-1.jpg" data-fancybox="steps" data-caption="" className="image-link lightbox-image"><img src="/images/resource/mokeup-1.jpg" alt="" /></a>
										</div>
									</div>
								</div>
								
								<div className="carousel-item">
									<div className="content">
										<div className="image">
											<a href="images/resource/mokeup-2.jpg" data-fancybox="steps" data-caption="" className="image-link lightbox-image"><img src="/images/resource/mokeup-2.jpg" alt="" /></a>
										</div>
									</div>
								</div>
								
								<div className="carousel-item">
									<div className="content">
										<div className="image">
											<a href="images/resource/mokeup-3.jpg" data-fancybox="steps" data-caption="" className="image-link lightbox-image"><img src="/images/resource/mokeup-3.jpg" alt="" /></a>
										</div>
									</div>
								</div>
							
							</div>
						</div>
					</div>
					
					<div className="blocks-column col-lg-6 col-md-12 col-sm-12">
						<div className="inner-column">
						
							{/*  Sec Title */}
							<div className="sec-title style-two">
								<div className="title"><span>St</span>eps</div>
								<h2>We have some <span> eas</span>y <span>ste</span>p<span>s</span>! </h2>
							</div>
							
							{/*  Controls*/}
							<ul className="carousel-indicators">
								
								<li data-target="#steps-thumb" data-slide-to="0" className="tab-btn active wow" data-wow-delay="0ms" data-wow-duration="1500ms">
									<span className="number">1</span>
									<span className="icon"><i className="flaticon-logout"></i></span>
									<strong>Download as a free trial!</strong>
									Lorem Ipsum is simply dummy text of the printing setting industry. Lorem Ipsum has been industry's dard dummy text ever since the 1500s.
								</li>
								
								<li data-target="#steps-thumb" data-slide-to="1" className="tab-btn wow" data-wow-delay="0ms" data-wow-duration="1500ms">
									<span className="number">2</span>
									<span className="icon"><i className="flaticon-credit-card"></i></span>
									<strong>Login your account</strong>
									Lorem Ipsum is simply dummy text of the printing setting industry. Lorem Ipsum has been industry's dard dummy text ever since the 1500s.
								</li>
								
								<li data-target="#steps-thumb" data-slide-to="2" className="tab-btn wow" data-wow-delay="0ms" data-wow-duration="1500ms">
									<span className="number">3</span>
									<span className="icon"><i className="flaticon-gift"></i></span>
									<strong>Enjoy the app!</strong>
									Lorem Ipsum is simply dummy text of the printing setting industry. Lorem Ipsum has been industry's dard dummy text ever since the 1500s.
								</li>
								
							</ul>
						
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
	</section>

  {/*  Apps Section */}
	<section className="apps-section" id="how-works">
		<div className="auto-container">
		
			{/* <div className="ct-dot-animated">
				<div className="ct-dot-container">
					<div className="ct-dot-item">
						<span></span>
					</div>
					<div className="ct-dot-item">
						<span></span>
					</div>
					<div className="ct-dot-item">
						<span></span>
					</div>
					<div className="ct-dot-item">
						<span></span>
					</div>
					<div className="ct-dot-item">
						<span></span>
					</div>
					<div className="ct-dot-item">
						<span></span>
					</div>
				</div>
			</div> */}
		
			{/*  App Block */}
			<div className="app-block">
				<div className="inner-box">
					<div className="row clearfix">
					
						{/*  Image Column */}
						<div className="image-column col-lg-6 col-md-12 col-sm-12">
							<div className="inner-column wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
								<div className="image titlt" data-tilt data-tilt-max="8">
									<a href="images/resource/app-1.png" className="app-1 lightbox-image"><img src="/images/resource/dash-board.png" alt="" /></a>
								</div>
							</div>
						</div>
						
						{/*  Content Column */}
						<div className="content-column col-lg-6 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="icon-box">
									<span className="icon flaticon-settings"></span>
								</div>
								<h3>Easy to Manage Your All Data by This App!</h3>
								<div className="text">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry.</div>
								<a href="#" className="theme-btn btn-style-two"><span className="txt">Contact team</span></a>
							</div>
						</div>
					
					</div>
				</div>
			</div>
			{/*  End App Block */}
			
			{/*  App Block */}
			<div className="app-block style-two">
				<div className="inner-box">
					<div className="row clearfix">
					
						{/*  Content Column */}
						<div className="content-column col-lg-6 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="icon-box">
									<span className="icon flaticon-dashboard"></span>
								</div>
								<h3>Bug free responsive app with high performence speed!</h3>
								<div className="text">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry.</div>
								<a href="#" className="theme-btn btn-style-four"><span className="txt">Read more</span></a>
							</div>
						</div>
						
						{/*  Image Column */}
						<div className="image-column col-lg-6 col-md-12 col-sm-12">
							<div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
								<div className="image titlt" data-tilt data-tilt-max="8">
									<a href="images/resource/app-2.png" className="app-2 lightbox-image"><img src="/images/resource/app-2.png" alt="" /></a>
								</div>
								<div className="small-image titlt wow slideInRight" data-wow-delay="300ms" data-wow-duration="1500ms" data-tilt data-tilt-max="15">
									<a href="images/resource/app-3.png" className="app-2 lightbox-image"><img src="/images/resource/app-3.png" alt="" /></a>
								</div>
							</div>
						</div>
					
					</div>
				</div>
			</div>
			{/*  End App Block */}
			
		</div>
	</section>
  


  {/*  Counter Section */}
	<section className="counter-section">
		<div className="patern-layer-one" style={{backgroundImage: "url(images/background/pattern-5.png)"}}></div>
		<div className="patern-layer-two" style={{backgroundImage: "url(images/background/pattern-6.png)"}}></div>
		<div className="patern-layer-three" style={{backgroundImage: "url(images/background/pattern-7.png)"}}></div>
		<div className="patern-layer-four" style={{backgroundImage: "url(images/background/pattern-8.png)"}}></div>
		{/*  Flower Image */}
		<div className="flower-image">
			{/*  Image One */}
			<div className="image paroller" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60" data-paroller-type="foreground" data-paroller-direction="horizontal" style={{backgroundImage: "url(images/resource/flower.png)"}}></div>
		</div>
		<div className="auto-container">
			<div className="row clearfix">
				
				{/*  Content Column */}
				<div className="content-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="sec-title style-three">
							<div className="title"><span>Fu</span>nfacts</div>
							<h2>We have a g<span>reat funfact</span> which <br/> we want to show you!</h2>
						</div>
						<div className="text">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's stan dard dummy text ever since the 1500s.</div>
						<div className="download">Download a trial version to make life easy!</div>
						<div className="google-btns">
							<a href="#"><img src="/images/icons/google.png" alt="" /></a>
							<a href="#"><img src="/images/icons/app.png" alt="" /></a>
						</div>
					</div>
				</div>
				
				{/*  Counter Column */}
				<div className="counter-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						
						{/*  Fact Counter */}
						<div className="fact-counter">
							<div className="row clearfix">

								{/* Column*/}
								<div className="column counter-column col-lg-6 col-md-6 col-sm-12">
									<div className="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
										<div className="content">
											<div className="icon-box">
												<span className="icon flaticon-user"></span>
											</div>
											<div className="count-outer count-box">
												<span className="count-text" data-speed="2500" data-stop="1200">0</span>+
											</div>
											<h5 className="counter-title">Satisfied Clients</h5>
										</div>
									</div>
								</div>

								{/* Column*/}
								<div className="column counter-column col-lg-6 col-md-6 col-sm-12">
									<div className="inner wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
										<div className="content">
											<div className="icon-box">
												<span className="icon flaticon-cube"></span>
											</div>
											<div className="count-outer count-box alternate">
												<span className="count-text" data-speed="3000" data-stop="850">0</span>+
											</div>
											<h5 className="counter-title">Agents Team</h5>
										</div>
									</div>
								</div>

								{/* Column*/}
								<div className="column counter-column col-lg-6 col-md-6 col-sm-12">
									<div className="inner wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
										<div className="content">
											<div className="icon-box">
												<span className="icon flaticon-followers"></span>
											</div>
											<div className="count-outer count-box">
												<span className="count-text" data-speed="3000" data-stop="154">0</span>+
											</div>
											<h5 className="counter-title">Success Mission</h5>
										</div>
									</div>
								</div>
								
								{/* Column*/}
								<div className="column counter-column col-lg-6 col-md-6 col-sm-12">
									<div className="inner wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
										<div className="content">
											<div className="icon-box">
												<span className="icon flaticon-heart"></span>
											</div>
											<div className="count-outer count-box">
												<span className="count-text" data-speed="2500" data-stop="1360">0</span>+
											</div>
											<h5 className="counter-title">Awards</h5>
										</div>
									</div>
								</div>

							</div>
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
	</section>

{/*  Testimonials Section */}
	<section className="testimonials-thumbs-carousel">
		<div className="auto-container">
			
			{/*  Carousel Wrapper */}
			<div id="carousel-thumb" className="carousel slide carousel-thumbnails" data-ride="carousel">
				<div className="row clearfix">
				
					<div className="pagers-column col-lg-6 col-md-12 col-sm-12">
						<div className="pattern-layer" style={{backgroundImage: "url(images/background/pattern-9.png)"}}></div>
						{/*  Controls*/}
						<ol className="carousel-indicators">
							<li data-target="#carousel-thumb" data-slide-to="0" className="active"> <div className="image img-circle"><img src="/images/resource/author-thumb-1.jpg" alt="" /></div></li>
							<li data-target="#carousel-thumb" data-slide-to="1"><div className="image img-circle"><img src="/images/resource/author-thumb-2.jpg" alt="" /></div></li>
							<li data-target="#carousel-thumb" data-slide-to="2"><div className="image img-circle"><img src="/images/resource/author-thumb-3.jpg" alt="" /></div></li>
							<li data-target="#carousel-thumb" data-slide-to="3"><div className="image img-circle"><img src="/images/resource/author-thumb-4.jpg" alt="" /></div></li>
							<li data-target="#carousel-thumb" data-slide-to="4"><div className="image img-circle"><img src="/images/resource/author-thumb-5.jpg" alt="" /></div></li>
							<li data-target="#carousel-thumb" data-slide-to="5"><div className="image img-circle"><img src="/images/resource/author-thumb-6.jpg" alt="" /></div></li>
							<li data-target="#carousel-thumb" data-slide-to="6"><div className="image img-circle"><img src="/images/resource/author-thumb-7.jpg" alt="" /></div></li>
						</ol>
					</div>
				
					<div className="carousel-column col-lg-6 col-md-12 col-sm-12">
						<div className="sec-title style-four">
							<div className="title"><span>Te</span>stimonials</div>
							<h2>Clients choice us because our app<span>lication is the best!</span></h2>
						</div>
						{/*  Slides */}
						<div className="carousel-inner" role="listbox">
						
							<div className="carousel-item active">
								<div className="testimonial-block">
									<div className="inner-box">
										<div className="author-image">
											<span className="social-icon fa fa-facebook-square"></span>
											<img src="/images/resource/author-thumb-1.jpg" alt="" />
										</div>
										<div className="quote-icon icons-right-quote-sign"></div>
										<div className="slide-text">“ Lorem Ipsum is simply dummy text of the printing and type <br/> setting industry. Lorem Ipsum has been the industry's stan  <br/> dard dummy text ever since. ”</div>
										<div className="slide-info">
											<h4 className="author-title">Kathleen Smith</h4>
											<div className="designation">Senior Director</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="carousel-item">
								<div className="testimonial-block">
									<div className="inner-box">
										<div className="author-image">
											<span className="social-icon fa fa-facebook-square"></span>
											<img src="/images/resource/author-thumb-2.jpg" alt="" />
										</div>
										<div className="quote-icon icons-right-quote-sign"></div>
										<div className="slide-text">“ Lorem Ipsum is simply dummy text of the printing and type <br/> setting industry. Lorem Ipsum has been the industry's stan  <br/> dard dummy text ever since. ”</div>
										<div className="slide-info">
											<h4 className="author-title">Kathleen Smith</h4>
											<div className="designation">Senior Director</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="carousel-item">
								<div className="testimonial-block">
									<div className="inner-box">
										<div className="author-image">
											<span className="social-icon fa fa-facebook-square"></span>
											<img src="/images/resource/author-thumb-3.jpg" alt="" />
										</div>
										<div className="quote-icon icons-right-quote-sign"></div>
										<div className="slide-text">“ Lorem Ipsum is simply dummy text of the printing and type <br/> setting industry. Lorem Ipsum has been the industry's stan  <br/> dard dummy text ever since. ”</div>
										<div className="slide-info">
											<h4 className="author-title">Kathleen Smith</h4>
											<div className="designation">Senior Director</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="carousel-item">
								<div className="testimonial-block">
									<div className="inner-box">
										<div className="author-image">
											<span className="social-icon fa fa-facebook-square"></span>
											<img src="/images/resource/author-thumb-4.jpg" alt="" />
										</div>
										<div className="quote-icon icons-right-quote-sign"></div>
										<div className="slide-text">“ Lorem Ipsum is simply dummy text of the printing and type <br/> setting industry. Lorem Ipsum has been the industry's stan  <br/> dard dummy text ever since. ”</div>
										<div className="slide-info">
											<h4 className="author-title">Kathleen Smith</h4>
											<div className="designation">Senior Director</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="carousel-item">
								<div className="testimonial-block">
									<div className="inner-box">
										<div className="author-image">
											<span className="social-icon fa fa-facebook-square"></span>
											<img src="/images/resource/author-thumb-5.jpg" alt="" />
										</div>
										<div className="quote-icon icons-right-quote-sign"></div>
										<div className="slide-text">“ Lorem Ipsum is simply dummy text of the printing and type <br/> setting industry. Lorem Ipsum has been the industry's stan  <br/> dard dummy text ever since. ”</div>
										<div className="slide-info">
											<h4 className="author-title">Kathleen Smith</h4>
											<div className="designation">Senior Director</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="carousel-item">
								<div className="testimonial-block">
									<div className="inner-box">
										<div className="author-image">
											<span className="social-icon fa fa-facebook-square"></span>
											<img src="/images/resource/author-thumb-6.jpg" alt="" />
										</div>
										<div className="quote-icon icons-right-quote-sign"></div>
										<div className="slide-text">“ Lorem Ipsum is simply dummy text of the printing and type <br/> setting industry. Lorem Ipsum has been the industry's stan  <br/> dard dummy text ever since. ”</div>
										<div className="slide-info">
											<h4 className="author-title">Kathleen Smith</h4>
											<div className="designation">Senior Director</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="carousel-item">
								<div className="testimonial-block">
									<div className="inner-box">
										<div className="author-image">
											<span className="social-icon fa fa-facebook-square"></span>
											<img src="/images/resource/author-thumb-7.jpg" alt="" />
										</div>
										<div className="quote-icon icons-right-quote-sign"></div>
										<div className="slide-text">“ Lorem Ipsum is simply dummy text of the printing and type <br/> setting industry. Lorem Ipsum has been the industry's stan  <br/> dard dummy text ever since. ”</div>
										<div className="slide-info">
											<h4 className="author-title">Kathleen Smith</h4>
											<div className="designation">Senior Director</div>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						{/*  Slides */}
						
						{/*  Controls */}
						<a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
						
					</div>
					
				</div>
			</div>
			    
        </div>
    </section>
	

  {/*  Screenshots Section */}
	<section className="screenshots-section">
		<div className="auto-container">
			<div className="sec-title centered style-two">
				<div className="title"><span>Ap</span>p Screenshots</div>
				<h2>App screenshots will be <span>im</span>p<span>ortant</span> <br/> to know properly the app! lifestyle app!</h2>
			</div>
			
			<div className="row appScreenshotCarousel-container swiper-container">
				<div className="screen-mobile-image"></div>
				<div className="swiper-wrapper">
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-01.jpg)"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-02.png)"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-03.png)"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-04.png)"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-05.png)"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-02.png)"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-01.jpg)"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-02.png)"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-03.png)"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-04.png)"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(images/resource/slider-05.png)"}}></div>
				</div>
				{/*  Add Arrows */}
			</div>
			{/*  Navigations */}
            <div className="banner-navigation">
                <div className="swiper-button-prev"><i className="fa fa-angle-left" aria-hidden="true"></i></div>
				<div className="swiper-button-next"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
            </div>
		</div>
	</section>
	
  {/*  Integration Section */}
	<section className="integration-section">
		<div className="patern-layer-one" style={{backgroundImage: "url(images/background/pattern-5.png)"}}></div>
		<div className="patern-layer-two" style={{backgroundImage: "url(images/background/pattern-6.png)"}}></div>
		<div className="patern-layer-three" style={{backgroundImage: "url(images/background/pattern-10.png)"}}></div>
		<div className="patern-layer-four" style={{backgroundImage: "url(images/background/pattern-11.png)"}}></div>
		<div className="auto-container">
			<div className="sec-title centered">
				<div className="title"><span>In</span>tegrations</div>
				<h2>We use some plugins to do premium <br/> quality <span>inte</span>g<span>rations</span></h2>
			</div>
		</div>
		
		{/*  Outer Container */}
		<div className="outer-container">
			
			<div className="bubbles-wrapper">
				<div className="animations m-0">
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
						<img src="/images/resource/Integrations-1.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">HTML-5</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
						<img src="/images/resource/Integrations-2.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Envato</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
						<img src="/images/resource/Integrations-3.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Elementor</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
						<img src="/images/resource/Integrations-4.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Fingerprint</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
						<img src="/images/resource/Integrations-5.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Amplify</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
						<img src="/images/resource/Integrations-6.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Firebase Integration</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
						<img src="/images/resource/Integrations-7.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Google-Plus</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
						<img src="/images/resource/Integrations-8.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Jio Tv</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
						<img src="/images/resource/Integrations-9.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Paypal</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
						<img src="/images/resource/Integrations-10.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Stripe</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
						<img src="/images/resource/Integrations-11.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Goola Map</span>
					</div>
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
						<img src="/images/resource/Integrations-12.jpg" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">Microsoft</span>
					</div>
				</div>
			</div>
			
		</div>
		
		<div className="btn-box text-center">
			<a href="#" className="theme-btn btn-style-five"><span className="txt">All Integretions</span></a>
		</div>
		
	</section>

	{/*  Pricing Section */}
	<section className="pricing-section" id="pricing">
		<div className="auto-container">
			<div className="sec-title centered style-three">
				<div className="title"><span>pr</span>icing</div>
				<h2>We have offered the <span>best </span>p<span>ricing</span> <br/> to make life easier!</h2>
			</div>
			
			<div className="pricing-tabs tabs-box">
                    
				{/*  Title Column */}
				<div className="title-column">
					
					{/*  Tab Btns */}
					<ul className="tab-buttons clearfix">
						<li data-tab="#prod-monthly" className="tab-btn monthly active-btn">Monthly</li>
						<li className="boll"><span className="round"></span></li>
						<li data-tab="#prod-yearly" className="tab-btn yearly">Yearly</li>
					</ul>						
					
				</div>
				
				{/* Tabs Container*/}
				<div className="tabs-content">
					
					<div className="patern-layer-three paroller" data-paroller-factor="0.30" data-paroller-factor-lg="0.60" data-paroller-type="foreground" data-paroller-direction="horizontal" style={{backgroundImage: "url(images/icons/pattern-19.png)"}}></div>
					<div className="patern-layer-four paroller" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60" data-paroller-type="foreground" data-paroller-direction="horizontal" style={{backgroundImage: "url(images/icons/pattern-20.png)"}}></div>
					
					{/* Tab*/}
					<div className="tab active-tab" id="prod-monthly">
						<div className="content">
							<div className="row clearfix">
								
								{/*  Price Block */}
								<div className="price-block col-lg-4 col-md-6 col-sm-12">
									<div className="inner-box">
										<div className="patern-layer-two" style={{backgroundImage: "url(images/icons/pattern-18.png)"}}></div>
										<div className="patern-layer-one" style={{backgroundImage: "url(images/icons/pattern-17.png)"}}></div>
										<div className="upper-box">
											<div className="icon-box">
												<span className="icon flaticon-paper-plane"></span>
											</div>
											<div className="title">Premeum</div>
											<h3>$39.99</h3>
										</div>
										<div className="middle-box">
											<div className="price-title">unLimited access</div>
											<ul className="price-list">
												<li><i className="fa fa-remove"></i>100 MB Disk Space</li>
												<li><i className="fa fa-check"></i>2 Subdo mains dolor</li>
												<li><i className="fa fa-remove"></i>5 Email Accounts</li>
												<li><i className="fa fa-remove"></i>No License</li>
												<li><i className="fa fa-check"></i>Phone & Mail Support</li>
											</ul>
										</div>
										<div className="lower-box">
											<a href="#" className="theme-btn plan-btn">choose plan</a>
											<a href="#" className="trial">Get a free trial now!</a>
										</div>
									</div>
								</div>
								
								{/*  Price Block */}
								<div className="price-block col-lg-4 col-md-6 col-sm-12">
									<div className="inner-box">
										<div className="patern-layer-two" style={{backgroundImage: "url(images/icons/pattern-18.png)"}}></div>
										<div className="patern-layer-one" style={{backgroundImage: "url(images/icons/pattern-17.png)"}}></div>
										<div className="upper-box">
											<div className="icon-box">
												<span className="icon flaticon-plane"></span>
											</div>
											<div className="title">Standrad</div>
											<h3>$59.99</h3>
										</div>
										<div className="middle-box">
											<div className="price-title">Limited access</div>
											<ul className="price-list">
												<li><i className="fa fa-remove"></i>100 MB Disk Space</li>
												<li><i className="fa fa-check"></i>2 Subdo mains dolor</li>
												<li><i className="fa fa-remove"></i>5 Email Accounts</li>
												<li><i className="fa fa-remove"></i>No License</li>
												<li><i className="fa fa-check"></i>Phone & Mail Support</li>
											</ul>
										</div>
										<div className="lower-box">
											<a href="#" className="theme-btn plan-btn">choose plan</a>
											<a href="#" className="trial">Get a free trial now!</a>
										</div>
									</div>
								</div>
								
								{/*  Price Block */}
								<div className="price-block col-lg-4 col-md-6 col-sm-12">
									<div className="inner-box">
										<div className="patern-layer-two" style={{backgroundImage: "url(images/icons/pattern-18.png)"}}></div>
										<div className="patern-layer-one" style={{backgroundImage: "url(images/icons/pattern-17.png)"}}></div>
										<div className="upper-box">
											<div className="icon-box">
												<span className="icon icons-rocket-ship"></span>
											</div>
											<div className="title">Premeum</div>
											<h3>$89.99</h3>
										</div>
										<div className="middle-box">
											<div className="price-title">unLimited access</div>
											<ul className="price-list">
												<li><i className="fa fa-remove"></i>100 MB Disk Space</li>
												<li><i className="fa fa-check"></i>2 Subdo mains dolor</li>
												<li><i className="fa fa-remove"></i>5 Email Accounts</li>
												<li><i className="fa fa-remove"></i>No License</li>
												<li><i className="fa fa-check"></i>Phone & Mail Support</li>
											</ul>
										</div>
										<div className="lower-box">
											<a href="#" className="theme-btn plan-btn">choose plan</a>
											<a href="#" className="trial">Get a free trial now!</a>
										</div>
									</div>
								</div>
								
							</div>
							
							{/*  Guarantee */}
							<div className="guarantee"><span className="circle"></span>30 days money back guarantee!</div>
						
						</div>
					</div>
					
					{/* Tab*/}
					<div className="tab" id="prod-yearly">
						<div className="content">
							<div className="row clearfix">
							
								{/*  Price Block */}
								<div className="price-block col-lg-4 col-md-6 col-sm-12">
									<div className="inner-box">
										<div className="patern-layer-two" style={{backgroundImage: "url(images/icons/pattern-18.png)"}}></div>
										<div className="patern-layer-one" style={{backgroundImage: "url(images/icons/pattern-17.png)"}}></div>
										<div className="upper-box">
											<div className="icon-box">
												<span className="icon flaticon-paper-plane"></span>
											</div>
											<div className="title">Premeum</div>
											<h3>$99.99</h3>
										</div>
										<div className="middle-box">
											<div className="price-title">unLimited access</div>
											<ul className="price-list">
												<li><i className="fa fa-remove"></i>100 MB Disk Space</li>
												<li><i className="fa fa-check"></i>2 Subdo mains dolor</li>
												<li><i className="fa fa-remove"></i>5 Email Accounts</li>
												<li><i className="fa fa-remove"></i>No License</li>
												<li><i className="fa fa-check"></i>Phone & Mail Support</li>
											</ul>
										</div>
										<div className="lower-box">
											<a href="#" className="theme-btn plan-btn">choose plan</a>
											<a href="#" className="trial">Get a free trial now!</a>
										</div>
									</div>
								</div>
								
								{/*  Price Block */}
								<div className="price-block col-lg-4 col-md-6 col-sm-12">
									<div className="inner-box">
										<div className="patern-layer-two" style={{backgroundImage: "url(images/icons/pattern-18.png)"}}></div>
										<div className="patern-layer-one" style={{backgroundImage: "url(images/icons/pattern-17.png)"}}></div>
										<div className="upper-box">
											<div className="icon-box">
												<span className="icon flaticon-plane"></span>
											</div>
											<div className="title">Standrad</div>
											<h3>$149.99</h3>
										</div>
										<div className="middle-box">
											<div className="price-title">Limited access</div>
											<ul className="price-list">
												<li><i className="fa fa-remove"></i>100 MB Disk Space</li>
												<li><i className="fa fa-check"></i>2 Subdo mains dolor</li>
												<li><i className="fa fa-remove"></i>5 Email Accounts</li>
												<li><i className="fa fa-remove"></i>No License</li>
												<li><i className="fa fa-check"></i>Phone & Mail Support</li>
											</ul>
										</div>
										<div className="lower-box">
											<a href="#" className="theme-btn plan-btn">choose plan</a>
											<a href="#" className="trial">Get a free trial now!</a>
										</div>
									</div>
								</div>
								
								{/*  Price Block */}
								<div className="price-block col-lg-4 col-md-6 col-sm-12">
									<div className="inner-box">
										<div className="patern-layer-two" style={{backgroundImage: "url(images/icons/pattern-18.png)"}}></div>
										<div className="patern-layer-one" style={{backgroundImage: "url(images/icons/pattern-17.png)"}}></div>
										<div className="upper-box">
											<div className="icon-box">
												<span className="icon icons-rocket-ship"></span>
											</div>
											<div className="title">Premeum</div>
											<h3>$199.99</h3>
										</div>
										<div className="middle-box">
											<div className="price-title">unLimited access</div>
											<ul className="price-list">
												<li><i className="fa fa-remove"></i>100 MB Disk Space</li>
												<li><i className="fa fa-check"></i>2 Subdo mains dolor</li>
												<li><i className="fa fa-remove"></i>5 Email Accounts</li>
												<li><i className="fa fa-remove"></i>No License</li>
												<li><i className="fa fa-check"></i>Phone & Mail Support</li>
											</ul>
										</div>
										<div className="lower-box">
											<a href="#" className="theme-btn plan-btn">choose plan</a>
											<a href="#" className="trial">Get a free trial now!</a>
										</div>
									</div>
								</div>
							
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
	</section>

	{/*  Faq Section */}
	<section className="faq-section1">
		<div className="auto-container">
			<div className="sec-title centered style-four">
				<div className="title"><span>FA</span>Q</div>
				<h2>Learn about new features from <br/> <span>fre</span>q<span>uentl</span>y asked question</h2>
			</div>
			<div className="inner-container1">
				<div className="row clearfix">
				
					{/*  Faq Column */}
					<div className="faq-column1 col-lg-6 col-md-12 col-sm-12">
						<h3>What should I include in App?</h3>
						<div className="text">Lorem ipsum dolor sit amet consecte tur adipiscing elit sed <a href="#">eiusmod tempor incididunt</a> ut labore.</div>
					</div>
					
					{/*  Faq Column */}
					<div className="faq-column1 col-lg-6 col-md-12 col-sm-12">
						<h3>Can users choose to install the app?</h3>
						<div className="text">We’re a company built on open source. It all began with Ionic Framework - the world's most popular open source for building cross-platform mobile and Progressive Web Apps.</div>
					</div>
					
					{/*  Faq Column */}
					<div className="faq-column1 col-lg-6 col-md-12 col-sm-12">
						<h3>How does the Moodle app work?</h3>
						<div className="text">The apps you build with Ionic leverage the power and stability of the open web - the most time-tested universal runtime in the world. The web has been around over two decades.</div>
					</div>
					
					{/*  Faq Column */}
					<div className="faq-column1 col-lg-6 col-md-12 col-sm-12">
						<h3>How do I disable installed apps?</h3>
						<div className="text">Lorem ipsum dolor sit amet consecte tur adipiscing elit sed do eiusmod tempor incididunt ut labore.</div>
					</div>
					
					{/*  Faq Column */}
					<div className="faq-column1 col-lg-6 col-md-12 col-sm-12">
						<h3>Does disabling apps free up space?</h3>
						<div className="text">Lorem ipsum dolor sit amet consecte tur adipiscing elit sed <a href="#">eiusmod tempor incididunt</a> ut labore.</div>
					</div>
					
					{/*  Faq Column */}
					<div className="faq-column1 col-lg-6 col-md-12 col-sm-12">
						<h3>Why are mobile apps important?</h3>
						<div className="text">Lorem ipsum dolor sit amet consecte tur adipiscing elit sed do <a href="#">eiusmod tempor incididunt</a> ut labore.</div>
					</div>
					
				</div>
				{/*  Question */}
				<div className="question">Still have a question? <a href="#">Contact us:</a> <strong>topapp@info.com</strong></div>
				
			</div>
		</div>
	</section>

	{/*  Blog Section */}
	<section className="blog-section" id="blog">
		<div className="auto-container">
			{/*  Sec Title */}
			<div className="sec-title style-two">
				<div className="clearfix">
					<div className="pull-left">
						<div className="title"><span>Bl</span>og</div>
						<h2>We want to <span>share our</span> succes <br/> by our latest blog.</h2>
					</div>
					<div className="pull-right">
						<div className="text">Lorem Ipsum is simply dummy text of the printing and type <br/> setting industry. Lorem Ipsum has been the industry's stan <br/> dard dummy text ever since the 1500s.</div>
					</div>
				</div>
			</div>
			<div className="row clearfix">
				
				{/*  News Block */}
				<div className="news-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="image">
							<a href="#"><img src="/images/resource/news-1.png" alt="" /></a>
						</div>
						<div className="lower-content">
							<ul className="post-meta">
								<li><span className="icon icons-calendar-2"></span>September 12, 2020</li>
								<li><span className="icon icons-user-4"></span>Admin</li>
							</ul>
							<h3><a href="#">Organisationaly teams are just like families.</a></h3>
							<div className="text">Lorem Ipsum is simply dummy text the printing and setting industry. Lorm Ipsum has been the industry's stanard dummy text ever.</div>
						</div>
					</div>
				</div>
				
				{/*  News Block */}
				<div className="news-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="image">
							<a href="#"><img src="/images/resource/news-2.png" alt="" /></a>
						</div>
						<div className="lower-content">
							<ul className="post-meta">
								<li><span className="icon icons-calendar-2"></span>September 12, 2020</li>
								<li><span className="icon icons-user-4"></span>Admin</li>
							</ul>
							<h3><a href="#">Revitalising your people in a retail downturn...</a></h3>
							<div className="text">Lorem Ipsum is simply dummy text the printing and setting industry. Lorm Ipsum has been the industry's stanard dummy text ever.</div>
						</div>
					</div>
				</div>
				
				{/*  News Block */}
				<div className="news-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="image">
							<a href="#"><img src="/images/resource/news-3.png" alt="" /></a>
						</div>
						<div className="lower-content">
							<ul className="post-meta">
								<li><span className="icon icons-calendar-2"></span>September 12, 2020</li>
								<li><span className="icon icons-user-4"></span>Admin</li>
							</ul>
							<h3><a href="#">Regional Managers time management.</a></h3>
							<div className="text">Lorem Ipsum is simply dummy text the printing and setting industry. Lorm Ipsum has been the industry's stanard dummy text ever.</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>

	{/*  Contact Section */}
	<section className="contact-section" id="contact">
		<div className="auto-container">
			<div className="row clearfix">
				
				{/*  Info Column */}
				<div className="info-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="patern-layer-one" style={{backgroundImage: "url(images/background/pattern-12.png)"}}></div>
						<div className="patern-layer-two" style={{backgroundImage: "url(images/background/pattern-13.png)"}}></div>
						<div className="patern-layer-three paroller" data-paroller-factor="-0.10" data-paroller-factor-lg="0.08" data-paroller-type="foreground" data-paroller-direction="horizontal" style={{backgroundImage: "url(images/background/pattern-14.png)"}}></div>
						<ul className="info-list">
							<li>
								<span className="icon flaticon-address"></span>
								<strong>Our head office address:</strong>
								3556 Hartford Way Vlg, Mount Pleasant, SC, <br/> 29466, Australia.
							</li>
							<li>
								<span className="icon flaticon-telephone"></span>
								<strong>Call for help:</strong>
								<a href="tel:734-697-2907">(734) 697-2907</a><br/>
								<a href="tel:843-971-1906">(843) 971-1906</a>
							</li>
							<li>
								<span className="icon flaticon-invite"></span>
								<strong>Mail us:</strong>
								<a className="mailto:noreply@envato.com" href="#">noreply@envato.com</a><br/>
								<a className="mailto:noreply@envato.com" href="#">noreply@topapp.com</a>
							</li>
						</ul>
					</div>
				</div>
				
				{/*  Form Column */}
				<div className="form-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="sec-title style-three">
							<div className="title"><span>Co</span>ntact</div>
							<h2>Contact with our support <br/> during <span>emer</span>g<span>enc</span>y!</h2>
						</div>
						
						{/*  Default Form */}
						<div className="default-form">
							<form method="post" action="sendemail.php" id="contact-form">
								<div className="row clearfix">
									
									<div className="col-lg-6 col-md-6 col-sm-12 form-group">
										<input type="text" name="username" placeholder="Full Name *" required/>
									</div>
									
									<div className="col-lg-6 col-md-6 col-sm-12 form-group">
										<input type="text" name="lastname" placeholder="Last Name *" required/>
									</div>
									
									<div className="col-lg-6 col-md-6 col-sm-12 form-group">
										<input type="email" name="email" placeholder="Your mail *" required/>
									</div>
									
									<div className="col-lg-6 col-md-6 col-sm-12 form-group">
										<input type="text" name="phone" placeholder="Phone number *" required/>
									</div>
									
									<div className="col-lg-12 col-md-12 col-sm-12 form-group">
										<textarea name="message" placeholder="Message..."></textarea>
									</div>
								
									<div className="col-lg-12 col-md-12 col-sm-12 form-group">
										<button className="theme-btn submit-btn" type="submit" name="submit-form"><span className="txt"> <i className="fa fa-arrow-circle-right"></i> &nbsp; Send now</span></button>
									</div>
									
								</div>
							</form>
								
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
	</section>
	{/*  Subscribe Section */}
	<section className="subscribe-section">
		<div className="patern-layer-one" style={{backgroundImage: "url(images/background/pattern-15.png)"}}></div>
		<div className="auto-container">
			<div className="sec-title centered style-four">
				<div className="title"><span>Su</span>bscription</div>
				<h2>Always know what’s happening in the <br/> world of applications. Recieve all <br/> latest p<span>ost in</span> y<span>our inbox.</span></h2>
			</div>
			
			<div className="subscribe-form">
				<form method="post" action="contact.html">
					<div className="form-group">
						<input type="email" name="email" defaultValue="" placeholder="your mail address..." required/>
						<button type="submit" className="theme-btn btn-style-two">Subscrib now</button>
					</div>
				</form>
			</div>
			<div className="email">* Your mail address will be fully secure . We don’t share!</div>
		</div>
	</section>
  {/*  Main Footer */}
    <footer className="main-footer">
    	<div className="auto-container">
        	{/* Widgets Section*/}
            <div className="widgets-section">
            	<div className="row clearfix">
                	
                    {/*  Footer Column */}
					<div className="footer-column col-lg-4 col-md-6 col-sm-12">
						<div className="footer-widget logo-widget">
							<div className="logo">
								<a href="#"><img src="/images/SAMPURNHA SOFTWARE.png" alt="" title=""/></a>
							</div>
							<div className="text">Lorem Ipsum is simply dummy text <br/> of the printing and type.</div>
							<div className="paypall">
								<a href="#"><img src="/images/icons/paypall.png" alt="" /></a>
							</div>
						</div>
					</div>
							
					{/*  Footer Column */}
					<div className="footer-column col-lg-4 col-md-6 col-sm-12">
						<div className="footer-widget links-widget">
							<div className="row clearfix">
								<div className="column col-lg-6 col-md-6 col-xs-12">
									<ul>
										<li><a href="#">Home</a></li>
										<li><a href="#">Services</a></li>
										<li><a href="#">About us</a></li>
										<li><a href="#">Testimonials</a></li>
										<li><a href="#">News</a></li>
									</ul>
								</div>
								<div className="column col-lg-6 col-md-6 col-xs-12">
									<ul>
										<li><a href="#">Team</a></li>
										<li><a href="#">FAQ</a></li>
										<li><a href="#">Gallery</a></li>
										<li><a href="#">Contact</a></li>
										<li><a href="#">Portfolio</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					{/*  Footer Column */}
					<div className="footer-column col-lg-4 col-md-6 col-sm-12">
						<div className="footer-widget email-widget">
							<div className="text">Send us a newsletter to get update</div>
							{/*  Newsletter Form */}
							<div className="newsletter-form-two">
								<form method="post" action="contact.html">
									<div className="form-group">
										<input type="email" name="email" defaultValue="" placeholder="Your mail address" required/>
										<button type="submit" className="theme-btn submit-btn"><span className="icon flaticon-paper-plane"></span></button>
									</div>
								</form>
							</div>
							<div className="btns">
								<a href="#"><img src="/images/icons/app-1.png" alt="" /></a>
								<a href="#"><img src="/images/icons/google-1.png" alt="" /></a>
							</div>
							<ul className="social-icon-one">
								<li className="facebook"><a href="#"><span className="fa fa-facebook"></span></a></li>
								<li className="twitter"><a href="#"><span className="fa fa-twitter"></span></a></li>
								<li className="dribbble"><a href="#"><span className="fa fa-dribbble"></span></a></li>
								<li className="behance"><a href="#"><span className="fa fa-behance"></span></a></li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		
			<div className="footer-bottom">
				<div className="clearfix">
					<div className="pull-left">
						<div className="copyright">&copy; 2020 Themexriver</div>
					</div>
					<div className="pull-right">
						<ul className="footer-nav">
							<li><a href="#">Help</a></li>
							<li><a href="#">Terms & Conditions</a></li>
							<li><a href="#">Privacy</a></li>
						</ul>
					</div>
				</div>
			</div>
		
		</div>
	</footer>
	{/*  End Main Footer */}
	
</div>
</>
  );
}
