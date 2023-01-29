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
        <style
          dangerouslySetInnerHTML={{
            __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
}

body {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  margin: 0px;
  color: #696969;
  background: center center / cover no-repeat fixed rgb(255, 255, 255);
  font-family: Gordita;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 1.86;
}
`,
          }}
        />
      </div>
    </div>
  );
}

export default ContactUs;
