import React from 'react';
import Slider, { Slide } from '../component/Swiper/Slider';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function Home() {
  return (
    <>
      <div class="offcanvas offcanvas-start" id="offcanvasExample">
        <div class="offcanvas-header">
          <div class="offcanvas-logo">
            <a href="/">
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
                <a href="/">Home</a>
                <ul class="sub-menu">
                  <li class="active">
                    <a href="/">Home Main</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section techwix-hero-section-03 d-flex align-items-center" style={{ backgroundImage: `url('assets/images/banner-hero.png')` }}>
        <div class="shape-1"></div>
        <div class="shape-2"></div>
        <div class="shape-3"></div>
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
                <h3 class="sub-title">Provide Job Service</h3>
                <h2 class="title">Your Dream Job, Just a 'Click' Away at ToekangKu</h2>
                <p>We provide the most responsive and functional job service with one click.</p>
                <div class="hero-btn">
                  <Link class="btn" to="/about">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-service-section-03" style={{ backgroundImage: `url(assets/images/service-bg.png)` }}>
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
                      <Link to="/service">Jasa Pekerjaan</Link>
                    </h3>
                    <p>Temukan berbagai jenis pekerjaan dengan platform ToekangKu. Mulai dari pembangun, teknisi komputer, hingga babysitter – semua ada di sini.</p>
                    <div class="read-more">
                      <Link to="/service">
                        <i class="fas fa-plus"></i> Lebih Lanjut
                      </Link>
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
                      <Link to="/service">Profil Pekerjaan</Link>
                    </h3>
                    <p>Lihat profil lengkap pekerja di ToekangKu, dari keahlian hingga pengalaman kerja. Baca ulasan pelanggan untuk mendapatkan gambaran yang jelas.</p>
                    <div class="read-more">
                      <Link to="/service">
                        <i class="fas fa-plus"></i> Lebih Lanjut
                      </Link>
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
                      <Link to="/service">Sistem Rekomendasi Pekerjaan</Link>
                    </h3>
                    <p>ToekangKu hadir dengan sistem rekomendasi pintar. Temukan pekerjaan sesuai keahlian dan preferensi Anda dengan mudah.</p>
                    <div class="read-more">
                      <Link to="/service">
                        <i class="fas fa-plus"></i> Lebih Lanjut
                      </Link>
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
                      <Link to="/service">Kontak dan Dukungan Pelanggan</Link>
                    </h3>
                    <p>Butuh bantuan? Hubungi tim dukungan pelanggan ToekangKu melalui email, telepon, atau formulir kontak online.</p>
                    <div class="read-more">
                      <Link to="/service">
                        <i class="fas fa-plus"></i> Lebih Lanjut
                      </Link>
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
                    <h3 class="sub-title">Siapa Kami</h3>
                    <h2 class="title">Portal Layanan Pekerjaan, Layanan Manajemen & Dukungan yang Sangat Disesuaikan.</h2>
                  </div>
                  <p class="text">Percepat inovasi dengan tim teknologi kelas dunia Kami akan mencocokkan Anda dengan seluruh talenta layanan untuk semua kebutuhan Anda.</p>

                  <div class="about-author-info-wrap">
                    <div class="about-author">
                      <img src="assets/images/signature.png" alt="" />
                      <h3 class="name">Fariz Alamsyah</h3>
                      <span class="designation">CTO, ToekangKu</span>
                    </div>
                    <div class="about-info">
                      <p>Hubungi Kami : </p>
                      <h3 class="number">0123-456-7890</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-img-wrap">
                  <div class="play-btn-02">
                    <a class="popup-video" href="https://youtu.be/Agss8lzlPkY?si=z-Al0fwlB4yoghRE">
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                  <div class="about-img about-img-big">
                    <img src="assets/images/herovid1about.png" alt="" />
                  </div>
                  <div class="about-img about-img-sm">
                    <img src="assets/images/herovid2about.png" alt="" />
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
                    <span class="counter">690</span>
                    <p>Pelanggan Senang</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="single-counter">
                  <div class="counter-img">
                    <img src="assets/images/counter-2.png" alt="" />
                  </div>
                  <div class="counter-content">
                    <span class="counter">473</span>
                    <p>Pekerjaan Selesai</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="single-counter">
                  <div class="counter-img">
                    <img src="assets/images/counter-3.png" alt="" />
                  </div>
                  <div class="counter-content">
                    <span class="counter">37</span>
                    <p>Skill Professional</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="single-counter single-counter-4">
                  <div class="counter-img">
                    <img src="assets/images/counter-1.png" alt="" />
                  </div>
                  <div class="counter-content">
                    <span class="counter">480</span>
                    <p>Postingan</p>
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
              <h3 class="sub-title">ALASAN MEMILIH KAMI</h3>
              <h2 class="title">Kami menyediakan jasa penyediaan pekerja yang bertalenta.</h2>
            </div>
            <div class="choose-us-content-wrap">
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="choose-us-item">
                    <div class="choose-us-img">
                      <Link to="/about">
                        <img src="assets/images/service-1.png" alt="" />
                      </Link>
                      <div class="choose-us-content">
                        <h3 class="title">Sistem Management Informasi</h3>
                        <p>Percepat inovasi dengan tim teknologi kelas dunia Kami akan mencocokkan Anda dengan seluruh tim jarak jauh yang terdiri dari pekerja lepas yang berbakat untuk semua kebutuhan anda.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="choose-us-item">
                    <div class="choose-us-img">
                      <Link to="/about">
                        <img src="assets/images/service-2.png" alt="" />
                      </Link>
                      <div class="choose-us-content">
                        <h3 class="title">Keamanan Informasi Database</h3>
                        <p>Percepat inovasi dengan tim teknologi kelas dunia Kami akan mencocokkan Anda dengan seluruh tim jarak jauh yang terdiri dari pekerja lepas yang berbakat untuk semua kebutuhan anda.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="choose-us-item">
                    <div class="choose-us-img">
                      <Link to="/about">
                        <img src="assets/images/service-3.png" alt="" />
                      </Link>
                      <div class="choose-us-content">
                        <h3 class="title">Teknologi Multifungsi</h3>
                        <p>Percepat inovasi dengan tim teknologi kelas dunia Kami akan mencocokkan Anda dengan seluruh tim jarak jauh yang terdiri dari pekerja lepas yang berbakat untuk semua kebutuhan anda.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="more-choose-content text-center">
                    <p>
                      Pelajari Lebih Lanjut{' '}
                      <Link to="/about">
                        Lebih Banyak Alasan <i class="fas fa-long-arrow-alt-right"></i>
                      </Link>{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-case-study-section-02 section-padding" style={{ backgroundImage: `url(assets/images/case-bg.png)` }}>
        <div class="container">
          <div class="case-study-wrap">
            <div class="section-title text-center">
              <h3 class="sub-title">Berdasarkan Pengalaman</h3>
              <h2 class="title white">Kami Menyediakan Pengalaman Terbaik</h2>
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
              },
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
                        <Link to="/team">
                          <img src="assets/images/team/team-1.jpg" alt="" />
                        </Link>
                      </div>
                      <div class="team-content">
                        <h3 class="name">
                          <Link to="/team">
                            Andrew <br /> Max Fetcher
                          </Link>
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
                        <Link to="/team">
                          <img src="assets/images/team/team-2.jpg" alt="" />
                        </Link>
                      </div>
                      <div class="team-content">
                        <h3 class="name">
                          <Link to="/team">
                            Arnold <br /> human
                          </Link>
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
                        <Link to="/team">
                          <img src="assets/images/team/team-3.jpg" alt="" />
                        </Link>
                      </div>
                      <div class="team-content">
                        <h3 class="name">
                          <Link to="/team">
                            Mike <br /> Holder
                          </Link>
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
                        <Link to="/team">
                          <img src="assets/images/team/team-4.jpg" alt="" />
                        </Link>
                      </div>
                      <div class="team-content">
                        <h3 class="name">
                          <Link to="/team">
                            Joakim <br /> Ken
                          </Link>
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
      <div class="section techwix-cta-section-02">
        <div class="container">
          <div class="cta-wrap" style={{ backgroundImage: `url(assets/images/bg/cta-bg.jpg)` }}>
            <div class="row align-items-center">
              <div class="col-xl-9 col-lg-8">
                <div class="cta-content">
                  <div class="cta-icon">
                    <img src="assets/images/cta-icon2.png" alt="" />
                  </div>
                  <p>Kami Memberikan Pengalaman pelanggan terbaik</p>
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
  );
}

export default Home;
