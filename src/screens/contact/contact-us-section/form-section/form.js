import React from "react";
import InputField from "../../../../components/inputField/inputField";
import "./form.css";


function FormSection() {
  return (
    <section className=" form-wrapper elementor-section elementor-inner-section elementor-element elementor-element-6f813c3 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-column-vertical-align-stretch">
      <div>
        <div>
          <div className="row">
            <div className="col-md-5">
              <div className="txt-message-wrapper">
                <h1 className="txt-Style">Send Messages</h1>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-sm-6 col-md-6 ">
                  <InputField placeholder="Name" />
                </div>
                <div className="col-sm-6 col-md-6">
                  <InputField placeholder="Name" />
                </div>
                <div className="col-md-12">
                  <div style={{ marginTop: "15px" }}>
                    <textarea
                      className="wpcf7-form-control wpcf7-textarea txt-area-contact"
                      name="your-message"
                      cols={40}
                      rows={10}
                      placeholder="Message"
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                    <div className="btnWidth">
                       <InputField placeholder="Name" type="submit" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
