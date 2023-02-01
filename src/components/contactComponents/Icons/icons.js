import React from "react";
import "./icons.css";

export default function IconsContact({iconClass, heading, paragraph}) {
  return (
    <>
      <div className="icons-style displayFlex" >
        <div
          className="elementor-widget-container  "
          style={{
            boxSizing: "border-box",
            transition:
              "background 0.3s ease 0s, border 0.3s ease 0s, border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s, -webkit-border-radius 0.3s ease 0s, -webkit-box-shadow 0.3s ease 0s",
            display: "flex",
            justifyContent: "flex-start",
            margin: "0px 0px 24px",
          }}
        >
          <div className="tm-icon-box edumall-box">
            <div className="icons-box-wrapper-1">
              <div className="edumall-icon-wrap">
                <div className="edumall-icon-view first">
                  <div
                    className="edumall-icon-view-inner"
                    style={{ boxSizing: "border-box" }}
                  >
                    <div className="icons-contacts">
                      <i
                        className={iconClass}
                        aria-hidden="true"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="icon-box-content">
                <div className="heading-wrap">
                  <h3 className="heading marginLef addr-heading">{heading}</h3>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="elementor-element elementor-element-1c17667 elementor-widget elementor-widget-tm-heading animated edumallFadeInUp">
        <div className="elementor-widget-container">
          <div className="tm-modern-heading">
            <div className="heading-primary-wrap">
              <div className="heading-primary elementor-heading-title icons-style-2">
                {paragraph}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element  icons-style-txt elementor-element-276fc95 elementor-align-center elementor-widget elementor-widget-tm-separator animated edumallFadeInUp">
        <div className="elementor-widget-container icons-style-txt-2">
          <div className="tm-separator horizontal-line">
            {/* <div className="inner inner-line" /> */}
            <hr className="inner-line"></hr>
          </div>
        </div>
      </div>
    </>
  );
}
