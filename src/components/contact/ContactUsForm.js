import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Result = ({ error, color }) => {
  return (
    <p className="success-message" style={{ color: error ? color : null }}>
      {error ? error : "Thanks for your query. We will contact with you soon."}
    </p>
  );
};

function ContactUsForm({ formStyle }) {
  const [result, setResult] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    emailjs.init("nCNAvN3x_AzOlKyP7");
    if (data.get("fullname").toString().length >= 3) {
      emailjs
        .send("service_mr9eoju", "template_w8prz8r", {
          to_name: "eSpark Institue Of Technical Training",
          from_name: data.get("fullname").toString(),
          message: data.get("message").toString(),
          from_email: data.get("email").toString(),
          subject: data.get("subject").toString(),
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
      setError("");
      setResult(true);
    } else {
      setResult(true);
      setError("Name Field Should be atleast 3 Characters");
    }
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
      <div className="col-lg-12">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            name="fullname"
            placeholder="Name*"
            required
          />
        </div>
      </div>

      <div className="col-lg-12">
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            name="email"
            placeholder="Email*"
            required
          />
        </div>
      </div>

      {/* <div className="col-lg-12">
        <div className="form-group">
          <input
            type="number"
            className="form-control form-control-lg"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              if (e) {
                setPhone(e.slice(0, 13));
              }
            }}
          />
        </div>
      </div> */}

      <div className="col-lg-12">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            name="subject"
            placeholder="Subject*"
            required
          />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            placeholder="Your Message*"
            required
          ></textarea>
        </div>
      </div>
      <div className="col-lg-12">
        <button className="rn-btn edu-btn w-100" type="submit">
          <span>Submit Now</span>
          <i className="icon-arrow-right-line-right"></i>
        </button>
      </div>
      {result ? (
        <div className="form-group">
          <Result error={error} color={"red"} />
        </div>
      ) : null}
    </form>
  );
}
export default ContactUsForm;
