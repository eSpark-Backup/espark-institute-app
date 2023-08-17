import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';
import ScrollTopButton from "./ScrollTopButton";
import { ABOUT, ADVERTISING_WITH_META, BASIC_WEB_DEVELOPMENT, CONTACT, COURSES, FAQ, GRAPHIC_DESIGNING, HOME, PRIVACY_POLICY, PROGRAMMING_FUNDAMENTALS } from "../../constants/Constants";


const FooterOne = () => {
  return (
    <>
      <footer className="eduvibe-footer-one edu-footer footer-style-default">
        <div className="footer-top">
          <div className="container eduvibe-animated-shape">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="edu-footer-widget">
                  <div className="logo">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <img
                        className="logo-light"
                        src="/images/logo/Institute_White.png"
                        alt="Footer Logo"
                      />
                    </Link>
                  </div>
                  <p className="description">
                    <span className="strong">At eSpark Institute,</span> we're
                    dedicated to deliver hands-on and practical education to
                    students, aimed at preparing them for a successful career in
                    the tech industry. Join us today to take the first step
                    towards a successful career!​
                  </p>
                  <ul className="social-share">
                    <li>
                      <a href="#">
                        <i className="icon-Fb"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <FaInstagram style={{ fontSize: 25, marginBottom:6}} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="edu-footer-widget explore-widget">
                  <h5 className="widget-title">Explore</h5>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                    <li>
                        <Link to="#">
                          <i className="icon-Double-arrow"></i>{HOME}
                        </Link>
                      </li>
                      <li>
                        <Link to="/about-us">
                          <i className="icon-Double-arrow"></i>{ABOUT}
                        </Link>
                      </li>
                      <li>
                        <Link to="/courses">
                          <i className="icon-Double-arrow"></i>{COURSES}
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact-us">
                          <i className="icon-Double-arrow"></i>{CONTACT}
                        </Link>
                      </li>
                      <li>
                        <Link to="/faqs">
                          <i className="icon-Double-arrow"></i>{FAQ}
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacypolicy">
                          <i className="icon-Double-arrow"></i>{PRIVACY_POLICY}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="edu-footer-widget quick-link-widget">
                  <h5 className="widget-title">Courses</h5>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      <li>
                        <Link to="/course-details/1">
                          <i className="icon-Double-arrow"></i>{PROGRAMMING_FUNDAMENTALS}
                        </Link>
                      </li>
                      <li>
                        <Link to="/course-details/2">
                          <i className="icon-Double-arrow"></i>{GRAPHIC_DESIGNING}
                        </Link>
                      </li>
                      <li>
                        <Link to="/course-details/3">
                          <i className="icon-Double-arrow"></i>{BASIC_WEB_DEVELOPMENT}
                        </Link>
                      </li>
                      <li>
                        <Link to="/course-details/4">
                          <i className="icon-Double-arrow"></i>{ADVERTISING_WITH_META}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="edu-footer-widget">
                  <h5 className="widget-title">Contact Info</h5>
                  <div className="inner">
                    <div className="widget-information">
                      <ul className="information-list">
                        <li>
                          <i className="icon-map-pin-line"></i>301/B 3rd Floor &
                          401/A 4th Floor, Blossom Trade Centre,Block 1
                          Gulistan-e-Johar, Karachi, 74300
                        </li>
                        <li>
                          <i className="icon-phone-fill"></i>
                          <a href="tel: +923232788259">+92(323-2788259)</a>
                        </li>
                        {/* <li><i className="icon-phone-fill"></i><a href="tel: + 1 (237) 382-2840">+ 1 (237) 382-2840</a></li> */}
                        <li>
                          <i className="icon-mail-line-2"></i>
                          <a
                            target="_blank"
                            href="mailto:Info@espark-institute.com"
                          >
                            Info@espark-institute.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shape-dot-wrapper shape-wrapper d-md-block d-none">
              <div className="shape-image shape-image-1">
                <img src="/images/shapes/shape-21-01.png" alt="Shape Thumb" />
              </div>
              <div className="shape-image shape-image-2">
                <img src="/images/shapes/shape-35.png" alt="Shape Thumb" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area copyright-default">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  {/* <p>Copyright 2022 <a href="#">EduVibe</a> Designed By <a href="https://themeforest.net/user/devsvibe">DevsVibe</a>. All Rights
                                        Reserved</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTopButton />
    </>
  );
};

export default FooterOne;
