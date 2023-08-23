import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";
import SectionTitle from "../sectionTitle/SectionTitle";

const HomeOneInstructor = ({ background, color }) => {
  const [visible, setVisible] = useState("");
  return (
    <div
      className={`edu-instructor-area edu-section-gap ${
        background ? background : "eduvibe-home-one-instructor" 
      }`}
    >
      <div className="container eduvibe-animated-shape">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle
              classes="text-center"
              slogan="OUR TEAM"
              title="Meet Our Instructors​"
              color={color ? color : "white"}
            />
          </div>
        </div>
        <div className="row g-5 mt--20">
          {/* <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${
                visible === "team1" ? " eduvibe-hover-active" : ""
              }`}
              onMouseOver={() => setVisible("team1")}
              onMouseOut={() => setVisible("")}
            >
              <div className="edu-instructor">
                <div className="inner">
                  <div className="thumbnail">
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        `/instructor-details/${slugify("James Carlson")}`
                      }
                    >
                      <img
                        src="/images/instructor/instructor-03/Shahmir.png"
                        alt="team images"
                      />
                    </Link>
                  </div>
                  <div className="edu-instructor-info">
                    <h5 className="title">
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          `/instructor-details/${slugify("James Carlson")}`
                        }
                      >
                        Shah Meer Hashim Raza{" "}
                      </Link>
                    </h5>
                    <span className="desc">Sr .NET Developer</span>
                    <div className="team-share-info bg-transparent">
                      <a className="linkedin" href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                      <a className="facebook" href="#">
                        <i className="icon-Fb"></i>
                      </a>
                      <a className="twitter" href="#">
                        <i className="icon-Twitter"></i>
                      </a>
                      <a className="youtube" href="#">
                        <i className="icon-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${
                visible === "team2" ? " eduvibe-hover-active" : ""
              }`}
              onMouseOver={() => setVisible("team2")}
              onMouseOut={() => setVisible("")}
            >
              <div className="edu-instructor">
                <div className="inner">
                  <div className="thumbnail">
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        `/instructor-details/${slugify("Affan Saeed")}`
                      }
                    >
                      <img
                        src="/images/instructor/instructor-01/Affan_Saeed.jpg"
                        alt="team images"
                      />
                    </Link>
                  </div>
                  <div className="edu-instructor-info">
                    <h5 className="title">
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          `/instructor-details/${slugify("Affan Saeed")}`
                        }
                      >
                        Affan Saeed{" "}
                      </Link>
                    </h5>
                    <span className="desc">.net/C# Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${
                visible === "team3" ? " eduvibe-hover-active" : ""
              }`}
              onMouseOver={() => setVisible("team3")}
              onMouseOut={() => setVisible("")}
            >
              <div className="edu-instructor">
                <div className="inner">
                  <div className="thumbnail">
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        `/instructor-details/${slugify("Ahmed Naseem")}`
                      }
                    >
                      <img
                        src="/images/instructor/instructor-01/Ahmed_Naseem.jpg"
                        alt="team images"
                      />
                    </Link>
                  </div>
                  <div className="edu-instructor-info">
                    <h5 className="title">
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          `/instructor-details/${slugify("Ahmed Naseem")}`
                        }
                      >
                        Ahmed Naseem
                      </Link>
                    </h5>
                    <span className="desc">UI/UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${
                visible === "team4" ? " eduvibe-hover-active" : ""
              }`}
              onMouseOver={() => setVisible("team4")}
              onMouseOut={() => setVisible("")}
            >
              <div className="edu-instructor">
                <div className="inner">
                  <div className="thumbnail">
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        `/instructor-details/${slugify("Areeba Shakeel")}`
                      }
                    >
                      <img
                        src="/images/instructor/instructor-01/Areeba_Shakeel.jpg"
                        alt="team images"
                      />
                    </Link>
                  </div>
                  <div className="edu-instructor-info">
                    <h5 className="title">
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          `/instructor-details/${slugify("Areeba Shakeel")}`
                        }
                      >
                        Areeba Shakeel
                      </Link>
                    </h5>
                    <span className="desc">Web Developer​</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${
                visible === "team5" ? " eduvibe-hover-active" : ""
              }`}
              onMouseOver={() => setVisible("team5")}
              onMouseOut={() => setVisible("")}
            >
              <div className="edu-instructor">
                <div className="inner">
                  <div className="thumbnail">
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        `/instructor-details/${slugify("Kashif Hussain")}`
                      }
                    >
                      <img
                        src="/images/instructor/instructor-01/Kashif_Hussain.jpg"
                        alt="team images"
                      />
                    </Link>
                  </div>
                  <div className="edu-instructor-info">
                    <h5 className="title">
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          `/instructor-details/${slugify("Kashif Hussain")}`
                        }
                      >
                        Kashif Hussain
                      </Link>
                    </h5>
                    <span className="desc">Digital Marketer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
          <div className="shape-image shape-image-1">
            <img src="/images/shapes/shape-03-03.png" alt="Shape Thumb" />
          </div>
          <div className="shape-image shape-image-2">
            <img src="/images/shapes/shape-02-02.png" alt="Shape Thumb" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeOneInstructor;
