
'use client';

import { useEffect, useRef } from "react";
import Script from "next/script";
import Header from "./components/header";

export default function Home() {
  const swiperInitialized = useRef(false);

  const initSwiper = () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.Swiper && !swiperInitialized.current) {
      // @ts-ignore
      new window.Swiper('.appScreenshotCarousel-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: 3000,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        coverflow: {
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
        breakpoints: {
          1024: {
            slidesPerView: 'auto'
          },
          768: {
            slidesPerView: 'auto'
          },
          640: {
            slidesPerView: 'auto'
          }
        }
      });
      swiperInitialized.current = true;
    }
  };

  useEffect(() => {
    initSwiper();
  }, []);

  return (
    <>
    <Script src="/js/swiper.min.js" onLoad={initSwiper} />
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
    <h1>
      Smart Software Solutions <br /> for Growing Businesses
    </h1>

    <div className="text">
      We build powerful ERP, CRM, E-Commerce, POS & HRMS solutions
      <br />
      that streamline operations and accelerate business growth.
    </div>

    <div className="newsletter-form">
      <form method="post" action="contact.html">
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your business email"
            required
          />
          <button type="submit" className="theme-btn btn-style-two">
            <span className="txt">Get Free Consultation</span>
          </button>
        </div>
      </form>
    </div>

    <div className="address">
      *Our team will contact you with a personalized demo & solution roadmap
    </div>

    {/* Video Box */}
    <div
      className="video-box wow fadeInRight"
      data-wow-delay="0ms"
      data-wow-duration="1500ms"
    >
      <figure className="video-image">
        <img src="/images/resource/video.jpg" alt="Sampurnha Software Demo" />
      </figure>
      <a
        href="https://www.youtube.com/watch?v=kxPCFljwJws"
        className="lightbox-image overlay-box"
      >
        <span className="fa fa-play">
          <i className="ripple"></i>
        </span>
      </a>
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
												<img src="/images/resource/slide-3.jpeg" alt="" />
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
							<h2>Powerful Business Software <br />
              Built for <span>Efficiency</span> & <span>Growth</span></h2>
						</div>
						<div className="text">
							<p>
              Sampurnha Software LLP delivers intelligent, scalable and
              secure software solutions designed to simplify complex
              business processes.
            </p>
            <p>
              Our ERP, CRM, E-Commerce, POS and HRMS systems help
              organizations operate smarter, faster and more efficiently.
            </p>
						</div>
						<ul className="list-style-one">
            <li>Custom-built solutions tailored to your business needs</li>
            <li>Secure, scalable & future-ready architecture</li>
            <li>Dedicated support & continuous improvements</li>
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
									<h3>Centralized Management</h3>
									<div className="text">
                  Manage finance, inventory, sales, HR and operations from a
                  single integrated platform.
                </div>
								</div>
							</div>
							
							{/*  Featured Block */}
							<div className="featured-block titlt style-two col-lg-6 col-md-6 col-sm-12" data-tilt data-tilt-max="6">
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-protection-shield-with-a-check-mark"></span>
									</div>
									<h3>Enterprise-Grade Security</h3>
									<div className="text">
                  Advanced security standards ensure your data remains
                  protected, reliable and compliant.
                </div>
								</div>
							</div>
							
							{/*  Featured Block */}
							<div className="featured-block titlt style-three col-lg-6 col-md-6 col-sm-12" data-tilt data-tilt-max="10">
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-dashboard"></span>
									</div>
									<h3>Fully Customizable</h3>
									<div className="text">
                  Every solution is tailored to your workflows, industry
                  requirements and business goals.
                </div>
								</div>
							</div>
							
							{/*  Featured Block */}
							<div className="featured-block style-four col-lg-6 col-md-6 col-sm-12">
								<div className="inner-box">
									<div className="icon-box">
										<span className="icon flaticon-writing"></span>
									</div>
									<h3>Cloud & On-Premise</h3>
									<div className="text">
                  Deploy on cloud or on-premise with seamless scalability and
                  performance.
                </div>
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
											<a href="/images/resource/slide-2.jpeg" data-fancybox="steps" data-caption="" className="image-link lightbox-image"><img src="/images/resource/slide-2.jpeg" alt="" /></a>
										</div>
									</div>
								</div>
								
								<div className="carousel-item">
									<div className="content">
										<div className="image">
											<a href="/images/resource/slide-3.jpeg" data-fancybox="steps" data-caption="" className="image-link lightbox-image"><img src="/images/resource/slide-3.jpeg" alt="" /></a>
										</div>
									</div>
								</div>
								
								<div className="carousel-item">
									<div className="content">
										<div className="image">
											<a href="/images/resource/slide-9.jpeg" data-fancybox="steps" data-caption="" className="image-link lightbox-image"><img src="/images/resource/slide-9.jpeg" alt="" /></a>
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
								<div className="title"><span>Our</span> Process</div>
								<h2>Simple Steps to Build <br />
                <span>Powerful</span> Software Solutions</h2>
							</div>
							
							{/*  Controls*/}
							<ul className="carousel-indicators">
								
								<li data-target="#steps-thumb" data-slide-to="0" className="tab-btn active wow" data-wow-delay="0ms" data-wow-duration="1500ms">
									<span className="number">1</span>
									<span className="icon"><i className="flaticon-logout"></i></span>
									<strong>Requirement Analysis</strong>
                We understand your business processes, challenges, and goals to
                design the right ERP, CRM, POS, HRMS or E-Commerce solution.
								</li>
								
								<li data-target="#steps-thumb" data-slide-to="1" className="tab-btn wow" data-wow-delay="0ms" data-wow-duration="1500ms">
									<span className="number">2</span>
									<span className="icon"><i className="flaticon-credit-card"></i></span>
									<strong>Design & Development</strong>
                Our experts build secure, scalable, and customized software using
                modern technologies and best practices.
								</li>
								
								<li data-target="#steps-thumb" data-slide-to="2" className="tab-btn wow" data-wow-delay="0ms" data-wow-duration="1500ms">
									<span className="number">3</span>
									<span className="icon"><i className="flaticon-gift"></i></span>
									<strong>Deployment & Support</strong>
                We deploy the solution seamlessly and provide continuous support,
                upgrades, and performance optimization.
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
		
			<div className="ct-dot-animated">
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
			</div>
		
			{/*  App Block */}
			<div className="app-block">
				<div className="inner-box">
					<div className="row clearfix">
					
						{/*  Image Column */}
						<div className="image-column col-lg-6 col-md-12 col-sm-12">
							<div className="inner-column wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
								<div className="image titlt" data-tilt data-tilt-max="8">
									<a href="images/resource/app-1.png" className="app-1 lightbox-image"><img src="/images/resource/erp-slide1.png" alt="" /></a>
								</div>
							</div>
						</div>
						
						{/*  Content Column */}
						<div className="content-column col-lg-6 col-md-12 col-sm-12">
							<div className="inner-column">
								<div className="icon-box">
									<span className="icon flaticon-settings"></span>
								</div>
								<h3>Integrated ERP & CRM Management</h3>
								<div className="text">
                Monitor finance, inventory, sales pipeline, customer interactions
                and branch performance through a single unified system built by
                Sampurnha Software LLP.
              </div>
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
								<h3>Scalable HRMS, POS & E-Commerce Solutions</h3>
								<div className="text">Our applications are designed for real businesses with
                bug-free performance, responsive UI, GST-ready POS billing,
                automated payroll, attendance, and seamless e-commerce
                order processing.</div>
								<a href="#" className="theme-btn btn-style-four"><span className="txt">Read more</span></a>
							</div>
						</div>
						
						{/*  Image Column */}
						<div className="image-column col-lg-6 col-md-12 col-sm-12">
							<div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
								<div className="image titlt" data-tilt data-tilt-max="8">
									<a href="images/resource/app-2.png" className="app-2 lightbox-image"><img src="/images/resource/Frame 10.png" alt="" /></a>
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
							<h2>
              Transforming Businesses with <br />
              Smart Digital Solutions
            </h2>
						</div>
						<div className="text">
            For 10+ years, Sampurnha Software LLP has helped organizations
            automate operations, digitize customer management, and build
            high-performance sales ecosystems through ERP, CRM, POS,
            HRMS and E-Commerce platforms.
          </div>
						<div className="download">
            Start your journey with a personalized product demo!
          </div>
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
											<h5 className="counter-title">
                      Satisfied Clients
                    </h5>
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
											<h5 className="counter-title">Implementation Team</h5>
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
											<h5 className="counter-title">Business Modules Delivered</h5>
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

	

  {/*  Screenshots Section */}
	<section className="screenshots-section">
		<div className="auto-container">
			<div className="sec-title centered style-two">
				<div className="title"><span>Ap</span>p Screenshots</div>
				<h2>Explore Our ERP, CRM, POS, HRMS <span>Solutions</span>
        <br />
        Built for Real Business Workflows</h2>
			</div>
			
			<div className="row appScreenshotCarousel-container swiper-container" style={{ height: "700px" }}>
				<div className="screen-mobile-image"></div>
				<div className="swiper-wrapper">
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-1.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-2.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-3.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-4.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-5.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-6.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-7.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-8.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-9.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-10.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
					<div className="swiper-slide" style={{backgroundImage: "url(/images/resource/slide-11.jpeg)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
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
				<h2>Seamless ERP & CRM Integrations for Powerful Business Automation</h2>
			</div>
		</div>
		
		{/*  Outer Container */}
		<div className="outer-container">
			
			<div className="bubbles-wrapper">
				<div className="animations m-0">
					<div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
						<img src="/images/resource/Integrations-1.png" alt="" className="img-responsive" />
						<span className="badge badge-contrast shadow-box">ERP</span>
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
	<section className="faq-section">
		<div className="auto-container">
			<div className="sec-title centered style-four">
				<div className="title"><span>FA</span>Q</div>
				<h2>Understand Our ERP, CRM & Business Solutions Through Frequently Asked Questions</h2>
			</div>
			<div className="inner-container">
				<div className="row clearfix">
				
					{/*  Faq Column */}
					<div className="faq-column col-lg-6 col-md-12 col-sm-12">
						<h3>How does your ERP software help my business?</h3>
						<div className="text">Our ERP solution centralizes accounting, inventory, sales, purchasing, GST, and reporting into one real-time platform. It reduces manual work, improves accuracy, and gives management a clear dashboard for faster decision-making.</div>
					</div>
					
					{/*  Faq Column */}
					<div className="faq-column col-lg-6 col-md-12 col-sm-12">
						<h3>Can you customize CRM as per our workflow?</h3>
						<div className="text">Yes. We design CRM modules tailored for lead tracking, quotations, service tickets, and customer communication. The system adapts to your sales process instead of forcing you to change how you work.</div>
					</div>
					
					{/*  Faq Column */}
					<div className="faq-column col-lg-6 col-md-12 col-sm-12">
						<h3>Does the E-Commerce platform integrate with ERP & POS?</h3>
						<div className="text">Absolutely. Orders from your online store sync directly with ERP inventory and POS billing. This ensures stock accuracy, automated invoices, and smooth payment gateway connectivity such as Stripe, PayPal, and Indian gateways.</div>
					</div>
					
					{/*  Faq Column */}
					<div className="faq-column col-lg-6 col-md-12 col-sm-12">
						<h3>What POS solutions do you provide?</h3>
						<div className="text">We develop POS applications for retail and restaurants with barcode devices, receipt printers, cash ledgers, and GST billing. The POS connects with ERP and CRM for unified sales and customer data.</div>
					</div>
					
					{/*  Faq Column */}
					<div className="faq-column col-lg-6 col-md-12 col-sm-12">
						<h3>How does HRMS & payroll automation work?</h3>
						<div className="text">Our HRMS manages employee records, attendance, leave, salary structures, and payroll processing. Biometric or mobile attendance can be integrated to generate payslips and statutory reports automatically.</div>
					</div>
					
					{/*  Faq Column */}
					<div className="faq-column col-lg-6 col-md-12 col-sm-12">
						<h3>Which technologies do you use for development?</h3>
						<div className="text">We primarily use Flutter for Android & Web PWA, .NET Core for APIs, and Firebase for cloud data and push notifications. This stack provides security, scalability, and high performance for enterprise applications.</div>
					</div>
					
				</div>
				{/*  Question */}
				<div className="question">Still have a question? Contact us: <strong><a href="mailto:hatim@sampurnha.com">hatim@sampurnha.com</a></strong></div>
				
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
						<h2>We want to <span>share our</span> success
by our latest blog</h2>
					</div>
					<div className="pull-right">
						<div className="text">Explore practical knowledge on ERP software development,<br/> CRM automation, E-Commerce integration, POS transformation, and HRMS digitalization.<br/> Our blogs reflect real project experience, Indian business compliance, GST workflows, and scalable technology architecture built by Sampurnha Software LLP.</div>
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
							<h3><a href="#">ERP Software: The Digital Backbone of Modern Businesses</a></h3>
							<div className="text">In today’s competitive market, businesses can no longer rely on scattered spreadsheets and manual registers. An Enterprise Resource Planning (ERP) system acts as a single source of truth that connects all departments—accounts, inventory, sales, purchase, production, and GST compliance.</div>
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
							<h3><a href="#">Why CRM Is Not Just for Big Companies</a></h3>
							<div className="text">Customer Relationship Management (CRM) is often misunderstood as a tool only for large corporates. The reality is that small teams need CRM even more because every lead and follow-up matters.</div>
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
							<h3><a href="#">Connecting E-Commerce, POS & HRMS Into One Ecosystem</a></h3>
							<div className="text">Businesses today operate through multiple channels—online stores, retail counters, and field staff. If these systems don’t talk to each other, growth creates confusion instead of profit.</div>
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
								Sr. No. 14, Shop No. 02, 
								<br/>
Near Dhadge IND, Nanded, 
Pune, Haveli, Maharashtra, 
India, 411041 <br/>
							</li>
							<li>
								<span className="icon flaticon-telephone"></span>
								<strong>Call for help:</strong>
								<a href="tel:+91 75072 78652">+91 75072 78652</a><br/>
								{/* <a href="tel:843-971-1906">(843) 971-1906</a> */}
							</li>
							<li>
								<span className="icon flaticon-invite"></span>
								<strong>Mail us:</strong>
								<a className="mailto:hatim@sampurnha.com" href="#">hatim@sampurnha.com</a><br/>
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
							<div className="text">We build powerful ERP, CRM, E-Commerce, POS & HRMS solutions
that streamline operations and accelerate business growth.</div>
							{/* <div className="paypall">
								<a href="#"><img src="/images/icons/paypall.png" alt="" /></a>
							</div> */}
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
						<div className="copyright">&copy; 2026 Sampurnha Software LLP</div>
					</div>
					{/* <div className="pull-right">
						<ul className="footer-nav">
							<li><a href="#">Help</a></li>
							<li><a href="#">Terms & Conditions</a></li>
							<li><a href="#">Privacy</a></li>
						</ul>
					</div> */}
				</div>
			</div>
		
		</div>
	</footer>
	{/*  End Main Footer */}
	
</div>
</>
  );
}
