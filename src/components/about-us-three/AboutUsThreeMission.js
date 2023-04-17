import React from "react";
import { Parallax } from "react-scroll-parallax";

const AboutUsThreeMission = () => {
  return (
    <div className="eduvibe-about-three-mission edu-mission-vision-area edu-section-gap border-bottom-1 bg-color-white">
      <div className="container eduvibe-animated-shape">
        <div className="row">
          <div className="col-lg-12">
            <div className="thumbnail mb--50">
              <div className="shape-image image-1">
                <Parallax speed={1} y={[0, 40]} tagOuter="figure">
                  <img
                    src="/images/mission/mission-gallery-01.jpg"
                    alt="Gallery Images"
                  />
                </Parallax>
              </div>
              <div className="shape-image image-2">
                <Parallax speed={1} y={[0, -20]} tagOuter="figure">
                  <img
                    src="/images/mission/mission-gallery-02.jpg"
                    alt="Gallery Images"
                  />
                </Parallax>
              </div>
              <div className="shape-image image-3">
                <Parallax speed={1} y={[0, 30]} tagOuter="figure">
                  <img
                    src="/images/mission/mission-gallery-03.jpg"
                    alt="Gallery Images"
                  />
                </Parallax>
              </div>
              <div className="shape-image image-4">
                <Parallax speed={1} y={[0, -18]} tagOuter="figure">
                  <img
                    src="/images/mission/mission-gallery-04.jpg"
                    alt="Gallery Images"
                  />
                </Parallax>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
          <div className="animated-image shape-image-1">
            <img src="/images/shapes/shape-04-01.png" alt="Shape Thumb" />
          </div>
          <div className="shape shape-1">
            <span className="shape-dot"></span>
          </div>
          <div className="shape shape-2">
            <span className="shape-dot"></span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="our-mission">
              <div className="section-title text-start">
                <span className="pre-title">Our Mission</span>
                <h3 className="title">
                  The Mission Behind <br /> eSpark’s Institute
                </h3>
                <p className="mt--30 mb--0">
                  Our mission at eSpark Institute is to empower individuals with
                  the skills and knowledge needed to succeed in the
                  rapidly-evolving world of technology. We strive to provide a
                  dynamic and innovative learning environment that fosters
                  creativity, critical thinking, and collaboration. Our goal is
                  to equip our students with the tools they need to stay ahead
                  of the curve and become the future leaders of the tech
                  industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our-vision">
              <div className="section-title text-start">
                <span className="pre-title">Our Vision</span>
                <h3 className="title">
                  The Story of Our <br /> Founders
                </h3>
                <p className="mt--30 mb--0">
                  Our founders envision a future where Pakistan's tech industry
                  is a global leader, fuelled by a new generation of talented
                  and innovative professionals who have been empowered by eSpark
                  Institute. Through our programs and courses, we strive to
                  bridge the skills gap and provide individuals with the
                  knowledge and expertise they need to excel in the fast-paced
                  and constantly evolving world of technology. Our ultimate goal
                  is to contribute to the growth and development of Pakistan's
                  tech ecosystem, and inspire a new era of progress and
                  prosperity for our country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsThreeMission;
