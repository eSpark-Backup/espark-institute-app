import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import ContactUsForm from "../../components/contact/ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <SEO title="Contact Us" />
      <Layout>
        <BreadcrumbOne
          title="Contact Us"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Contact Us"
        />
        <div className="eduvibe-contact-us edu-contact-us-area edu-section-gap bg-color-white">
          <div className="container eduvibe-animated-shape">
            <div className="row g-5">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="pre-title">Need Help?</span>
                  <h3 className="title">Get In touch with us</h3>
                </div>
              </div>
            </div>
            <div className="row g-5 mt--20">
              <div className="col-lg-6">
                <div className="contact-info pr--70 pr_lg--0 pr_md--0 pr_sm--0">
                  <div className="row g-5">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="contact-address-card-1 website">
                        <div className="inner">
                          <div className="icon">
                            <i className="ri-global-line"></i>
                          </div>
                          <div className="content">
                            <h6 className="title">Our Website</h6>
                            <p>
                              <a href="https://themeforest.net/user/devsvibe/eduvibe">
                              www.espark-institute.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="contact-address-card-1 phone">
                        <div className="inner">
                          <div className="icon">
                            <i className="icon-Headphone"></i>
                          </div>
                          <div className="content">
                            <h6 className="title">Call Us On</h6>
                            <p>
                              <a href="tel: +9232 (327) 8259">
                              +9232 (327) 8259
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="contact-address-card-1 email">
                        <div className="inner">
                          <div className="icon">
                            <i className="icon-mail-open-line"></i>
                          </div>
                          <div className="content">
                            <h6 className="title">Email Us</h6>
                            <p>
                              <a href="mailto:info@espark-institute.com">
                              info@espark-institute.com
                              </a>
                            </p>
                            <p>
                              <a href="mailto:support@espark-institute.com">
                              support@espark-institute.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="contact-address-card-1 location">
                        <div className="inner">
                          <div className="icon">
                            <i className="icon-map-pin-line"></i>
                          </div>
                          <div className="content">
                            <h6 className="title">Our Location</h6>
                            <p>401/B, Blossom Trade Center, Block 1, Gulistan-e-Jauhar, Karachi</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <ContactUsForm formStyle="rnt-contact-form rwt-dynamic-form row" />
              </div>
            </div>

            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
              <div className="shape-image shape-image-1">
                <img src="/images/shapes/shape-04-01.png" alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-2">
                <img src="/images/shapes/shape-02-08.png" alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-3">
                <img src="/images/shapes/shape-15.png" alt="Shape Thumb" />
              </div>
            </div>
          </div>
        </div>

        <div className="edu-contact-map-area edu-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="google-map alignwide">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14472.341891430968!2d67.115604!3d24.929158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33feab1c28595%3A0xa3b2a5dc2f97a82e!2seSpark%20Consulting%20Group!5e0!3m2!1sen!2s!4v1681372641102!5m2!1sen!2s"
                    height="500"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default ContactUs;
