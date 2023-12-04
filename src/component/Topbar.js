import React from 'react'

function Topbar() {
    return (
        <div id="header" class="section header-section">
        <div class="container">
          <div class="header-wrap">
            <div class="header-logo">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>

            <div class="header-menu d-none d-lg-block">
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

            <div class="header-meta">
              <div class="header-cart dropdown">
                <button class="cart-btn" data-bs-toggle="dropdown">
                  <i class="flaticon-shopping-cart"></i>
                  <span class="count">0</span>
                </button>
                <div class="dropdown-menu dropdown-cart">
                  <div class="cart-items">
                    <div class="single-cart-item">
                      <div class="item-image">
                        <img src="assets/images/shop-cart-1.jpg" alt="cart" />
                      </div>
                      <div class="item-content">
                        <h4 class="title">
                          <a href="javascript:void(0)">Apple Iphone X</a>
                        </h4>
                        <span class="quantity">2 x $59.99</span>
                      </div>
                      <button class="btn-close"></button>
                    </div>
                    <div class="single-cart-item">
                      <div class="item-image">
                        <img src="assets/images/shop-cart-2.jpg" alt="cart" />
                      </div>
                      <div class="item-content">
                        <h4 class="title">
                          <a href="javascript:void(0)">Sony Xperia Tablet</a>
                        </h4>
                        <span class="quantity">2 x $59.99</span>
                      </div>
                      <button class="btn-close"></button>
                    </div>
                    <div class="single-cart-item">
                      <div class="item-image">
                        <img src="assets/images/shop-cart-3.jpg" alt="cart" />
                      </div>
                      <div class="item-content">
                        <h4 class="title">
                          <a href="javascript:void(0)">Camera Digital</a>
                        </h4>
                        <span class="quantity">2 x $59.99</span>
                      </div>
                      <button class="btn-close"></button>
                    </div>
                  </div>
                  <div class="cart-total">
                    <span class="label">Subtotal:</span>
                    <span class="value">0</span>
                  </div>
                  <div class="cart-btns">
                    <a class="btn" href="javascript:void(0)">
                      View Cart
                    </a>
                    <a class="btn btn-2" href="javascript:void(0)">
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
              <div class="header-search">
                <a class="search-btn" href="javascript:void(0)">
                  <i class="flaticon-loupe"></i>
                </a>
                <div class="search-wrap">
                  <div class="search-inner">
                    <i id="search-close" class="flaticon-close search-close"></i>
                    <div class="search-cell">
                      <form action="#">
                        <div class="search-field-holder">
                          <input class="main-search-input" type="search" placeholder="Search Your Keyword..." />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="header-btn d-none d-xl-block">
                <a class="btn" href="login-register.html">
                  Get Started
                </a>
              </div>
              <div class="header-toggle d-lg-none">
                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Topbar