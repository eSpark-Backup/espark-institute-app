import React from "react";
import { contactJson } from "../../helpers/contact";
import FormSection from "./contact-us-section/form-section/form";
import KeepSection from "./contact-us-section/keep-section/keepSection";
import "./contactUs.css";

function ContactUs() {
  return (
    <div className="marginTop">
      <div id="page-title-bar" class="page-title-bar page-title-bar-01">
        <div class="page-title-bar-inner">
          <div class="page-title-bar-bg"></div>
          <div>
            <div class="row row-xs-center">
              <div class="col-md-12">
                <div class="page-title-bar-heading">
                  <h1 class="heading">{contactJson.mainheading}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="elementor-section elementor-top-section elementor-element elementor-element-4f98def elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-content-align-center elementor-section-column-vertical-align-stretch">
          <div className="elementor-container elementor-column-gap-extended contact-wrapper-align">
            <div className="elementor-row">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f44219f">
                <div className="elementor-column-wrap elementor-element-populated">
                  <div>
                    <KeepSection contactJson={contactJson} />
                    <FormSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
