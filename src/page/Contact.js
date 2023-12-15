import { useState } from 'react';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');

  const data = {
    nama: name,
    email: email,
    pesan: pesan,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const onSubmitMessage = async () => {
    try {
      const response = await fetch('https://toekangku-backend-5mballdzpa-et.a.run.app/v1/frontoffice/help/send', options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.success) {
        setName('');
        setEmail('');
        setPesan('');
        window.alert(data.message);
      } else {
        window.alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
                  <h2 class="title">Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section contact-info-section section-padding-02">
        <div class="container">
          <div class="contact-info-wrap">
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="single-contact-info text-center">
                  <div class="info-icon">
                    <img src="assets/images/info-1.png" alt="" />
                  </div>
                  <div class="info-content">
                    <h5 class="title">Hubungi Kami</h5>
                    <p>(+62) 400-630 123</p>
                    <p>(+62) 500-950 456</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="single-contact-info text-center">
                  <div class="info-icon">
                    <img src="assets/images/info-2.png" alt="" />
                  </div>
                  <div class="info-content">
                    <h5 class="title">Email Kami</h5>
                    <p>info@toekangku.com</p>
                    <p>mail@toekangku.com</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="single-contact-info text-center">
                  <div class="info-icon">
                    <img src="assets/images/info-3.png" alt="" />
                  </div>
                  <div class="info-content">
                    <h5 class="title">Kunjungi Kami</h5>
                    <p>Jakarta. 71 East 65th Street, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section techwix-contact-section techwix-contact-section-02 techwix-contact-section-03 section-padding-02">
        <div class="container">
          <div class="contact-wrap">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="contact-form">
                  <div class="contact-form-wrap">
                    <div class="heading-wrap text-center">
                      <span class="sub-title"> Pesan Khusus</span>
                      <h3 class="title">Bagaimana Kami Dapat Melayani Anda!</h3>
                    </div>
                    <div>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="single-form">
                            <input
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                              type="text"
                              placeholder="Name *"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="single-form">
                            <input
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              type="email"
                              placeholder="Email *"
                            />
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="single-form">
                            <textarea
                              value={pesan}
                              onChange={(e) => {
                                setPesan(e.target.value);
                              }}
                              placeholder="Write A Message"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="form-btn">
                            <button onClick={onSubmitMessage} class="btn" type="submit">
                              Kirim Pesan
                            </button>
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
      <div class="section contact-map-section">
        <div class="contact-map-wrap">
          <iframe
            title="Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8215733758193!2d106.74348627413163!3d-6.287169493701771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1d0125bf131%3A0x226f24018d8886c5!2sRTC%20Headquarters!5e0!3m2!1sen!2sid!4v1702024704088!5m2!1sen!2sid"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
