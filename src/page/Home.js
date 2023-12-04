import React from 'react'
import Slider, {Slide} from "../component/Swiper/Slider";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Home() {
    return (
        <>
        <div class="offcanvas offcanvas-start" id="offcanvasExample">
        <div class="offcanvas-header">
          <div class="offcanvas-logo">
            <a href="index.html">
              <img src="assets/images/logo-white.png" alt="" />
            </a>
          </div>

          <button type="button" class="close-btn" data-bs-dismiss="offcanvas">
            <i class="flaticon-close"></i>
          </button>
        </div>

        <div class="offcanvas-body">
          <div class="offcanvas-menu">
            <ul class="main-menu">
              <li class="active-menu">
                <a href="index.html">Home</a>
                <ul class="sub-menu">
                  <li class="active">
                    <a href="index.html">Home Main</a>
                  </li>
                  <li>
                    <a href="index-2.html">AI Solutions</a>
                  </li>
                  <li>
                    <a href="index-3.html">Cyber Security</a>
                  </li>
                  <li>
                    <a href="index-4.html">IT Solutions</a>
                  </li>
                  <li>
                    <a href="index-5.html">Software Company</a>
                  </li>
                  <li>
                    <a href="index-6.html">IT Agency</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">Aboute Us</a>
              </li>
              <li>
                <a href="javascript:void(0)">Pages</a>
                <ul class="sub-menu">
                  <li>
                    <a href="team.html">Our Team</a>
                  </li>
                  <li>
                    <a href="service.html">Service</a>
                  </li>
                  <li>
                    <a href="choose-us.html">Why Choose Us</a>
                  </li>
                  <li>
                    <a href="testimonial.html">Testimonial</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="login-register.html">Login & Register</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Blog</a>
                <ul class="sub-menu">
                  <li>
                    <a href="blog.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-standard.html">Blog List</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section techwix-hero-section-03 d-flex align-items-center" style={{ backgroundImage: `url('assets/images/hero-bg3.jpg')` }}>
        <div class="shape-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="944px" height="894px">
            <defs>
              <linearGradient id="PSgrad_0" x1="88.295%" x2="0%" y1="0%" y2="46.947%">
                <stop offset="0%" stop-color="rgb(67,186,255)" stop-opacity="1" />
                <stop offset="100%" stop-color="rgb(113,65,177)" stop-opacity="1" />
              </linearGradient>
            </defs>
            <path
              fill-rule="evenodd"
              fill="rgb(43, 142, 254)"
              d="M39.612,410.76 L467.344,29.823 C516.51,-13.476 590.638,-9.94 633.939,39.612 L914.192,317.344 C957.492,366.50 953.109,440.638 904.402,483.939 L476.671,864.191 C427.964,907.492 353.376,903.109 310.76,854.402 L29.823,576.670 C-13.477,527.963 -9.94,453.376 39.612,410.76 Z"
            />
            <path
              fill="url(#PSgrad_0)"
              d="M39.612,410.76 L467.344,29.823 C516.51,-13.476 590.638,-9.94 633.939,39.612 L914.192,317.344 C957.492,366.50 953.109,440.638 904.402,483.939 L476.671,864.191 C427.964,907.492 353.376,903.109 310.76,854.402 L29.823,576.670 C-13.477,527.963 -9.94,453.376 39.612,410.76 Z"
            />
          </svg>
        </div>
        <div class="shape-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="726.5px" height="726.5px">
            <path
              fill-rule="evenodd"
              stroke="rgb(255, 255, 255)"
              stroke-width="1px"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              opacity="0.302"
              fill="none"
              d="M28.14,285.269 L325.37,21.216 C358.860,-8.852 410.655,-5.808 440.723,28.14 L704.777,325.37 C734.846,358.860 731.802,410.654 697.979,440.723 L400.956,704.777 C367.133,734.845 315.338,731.802 285.269,697.979 L21.216,400.955 C-8.852,367.132 -5.808,315.337 28.14,285.269 Z"
            />
          </svg>
        </div>
        <div class="shape-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="515px" height="515px">
            <defs>
              <linearGradient id="PSgrad_0" x1="0%" x2="89.879%" y1="0%" y2="43.837%">
                <stop offset="0%" stop-color="rgb(67,186,255)" stop-opacity="1" />
                <stop offset="100%" stop-color="rgb(113,65,177)" stop-opacity="1" />
              </linearGradient>
            </defs>
            <path
              fill-rule="evenodd"
              fill="rgb(43, 142, 254)"
              d="M19.529,202.281 L230.531,14.699 C254.559,-6.660 291.353,-4.498 312.714,19.529 L500.295,230.531 C521.656,254.559 519.493,291.353 495.466,312.714 L284.463,500.295 C260.436,521.656 223.641,519.493 202.281,495.466 L14.699,284.463 C-6.660,260.435 -4.498,223.641 19.529,202.281 Z"
            />
            <path
              fill="url(#PSgrad_0)"
              d="M19.529,202.281 L230.531,14.699 C254.559,-6.660 291.353,-4.498 312.714,19.529 L500.295,230.531 C521.656,254.559 519.493,291.353 495.466,312.714 L284.463,500.295 C260.436,521.656 223.641,519.493 202.281,495.466 L14.699,284.463 C-6.660,260.435 -4.498,223.641 19.529,202.281 Z"
            />
          </svg>
        </div>
        <div class="shape-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="972.5px" height="970.5px">
            <path
              fill-rule="evenodd"
              stroke="rgb(255, 255, 255)"
              stroke-width="1px"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              fill="none"
              d="M38.245,381.103 L435.258,28.158 C480.467,-12.32 549.697,-7.964 589.888,37.244 L942.832,434.257 C983.23,479.466 978.955,548.697 933.746,588.888 L536.733,941.832 C491.524,982.23 422.293,977.955 382.103,932.746 L29.158,535.733 C-11.32,490.524 -6.963,421.293 38.245,381.103 Z"
            />
          </svg>
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <h3 class="sub-title">Technology Releted Consultancy</h3>
                <h2 class="title">We transform ideas into technology</h2>
                <p>We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
                <div class="hero-btn">
                  <a class="btn" href="about.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-service-section-03" style={{ backgroundImage: `url(assets/images/bg/service-bg3.jpg)` }}>
        <div class="container">
          <div class="service-wrap-03">
            <div class="row">
              <div class="col-xl-3 col-md-6">
                <div class="service-item-03">
                  <div class="service-img">
                    <img src="assets/images/ser-icon9.png" alt="" />
                  </div>
                  <div class="service-content">
                    <h3 class="title">
                      <a href="service.html">Infrastructure Technology</a>
                    </h3>
                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
                    <div class="read-more">
                      <a href="service.html">
                        <i class="fas fa-plus"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="service-item-03">
                  <div class="service-img">
                    <img src="assets/images/ser-icon10.png" alt="" />
                  </div>
                  <div class="service-content">
                    <h3 class="title">
                      <a href="service.html">IT Consultancy & solution</a>
                    </h3>
                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
                    <div class="read-more">
                      <a href="service.html">
                        <i class="fas fa-plus"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="service-item-03">
                  <div class="service-img">
                    <img src="assets/images/ser-icon11.png" alt="" />
                  </div>
                  <div class="service-content">
                    <h3 class="title">
                      <a href="service.html">Cloud managed services</a>
                    </h3>
                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
                    <div class="read-more">
                      <a href="service.html">
                        <i class="fas fa-plus"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="service-item-03">
                  <div class="service-img">
                    <img src="assets/images/ser-icon12.png" alt="" />
                  </div>
                  <div class="service-content">
                    <h3 class="title">
                      <a href="service.html">Blockchain technology</a>
                    </h3>
                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
                    <div class="read-more">
                      <a href="service.html">
                        <i class="fas fa-plus"></i> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-about-section-04 section-padding">
        <div class="shape-1"></div>
        <div class="container">
          <div class="about-wrap">
            <div class="row">
              <div class="col-lg-6">
                <div class="about-content-wrap">
                  <div class="section-title">
                    <h3 class="sub-title">Who we are</h3>
                    <h2 class="title">Highly Tailored IT Design, Management & Support Services.</h2>
                  </div>
                  <p class="text">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>

                  <div class="about-author-info-wrap">
                    <div class="about-author">
                      <img src="assets/images/sign.png" alt="" />
                      <h3 class="name">Alen Morno sin</h3>
                      <span class="designation">CEO, Techmax</span>
                    </div>
                    <div class="about-info">
                      <p>Call to ask any question </p>
                      <h3 class="number">0123-456-7890</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-img-wrap">
                  <div class="play-btn-02">
                    <a class="popup-video" href="https://www.youtube.com/watch?time_continue=3&v=_X0eYtY8T_U">
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                  <div class="about-img about-img-big">
                    <img src="assets/images/about-big2.jpg" alt="" />
                  </div>
                  <div class="about-img about-img-sm">
                    <img src="assets/images/about-sm2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-counter-section-02">
        <div class="container">
          <div class="counter-wrap">
            <div class="row">
              <div class="col-xl-3 col-md-6">
                <div class="single-counter">
                  <div class="counter-img">
                    <img src="assets/images/counter-1.png" alt="" />
                  </div>
                  <div class="counter-content">
                    <span class="counter">1790</span>
                    <p>Happy clients</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="single-counter">
                  <div class="counter-img">
                    <img src="assets/images/counter-2.png" alt="" />
                  </div>
                  <div class="counter-content">
                    <span class="counter">491</span>
                    <p>Finished projects</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="single-counter">
                  <div class="counter-img">
                    <img src="assets/images/counter-3.png" alt="" />
                  </div>
                  <div class="counter-content">
                    <span class="counter">245</span>
                    <p>Skilled Experts</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="single-counter single-counter-4">
                  <div class="counter-img">
                    <img src="assets/images/counter-1.png" alt="" />
                  </div>
                  <div class="counter-content">
                    <span class="counter">1090</span>
                    <p>Media Posts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-choose-us-section section-padding" style={{ backgroundImage: `url(assets/images/bg/choose-us-bg.jpg)` }}>
        <div class="container">
          <div class="choose-us-wrap">
            <div class="section-title text-center">
              <h3 class="sub-title">REASON TO CHOOSE US</h3>
              <h2 class="title">We provide truly prominent IT solutions.</h2>
            </div>
            <div class="choose-us-content-wrap">
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="choose-us-item">
                    <div class="choose-us-img">
                      <a href="choose-us.html">
                        <img src="assets/images/choose-us1.jpg" alt="" />
                      </a>
                      <div class="choose-us-content">
                        <h3 class="title">Information managemnet system</h3>
                        <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="choose-us-item">
                    <div class="choose-us-img">
                      <a href="choose-us.html">
                        <img src="assets/images/choose-us2.jpg" alt="" />
                      </a>
                      <div class="choose-us-content">
                        <h3 class="title">Information Database Security</h3>
                        <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="choose-us-item">
                    <div class="choose-us-img">
                      <a href="choose-us.html">
                        <img src="assets/images/choose-us3.jpg" alt="" />
                      </a>
                      <div class="choose-us-content">
                        <h3 class="title">Multifunctional Technology</h3>
                        <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="more-choose-content text-center">
                    <p>
                      Learn more about{' '}
                      <a href="choose-us.html">
                        More reason <i class="fas fa-long-arrow-alt-right"></i>
                      </a>{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-skill-section-02 section-padding">
        <div class="container">
          <div class="skill-wrap">
            <div class="row">
              <div class="col-lg-6">
                <div class="skill-left">
                  <div class="section-title">
                    <h2 class="title">Preparing for your success, we provide truly prominent IT solutions</h2>
                  </div>
                  <div class="experience-wrap">
                    <div class="experience">
                      <h2 class="number">25</h2>
                      <span>
                        Years of <br /> experience
                      </span>
                    </div>
                    <div class="experience-text">
                      <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                      <a class="learn-more" href="javascript:void(0)">
                        learn More About Us <i class="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="skill-right">
                  <div class="counter-bar">
                    <div class="skill-item">
                      <span class="title">IT Managment</span>
                      <div class="skill-bar">
                        <div class="bar-inner">
                          <div class="bar progress-line color-1" data-width="80">
                            <span class="skill-percent">
                              <span class="counter">80</span>%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="skill-item">
                      <span class="title">Data Security</span>
                      <div class="skill-bar">
                        <div class="bar-inner">
                          <div class="bar progress-line color-1" data-width="95">
                            <span class="skill-percent">
                              <span class="counter">95</span>%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="skill-item">
                      <span class="title">Information Technology</span>
                      <div class="skill-bar">
                        <div class="bar-inner">
                          <div class="bar progress-line color-1" data-width="80">
                            <span class="skill-percent">
                              <span class="counter">80</span>%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="skill-item">
                      <span class="title">Technology Consultant</span>
                      <div class="skill-bar">
                        <div class="bar-inner">
                          <div class="bar progress-line color-1" data-width="90">
                            <span class="skill-percent">
                              <span class="counter">90</span>%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-case-study-section-02 section-padding" style={{ backgroundImage: `url(assets/images/bg/case-study-bg.jpg)` }}>
        <div class="container">
          <div class="case-study-wrap">
            <div class="section-title text-center">
              <h3 class="sub-title">From our Case studies</h3>
              <h2 class="title white">We delivered best solution</h2>
            </div>
          </div>
        </div>
        <div class="case-study-content-wrap">
            <Slider
              settings={{
                navigation: true,
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
                breakpoints: {
                  0: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }
              }}
              >
              <Slide>
                <div class="single-case-study-02">
                  <div class="case-study-img">
                    <a href="javascript:void(0)">
                      <img src="assets/images/case-4.jpg" class="w-100" alt="" />
                    </a>
                  </div>
                  <div class="case-study-content">
                    <p class="sub-title">Database Security</p>
                    <h3 class="title">
                      <a href="javascript:void(0)">
                        <span>Structure</span> <br /> <span>of Malnufication</span>
                      </a>
                    </h3>
                    <p class="text">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your </p>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="single-case-study-02">
                  <div class="case-study-img">
                    <a href="javascript:void(0)">
                      <img src="assets/images/case-5.jpg" alt="" />
                    </a>
                  </div>
                  <div class="case-study-content">
                    <p class="sub-title">Database Security</p>
                    <h3 class="title">
                      <a href="javascript:void(0)">
                        <span>Multifunctional</span> <br /> <span>of Technology</span>
                      </a>
                    </h3>
                    <p class="text">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your </p>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="single-case-study-02">
                  <div class="case-study-img">
                    <a href="javascript:void(0)">
                      <img src="assets/images/case-6.jpg" alt="" />
                    </a>
                  </div>
                  <div class="case-study-content">
                    <p class="sub-title">Database Security</p>
                    <h3 class="title">
                      <a href="javascript:void(0)">
                        <span>Blockchain</span> <br /> <span>of technology</span>
                      </a>
                    </h3>
                    <p class="text">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your </p>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="single-case-study-02">
                  <div class="case-study-img">
                    <a href="javascript:void(0)">
                      <img src="assets/images/case-4.jpg" class="w-100" alt="" />
                    </a>
                  </div>
                  <div class="case-study-content">
                    <p class="sub-title">Database Security</p>
                    <h3 class="title">
                      <a href="javascript:void(0)">
                        <span>Structure</span> <br /> <span>of Malnufication</span>
                      </a>
                    </h3>
                    <p class="text">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your </p>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="single-case-study-02">
                  <div class="case-study-img">
                    <a href="javascript:void(0)">
                      <img src="assets/images/case-5.jpg" alt="" />
                    </a>
                  </div>
                  <div class="case-study-content">
                    <p class="sub-title">Database Security</p>
                    <h3 class="title">
                      <a href="javascript:void(0)">
                        <span>Multifunctional</span> <br /> <span>of Technology</span>
                      </a>
                    </h3>
                    <p class="text">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your </p>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="single-case-study-02">
                  <div class="case-study-img">
                    <a href="javascript:void(0)">
                      <img src="assets/images/case-6.jpg" alt="" />
                    </a>
                  </div>
                  <div class="case-study-content">
                    <p class="sub-title">Database Security</p>
                    <h3 class="title">
                      <a href="javascript:void(0)">
                        <span>Blockchain</span> <br /> <span>of technology</span>
                      </a>
                    </h3>
                    <p class="text">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your </p>
                  </div>
                </div>
              </Slide>
            </Slider>
        </div>
      </div>
      <div class="section techwix-testimonial-section-02 techwix-testimonial-section-03 section-padding-02">
        <div class="container">
          <div class="testimonial-wrap-02">
            <div class="section-title text-center">
              <h3 class="sub-title">Testimonial</h3>
              <h2 class="title">20k+ satisfied clients worldwide</h2>
            </div>
            <div class="testimonial-content-wrap-02">
              <div class="swiper-container testimonial-02-active">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="single-testimonial-02">
                      <div class="testimonial-thumb">
                        <img src="assets/images/testi-3.jpg" alt="" />
                      </div>
                      <div class="testimonial-content">
                        <img src="assets/images/testi-icon.png" alt="" />
                        <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                        <span class="name">Mike Holder </span>
                        <span class="designation"> / CEO, Harlond inc</span>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="single-testimonial-02">
                      <div class="testimonial-thumb">
                        <img src="assets/images/testi-4.jpg" alt="" />
                      </div>
                      <div class="testimonial-content">
                        <img src="assets/images/testi-icon.png" alt="" />
                        <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                        <span class="name">Mike Fermalin </span>
                        <span class="designation"> / CEO, Harlond inc</span>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="single-testimonial-02">
                      <div class="testimonial-thumb">
                        <img src="assets/images/testi-3.jpg" alt="" />
                      </div>
                      <div class="testimonial-content">
                        <img src="assets/images/testi-icon.png" alt="" />
                        <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                        <span class="name">Mike Holder </span>
                        <span class="designation"> / CEO, Harlond inc</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-brand-section techwix-brand-section-03">
        <div class="container">
          <div class="brand-wrapper text-center">
            <div class="brand-active">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-1.png" alt="Brand" />
                  </div>
                  <div class="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-2.png" alt="Brand" />
                  </div>
                  <div class="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-3.png" alt="Brand" />
                  </div>

                  <div class="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-4.png" alt="Brand" />
                  </div>

                  <div class="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-5.png" alt="Brand" />
                  </div>

                  <div class="swiper-slide single-brand">
                    <img src="assets/images/brand/brand-2.png" alt="Brand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-team-section section-padding-02">
        <div class="container">
          <div class="team-wrap">
            <div class="section-title text-center">
              <h3 class="sub-title">Our expert team </h3>
              <h2 class="title"> We have world expert team</h2>
            </div>

            <div class="team-content-wrap">
              <div class="swiper-container team-active">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="single-team">
                      <div class="team-img">
                        <a href="team.html">
                          <img src="assets/images/team/team-1.jpg" alt="" />
                        </a>
                      </div>
                      <div class="team-content">
                        <h3 class="name">
                          <a href="team.html">
                            Andrew <br /> Max Fetcher
                          </a>
                        </h3>
                        <span class="designation">CEO, techwix</span>
                        <div class="team-social">
                          <ul class="social">
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-behance"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="single-team">
                      <div class="team-img">
                        <a href="team.html">
                          <img src="assets/images/team/team-2.jpg" alt="" />
                        </a>
                      </div>
                      <div class="team-content">
                        <h3 class="name">
                          <a href="team.html">
                            Arnold <br /> human
                          </a>
                        </h3>
                        <span class="designation">CEO, techwix</span>
                        <div class="team-social">
                          <ul class="social">
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-behance"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="single-team">
                      <div class="team-img">
                        <a href="team.html">
                          <img src="assets/images/team/team-3.jpg" alt="" />
                        </a>
                      </div>
                      <div class="team-content">
                        <h3 class="name">
                          <a href="team.html">
                            Mike <br /> Holder
                          </a>
                        </h3>
                        <span class="designation">CEO, techwix</span>
                        <div class="team-social">
                          <ul class="social">
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-behance"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="single-team">
                      <div class="team-img">
                        <a href="team.html">
                          <img src="assets/images/team/team-4.jpg" alt="" />
                        </a>
                      </div>
                      <div class="team-content">
                        <h3 class="name">
                          <a href="team.html">
                            Joakim <br /> Ken
                          </a>
                        </h3>
                        <span class="designation">CEO, techwix</span>
                        <div class="team-social">
                          <ul class="social">
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fab fa-behance"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-blog-section section-padding-02">
        <div class="container">
          <div class="section-title text-center">
            <h4 class="sub-title">latest Blog</h4>
            <h2 class="title">From the news room</h2>
          </div>

          <div class="techwix-blog-wrap">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-blog">
                  <div class="blog-image">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog-1.jpg" alt="" />
                    </a>
                    <div class="top-meta">
                      <span class="date">
                        <span>08</span>Aug
                      </span>
                    </div>
                  </div>
                  <div class="blog-content">
                    <div class="blog-meta">
                      <span>
                        <i class="fas fa-user"></i> <a href="javascript:void(0)">Andrew Paker</a>
                      </span>
                      <span>
                        <i class="far fa-comments"></i> 0 Comments
                      </span>
                    </div>
                    <h3 class="title">
                      <a href="blog-details.html">How to become a successful businessman </a>
                    </h3>
                    <div class="blog-btn">
                      <a class="blog-btn-link" href="blog-details.html">
                        Read Full <i class="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-blog">
                  <div class="blog-image">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog-2.jpg" alt="" />
                    </a>
                    <div class="top-meta">
                      <span class="date">
                        <span>10</span>Aug
                      </span>
                    </div>
                  </div>
                  <div class="blog-content">
                    <div class="blog-meta">
                      <span>
                        <i class="fas fa-user"></i> <a href="javascript:void(0)">Andrew Paker</a>
                      </span>
                      <span>
                        <i class="far fa-comments"></i> 0 Comments
                      </span>
                    </div>
                    <h3 class="title">
                      <a href="blog-details.html">Who Needs Extract Value From Data? </a>
                    </h3>
                    <div class="blog-btn">
                      <a class="blog-btn-link" href="blog-details.html">
                        Read Full <i class="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-blog">
                  <div class="blog-image">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog-3.jpg" alt="" />
                    </a>
                    <div class="top-meta">
                      <span class="date">
                        <span>12</span>Aug
                      </span>
                    </div>
                  </div>
                  <div class="blog-content">
                    <div class="blog-meta">
                      <span>
                        <i class="fas fa-user"></i> <a href="javascript:void(0)">Andrew Paker</a>
                      </span>
                      <span>
                        <i class="far fa-comments"></i> 0 Comments
                      </span>
                    </div>
                    <h3 class="title">
                      <a href="blog-details.html">Easy and Most Powerful Server and Platform.</a>
                    </h3>
                    <div class="blog-btn">
                      <a class="blog-btn-link" href="blog-details.html">
                        Read Full <i class="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-cta-section-02">
        <div class="container">
          <div class="cta-wrap" style={{ backgroundImage: `url(assets/images/bg/cta-bg.jpg)` }}>
            <div class="row align-items-center">
              <div class="col-xl-9 col-lg-8">
                <div class="cta-content">
                  <div class="cta-icon">
                    <img src="assets/images/cta-icon2.png" alt="" />
                  </div>
                  <p>We’re Delivering the best customer Experience</p>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4">
                <div class="cta-btn">
                  <a class="btn btn-white" href="javascript:void(0)">
                    +62 896 5484 1252
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Home