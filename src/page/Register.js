const Register = () => {
  return (
    <>
      <div class="section page-banner-section" style={{ backgroundImage: `url('assets/images/footer.png')` }}>
        <div class="shape-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="972.5px" height="970.5px">
            <path
              fill-rule="evenodd"
              stroke="rgb(255, 255, 255)"
              stroke-width="1px"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              fill="none"
              d="M38.245,381.102 L435.258,28.158 C480.467,-12.32 549.697,-7.964 589.888,37.244 L942.832,434.257 C983.23,479.466 978.955,548.697 933.746,588.888 L536.733,941.832 C491.524,982.23 422.293,977.955 382.103,932.745 L29.158,535.732 C-11.32,490.523 -6.963,421.293 38.245,381.102 Z"
            />
          </svg>
        </div>
        <div class="container">
          <div class="page-banner-wrap">
            <div class="row">
              <div class="col-lg-12">
                <div class="page-banner text-center">
                  <h2 class="title">Download Now!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section login-register-section section-padding-02">
        <div class="container">
          <div class="login-register-wrap">
            <div class="row gx-5">
              <div class="col-lg-6">
                <div class="login-register-box">
                  <div class="section-title">
                    <h2 class="title">Login</h2>
                  </div>
                  <div class="login-register-form">
                    <form action="#">
                      <div class="single-form">
                        <input type="text" class="form-control" placeholder="Username or email " />
                      </div>
                      <div class="single-form">
                        <input type="password" class="form-control" placeholder="Password" />
                      </div>
                      <div class="single-form form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                          Remember me
                        </label>
                      </div>
                      <div class="form-btn">
                        <button class="btn">Login</button>
                      </div>
                      <div class="single-form">
                        <p>
                          <a href="#">Lost your password?</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="login-register-box">
                  <div class="section-title">
                    <h2 class="title">Register</h2>
                  </div>
                  <div class="login-register-form">
                    <form action="#">
                      <div class="single-form">
                        <input type="text" class="form-control" placeholder="Email " />
                      </div>
                      <div class="single-form">
                        <input type="text" class="form-control" placeholder="Username or email " />
                      </div>
                      <div class="single-form">
                        <input type="password" class="form-control" placeholder="Password " />
                      </div>
                      <div class="single-form">
                        <input type="password" class="form-control" placeholder="Confirm Password " />
                      </div>
                      <div class="form-btn">
                        <button class="btn">Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
