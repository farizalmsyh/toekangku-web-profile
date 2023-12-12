import React from 'react';
import { Link } from 'react-router-dom';

function Footbar() {
  return (
    <div class="section footer-section footer-section-03" style={{ backgroundColor: `#1E293B` }}>
      <div class="container">
        <div class="footer-widget-wrap">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget-about">
                <Link class="footer-logo" to="/">
                  <img src="assets/images/logotoekangku.png" alt="Logo" />
                </Link>
                <p>Accelerate innovation with world-class tech teams We’ll match you to a professional worker.</p>
                <div class="footer-social">
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
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget">
                <h4 class="footer-widget-title">Useful Links</h4>

                <div class="widget-link">
                  <ul class="link">
                    <li>
                      <a href="javascript:void(0)">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">About Company</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Payment Gateway</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget">
                <h4 class="footer-widget-title">Our Services</h4>

                <div class="widget-link">
                  <ul class="link">
                    <li>
                      <a href="javascript:void(0)">Job Portal</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Job Fair</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Outsourcing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget">
                <h4 class="footer-widget-title">Contact Information</h4>

                <div class="widget-info">
                  <ul>
                    <li>
                      <div class="info-icon">
                        <i class="flaticon-phone-call"></i>
                      </div>
                      <div class="info-text">
                        <span>
                          <a href="javascript:void(0)">+62 896 5484 1252</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="info-icon">
                        <i class="far fa-envelope-open"></i>
                      </div>
                      <div class="info-text">
                        <span>
                          <a href="javascript:void(0)">contact@toekangku.com</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="info-icon">
                        <i class="flaticon-pin"></i>
                      </div>
                      <div class="info-text">
                        <span>71 East 65th Street, INA</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright-area">
        <div class="container">
          <div class="footer-copyright-wrap">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="copyright-text text-center">
                  <p>© Copyrights 2023 ToekangKu All rights reserved. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footbar;
