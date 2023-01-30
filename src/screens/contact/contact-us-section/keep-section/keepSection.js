import React from "react";
import IconsContact from "../../../../components/contactComponents/Icons/icons";
import "./keepSection.css";

function KeepSection({ contactJson }) {
  return (
    <section className="">
      <div className="">
        <div className="row">
          <div className="col-sm-12  col-md-5">
            <div className=" colDivWrappr">
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="eitt-widget-wrap displayFlex">
                  <div className="elementor-element elementor-element-3c53756 elementor-widget elementor-widget-tm-heading animated edumallFadeInUp">
                    <div className="eitt-widget-container">
                      <div className="eitt-modern-heading">
                        <div className="heading-primary-wrap">
                          <h2 className="keep-haeding">
                            {contactJson.paraHeading}
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  {contactJson.iconsData.map((item) => (
                    <IconsContact
                      iconClass={item.iconClass}
                      heading={item.heading}
                      paragraph={item.paragraph}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12  col-md-7">
            <div>
              <iframe
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=eSpark Consulting Group&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="97%"
                height="580"
                loading="lazy"
                className="borderNone"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeepSection;
