import React, { useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p className="success-message pt-2">
      Thanks for Subscripbing to Our Newsletter. We are excited to have you on board!
    </p>
  );
};


const NewsLettterOne = () => {
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    emailjs.init("nCNAvN3x_AzOlKyP7");

    emailjs
      .send("service_mr9eoju", "template_amf03t5", {
        to_name: "eSpark Institue Of Technical Training",
        from_email: data.get("email").toString(),
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <div className="edu-newsletter-area newsletter-style-1 edu-section-gap bg-color-primary">
      <div className="container eduvibe-animated-shape">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <SectionTitle
                classes="text-center"
                slogan="Sign up for our newsletter​"
                title="Get the Latest Updates"
              />
              <form action="" onSubmit={sendEmail}>
                <div className="newsletter-form newsletter-form-style-1 mt--60">
                  <div className="input-box">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your mail address*"
                      required
                    />
                    <div className="mail-icon">
                      <i className="icon-mail-open-line"></i>
                    </div>
                    <button className="send-button" type="submit">
                      <i className="icon-send-plane-fill"></i>
                    </button>
                  </div>
                </div>
                {result ? (
          <Result />
      ) : null}
              </form>
            </div>
          </div>
        </div>
        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
          <div className="shape-image shape-image-1">
            <img src="/images/shapes/shape-03-04.png" alt="Shape Thumb" />
          </div>
          <div className="shape-image shape-image-2">
            <img src="/images/shapes/shape-16.png" alt="Shape Thumb" />
          </div>
          <div className="shape-image shape-image-3">
            <img src="/images/shapes/shape-13-02.png" alt="Shape Thumb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLettterOne;
