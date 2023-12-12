import React from 'react';
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div id="header" class="section header-section">
      <div class="container">
        <div class="header-wrap">
          <div class="header-logo">
            <Link to="/">
              <img src="assets/images/logotoekangku.png" alt="" />
            </Link>
          </div>

          <div class="header-menu d-none d-lg-block">
            <ul class="main-menu">
              <li class="active-menu">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div class="header-meta">
            <div class="header-btn d-none d-xl-block">
              <Link class="btn" to="/login-register">
                Mulai Sekarang!
              </Link>
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
  );
}

export default Topbar;
