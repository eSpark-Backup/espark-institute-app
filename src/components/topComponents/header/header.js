import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DISPLAY_NONE,DISPLAY_BLOCK } from "../../../constants";
import { headerData } from "../../../helpers/header";



const Header = ({ open, setOpen }) => {
  const [menuMobile, setMenuMobile] = useState(true);
  // const displayBlock = "sub-menu children simple-menu display-Block-DropDown";
  // const displayNone = "children simple-menu";
  
  return (
    <>
      <div class="container">
        <div class="header-wrap">
          <div class="header-left">
            <div class="header-content-inner">
              <div class="branding">
                <div class="branding-logo-wrap">
                  <Link to={'/'}>
                    <a  >
                      <img
                        src="https://edumall.thememove.com/main/wp-content/themes/edumall/assets/images/logo/dark-logo.png"
                        alt="Main"
                        class="branding-logo dark-logo"
                      />
                    </a>
                      </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 
          <div class="header-category-menu">
           <a  class="header-icon category-menu-toggle">
              <div class="category-toggle-icon">
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 18 18"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="#000000"
                    fill-rule="evenodd"
                  >
                    <path d="M2,14 C3.1045695,14 4,14.8954305 4,16 C4,17.1045695 3.1045695,18 2,18 C0.8954305,18 0,17.1045695 0,16 C0,14.8954305 0.8954305,14 2,14 Z M9,14 C10.1045695,14 11,14.8954305 11,16 C11,17.1045695 10.1045695,18 9,18 C7.8954305,18 7,17.1045695 7,16 C7,14.8954305 7.8954305,14 9,14 Z M16,14 C17.1045695,14 18,14.8954305 18,16 C18,17.1045695 17.1045695,18 16,18 C14.8954305,18 14,17.1045695 14,16 C14,14.8954305 14.8954305,14 16,14 Z M2,7 C3.1045695,7 4,7.8954305 4,9 C4,10.1045695 3.1045695,11 2,11 C0.8954305,11 0,10.1045695 0,9 C0,7.8954305 0.8954305,7 2,7 Z M9,7 C10.1045695,7 11,7.8954305 11,9 C11,10.1045695 10.1045695,11 9,11 C7.8954305,11 7,10.1045695 7,9 C7,7.8954305 7.8954305,7 9,7 Z M16,7 C17.1045695,7 18,7.8954305 18,9 C18,10.1045695 17.1045695,11 16,11 C14.8954305,11 14,10.1045695 14,9 C14,7.8954305 14.8954305,7 16,7 Z M2,0 C3.1045695,0 4,0.8954305 4,2 C4,3.1045695 3.1045695,4 2,4 C0.8954305,4 0,3.1045695 0,2 C0,0.8954305 0.8954305,0 2,0 Z M9,0 C10.1045695,0 11,0.8954305 11,2 C11,3.1045695 10.1045695,4 9,4 C7.8954305,4 7,3.1045695 7,2 C7,0.8954305 7.8954305,0 9,0 Z M16,0 C17.1045695,0 18,0.8954305 18,2 C18,3.1045695 17.1045695,4 16,4 C14.8954305,4 14,3.1045695 14,2 C14,0.8954305 14.8954305,0 16,0 Z"></path>
                  </g>
                </svg>
              </div>
              <div class="category-toggle-text">{headerData.name}</div>
            </a>
            <nav class="header-category-dropdown-wrap">
              <ul class="header-category-dropdown">
                {headerData.categoryItems.map(item => <li class="cat-item">
                  <a>
                    {item.category}<span class="toggle-sub-menu"></span>
                  </a>
                  <ul class="children sub-categories">
                  {item.subCategory.map(item =>  <li class="cat-item">
                      <Link to={item.path}><a >
                        {item.name}
                      </a></Link>
                    </li> )}
                  </ul>
                </li> )}
              </ul>
            </nav>
          </div> */}

          <div class="header-right">
            <div class="header-content-inner">
              <div id="header-right-inner" class="header-right-inner">
                <div class="header-right-inner-content">
                  {/* <div class="header-search-form">
  <form role="search" method="get" class="search-form" action="https://edumall.thememove.com/main/">
  <label>
    <span class="screen-reader-text">Search for:</span>
    <input type="search" class="search-field"
          placeholder="Search&hellip;"
          value="" name="s"
          title="Search for:"/>
  </label>
  <button type="submit" class="search-submit">
    <span class="search-btn-icon fas fa-search"></span>
    <span class="search-btn-text">
      Search		</span>
  </button>
  </form>
  </div> */}

  <div id="page-navigation" class="navigation page-navigation">
                    <nav id="menu" class="menu menu--primary">
                      <ul
                        id="menu-primary"
                        class="menu__container sm sm-simple"
                      >
                        {headerData.menuitems.map(item =>item.display == false ? <li  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16 level-1 ">
                        <Link to={item.path}><a>
                            <div class="menu-item-wrap " >
                              <span class="menu-item-title">{item.name}</span>
                              <span> </span>
                            </div>
                          </a></Link>
                          </li>:           
                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16 level-1 ">
                       <Link to={item.path}>   <a>
                            <div class="menu-item-wrap">
                              <span class="menu-item-title">{item.name}</span>
                              <span class="toggle-sub-menu"> </span>
                            </div>
                          </a></Link>
                          <ul class="sub-menu children simple-menu dropDown">
                            {item.subMenu.map(sub => <li  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-236">
                             <Link to={sub.path} >  <a href="https://edumall.thememove.com/main/courses/?course_archive_preset=01">
                                <div class="menu-item-wrap">
                                  <span class="menu-item-title">
                                    {sub.name}
                                  </span>
                                </div>
                              </a></Link>
                            </li>)}
                          </ul>
                        </li>   
                          )}
                      </ul>
                    </nav>
               </div>
            </div>
          </div>
              <div
                id="page-open-mobile-menu"
                class="header-icon page-open-mobile-menu"
              >
                <div
                  class="burger-icon"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <span class="burger-icon-top"></span>
                  <span class="burger-icon-bottom"></span>
                </div>
              </div>
              {/* <div id="page-open-components" class="header-icon page-open-components">
              <div class="inner">
                <div class="circle circle-one"></div>
                  <div class="circle circle-two"></div>
              <div class="circle circle-three"></div>
            </div>
        </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        id="page-mobile-main-menu"
        class="page-mobile-main-menu"
        data-background="https://edumall.thememove.com/main/wp-content/themes/edumall/assets/images/mobile-bg.jpg"
      >
      <div class="inner">
          <div class="page-mobile-menu-header">
            <div class="page-mobile-popup-logo page-mobile-menu-logo">
              <a href="https://edumall.thememove.com/main/" rel="home">
                <img
                  src="https://edumall.thememove.com/main/wp-content/themes/edumall/assets/images/logo/dark-logo.png"
                  alt="Main"
                  width="148"
                />
              </a>
            </div>
            <div
              id="page-close-mobile-menu"
              class="page-close-mobile-menu"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <div class="burger-icon burger-icon-close">
                <span class="burger-icon-top"></span>
                <span class="burger-icon-bottom"></span>
              </div>
            </div>
          </div>

          <div class="page-mobile-menu-content">
            <ul id="mobile-menu-primary" class="menu__container">
              {headerData.menuitems.map(item =>item.display ==false ? <li  onClick={() => {
                    setOpen(!open);
                  }}  class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-19 level-1">
               <Link to={item.path}>  <a href="#">
                  <div class="menu-item-wrap">
                    <span class="menu-item-title">{item.name}</span>
                  </div>
                </a></Link>
              </li> :  <li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-309 level-1">
           <Link to={item.path}>     <a>
                  <div
                    class="menu-item-wrap"
                    onClick={() => {
                      setMenuMobile(!menuMobile);
                    }}
                  >
                    <span class="menu-item-title">Courses</span>
                    <span class="toggle-sub-menu"> </span>
                  </div>
                </a></Link>
                <ul className={menuMobile == true ? DISPLAY_BLOCK : DISPLAY_NONE}>
                  {item.subMenu.map(sub =>   <li onClick={() => {setOpen(!open)}} class="menu-item menu-item-type-custom menu-item-object-custom menu-item-313">
                    <Link to={sub.path}> <a >
                      <div class="menu-item-wrap">
                        <span class="menu-item-title">{sub.name}</span>
                      </div>
                    </a></Link>
                  </li> )}
                </ul>
              </li>  )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
