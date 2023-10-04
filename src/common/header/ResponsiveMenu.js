import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const ResponsiveMenu = ({ show, onClose, showSearch, onSearch, buttonStyle }) => {
  var elements = document.querySelectorAll(
    ".popup-mobile-menu .has-droupdown > a"
  );
  var elementsTwo = document.querySelectorAll(
    ".popup-mobile-menu .with-megamenu > a"
  );
  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector(".submenu").classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  for (var j in elementsTwo) {
    if (elementsTwo.hasOwnProperty(i)) {
      elementsTwo[j].onclick = function () {
        this.parentElement
          .querySelector(".rn-megamenu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  return (
    <>
      <div className={`popup-mobile-menu ${show ? "active" : ""}`}>
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <Link to={process.env.PUBLIC_URL + "/"} onClick={onClose}>
                <img src="/images/logo/institute-logo.png" alt="Main Logo" />
              </Link>
            </div>
            <div className="close-menu">
              <button className="close-button" onClick={onClose}>
                <i className="ri-close-line"></i>
              </button>
            </div>
          </div>
          <Nav onClose={onClose} />
          <div className="quote-icon quote-user d-md-block ml--15 ml_sm--5">
            <Link
              className={`edu-btn btn-medium left-icon header-button ${
                buttonStyle || ""
              }`}
              to={process.env.PUBLIC_URL + "/courses"}
            >
              <i className="ri-user-line"></i>Enroll Now
            </Link>
          </div>
        </div>
      </div>

      <div className={`edu-search-popup ${showSearch ? "open" : ""}`}>
        <div className="close-button">
          <button className="close-trigger" onClick={onSearch}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="inner">
          <form className="search-form" action="#">
            <input
              type="text"
              className="eduvibe-search-popup-field"
              placeholder="Search Here..."
            />
            <button className="submit-button">
              <i className="icon-search-line"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
