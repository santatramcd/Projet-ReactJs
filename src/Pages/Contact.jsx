import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="container py-3">
      <main class="main">
        <div class="page-title" data-aos="fade">
          <div class="heading">
            <div class="container">
              <div class="row d-flex justify-content-center text-center">
                <div class="col-lg-8">
                  <h1>Contact</h1>
                  <p class="mb-0">
                    Odio et unde deleniti. Deserunt numquam exercitationem.
                    Officiis quo odio sint voluptas consequatur ut a odio
                    voluptatem. Sit dolorum debitis veritatis natus dolores.
                    Quasi ratione sint. Sit quaerat ipsum dolorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav class="breadcrumbs">
            <div class="container">
              <ol>
                <li>
                  <a href="#"><Link to="/">Home</Link></a>
                </li>
                <li class="current">Contact</li>
              </ol>
            </div>
          </nav>
        </div>

        <section id="contact" class="contact section">
          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="info-wrap" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-5">
                <div class="col-lg-4">
                  <div class="info-item d-flex align-items-center">
                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Location</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="info-item d-flex align-items-center">
                    <i class="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="info-item d-flex align-items-center">
                    <i class="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form
              action="forms/contact.php"
              method="post"
              class="php-email-form"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="row gy-4">
                <div class="col-md-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Your Name"
                    required=""
                  />
                </div>

                <div class="col-md-6 ">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>

                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>

                <div class="col-md-12">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
