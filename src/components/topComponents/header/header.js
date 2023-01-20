import React from "react";

const Header = () => {
  return (
    <div>
        {/* <div class="container">
              <div class="header-wrap"> 
                <div class="header-left">
                  <div class="header-content-inner">
                    <div class="branding">
                    <div class="branding-logo-wrap">
                          <a href="https://edumall.thememove.com/main/" rel="home">
                                          <img src="https://edumall.thememove.com/main/wp-content/themes/edumall/assets/images/logo/dark-logo.png" alt="Main"
                                class="branding-logo dark-logo"/>
                                    </a>
                        </div>
        </div>
                  </div>
                </div>

                <div class="header-category-menu">
          <a href="#" class="header-icon category-menu-toggle">
            <div class="category-toggle-icon">
              <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g stroke="none" stroke-width="1" fill="#000000" fill-rule="evenodd">
                <path d="M2,14 C3.1045695,14 4,14.8954305 4,16 C4,17.1045695 3.1045695,18 2,18 C0.8954305,18 0,17.1045695 0,16 C0,14.8954305 0.8954305,14 2,14 Z M9,14 C10.1045695,14 11,14.8954305 11,16 C11,17.1045695 10.1045695,18 9,18 C7.8954305,18 7,17.1045695 7,16 C7,14.8954305 7.8954305,14 9,14 Z M16,14 C17.1045695,14 18,14.8954305 18,16 C18,17.1045695 17.1045695,18 16,18 C14.8954305,18 14,17.1045695 14,16 C14,14.8954305 14.8954305,14 16,14 Z M2,7 C3.1045695,7 4,7.8954305 4,9 C4,10.1045695 3.1045695,11 2,11 C0.8954305,11 0,10.1045695 0,9 C0,7.8954305 0.8954305,7 2,7 Z M9,7 C10.1045695,7 11,7.8954305 11,9 C11,10.1045695 10.1045695,11 9,11 C7.8954305,11 7,10.1045695 7,9 C7,7.8954305 7.8954305,7 9,7 Z M16,7 C17.1045695,7 18,7.8954305 18,9 C18,10.1045695 17.1045695,11 16,11 C14.8954305,11 14,10.1045695 14,9 C14,7.8954305 14.8954305,7 16,7 Z M2,0 C3.1045695,0 4,0.8954305 4,2 C4,3.1045695 3.1045695,4 2,4 C0.8954305,4 0,3.1045695 0,2 C0,0.8954305 0.8954305,0 2,0 Z M9,0 C10.1045695,0 11,0.8954305 11,2 C11,3.1045695 10.1045695,4 9,4 C7.8954305,4 7,3.1045695 7,2 C7,0.8954305 7.8954305,0 9,0 Z M16,0 C17.1045695,0 18,0.8954305 18,2 C18,3.1045695 17.1045695,4 16,4 C14.8954305,4 14,3.1045695 14,2 C14,0.8954305 14.8954305,0 16,0 Z"></path>
            </g>
        </svg>
            </div>
            <div class="category-toggle-text">
              Category		</div>
          </a>

          <nav class="header-category-dropdown-wrap">
            <ul class="header-category-dropdown">
                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/art-design/">
                    Art &amp; Design													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/art-design/">
                            All Art &amp; Design									</a>
                        </li>
                      
                                      
                        <li data-id="31"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/design-tools/">Design Tools																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="29"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/graphic-design/">Graphic Design																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="30"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/web-design/">Web Design																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/business/">
                    Business													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/business/">
                            All Business									</a>
                        </li>
                      
                                      
                        <li data-id="36"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/communications/">Communications																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="32"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/entrepreneurship/">Entrepreneurship																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="33"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/finance-business/">Finance																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="34"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/management/">Management																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="35"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/sales/">Sales																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="37"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/strategy-analytics/">Strategy &amp; Analytics																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/data-science/">
                    Data Science													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/data-science/">
                            All Data Science									</a>
                        </li>
                      
                                      
                        <li data-id="40"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/artificial-intelligence/">Artificial Intelligence																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="41"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/big-data/">Big Data																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="38"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/data-analysis/">Data Analysis																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="39"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/data-modeling/">Data Modeling																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="42"
                            class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/machine-learning/">Machine Learning																			</a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/development/">
                    Development													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/development/">
                            All Development									</a>
                        </li>
                      
                                      
                        <li data-id="47"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/database/">Database																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="45"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/game-development/">Game Development																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="46"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/mobile-apps/">Mobile Apps																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="44"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/programming-languages/">Programming Languages																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="43"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/web-development/">Web Development																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/finance/">
                    Finance													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/finance/">
                            All Finance									</a>
                        </li>
                      
                                      
                        <li data-id="48"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/accounting/">Accounting																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="51"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/cryptocurrency/">Cryptocurrency																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="50"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/financial-analysis/">Financial Analysis																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="49"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/investing-trading/">Investing &amp; Trading																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/health-fitness/">
                    Health &amp; Fitness													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/health-fitness/">
                            All Health &amp; Fitness									</a>
                        </li>
                      
                                      
                        <li data-id="59"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/dieting/">Dieting																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="52"
                            class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/fitness/">Fitness																			</a>
                        </li>
                                      
                        <li data-id="54"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/mental-health/">Mental Health																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="53"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/nutrition/">Nutrition																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="58"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/yoga/">Yoga																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/lifestyle/">
                    Lifestyle													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/lifestyle/">
                            All Lifestyle									</a>
                        </li>
                      
                                      
                        <li data-id="57"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/beauty-makeup/">Beauty &amp; Makeup																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="55"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/food-beverages/">Food &amp; Beverages																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="56"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/pet-care-training/">Pet care &amp; Training																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/marketing/">
                    Marketing													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/marketing/">
                            All Marketing									</a>
                        </li>
                      
                                      
                        <li data-id="63"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/advertising/">Advertising																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="60"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/digital-marketing/">Digital Marketing																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="65"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/growth-hacking/">Growth Hacking																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="64"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/public-relations/">Public Relations																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="62"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/search-engine-optimization/">Search Engine Optimization																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="61"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/social-media-marketing/">Social Media Marketing																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/music/">
                    Music													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/music/">
                            All Music									</a>
                        </li>
                      
                                      
                        <li data-id="66"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/instruments/">Instruments																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="69"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/music-techniques/">Music Techniques																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="67"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/production/">Production																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="68"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/vocal/">Vocal																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/personal-development/">
                    Personal Development													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/personal-development/">
                            All Personal Development									</a>
                        </li>
                      
                                      
                        <li data-id="72"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/career-development/">Career Development																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="71"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/leadership/">Leadership																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="70"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/productivity/">Productivity																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="73"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/self-esteem/">Self Esteem																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/photography/">
                    Photography													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/photography/">
                            All Photography									</a>
                        </li>
                      
                                      
                        <li data-id="74"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/digital-photography/">Digital Photography																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="75"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/photography-fundamentals/">Photography Fundamentals																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="76"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/photography-tools/">Photography Tools																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                              <li class="cat-item">
                  <a href="https://edumall.thememove.com/main/course-category/teaching-academics/">
                    Teaching &amp; Academics													<span class="toggle-sub-menu"></span>
                              </a>

                              <ul class="children sub-categories">
                                      <li class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/teaching-academics/">
                            All Teaching &amp; Academics									</a>
                        </li>
                      
                                      
                        <li data-id="80"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/engineering/">Engineering																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="77"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/language/">Language																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="78"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/math/">Math																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="189"
                            class="cat-item">
                          <a href="https://edumall.thememove.com/main/course-category/other/">Other																			</a>
                        </li>
                                      
                        <li data-id="79"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/science/">Science																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                      
                        <li data-id="81"
                            class="cat-item has-children">
                          <a href="https://edumall.thememove.com/main/course-category/teacher-training/">Teacher Training																					<span class="toggle-sub-menu"></span>
                                              </a>
                        </li>
                                  </ul>
                          </li>

                  </ul>
          </nav>
        </div>

                <div class="header-right">
                  <div class="header-content-inner">
                    <div id="header-right-inner" class="header-right-inner">
                      <div class="header-right-inner-content">
                        
                        <div class="header-search-form">
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
        </div>

                        <div id="page-navigation" class="navigation page-navigation">
          <nav id="menu" class="menu menu--primary">
            <ul id="menu-primary" class="menu__container sm sm-simple"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-15 level-1 has-mega-menu"><a href="https://edumall.thememove.com/main/"><div class="menu-item-wrap"><span class="menu-item-title">Home</span><span class="toggle-sub-menu"> </span></div></a><ul class="sub-menu children mega-menu">	<li class="menu-item menu-item-type-post_type menu-item-object-ic_mega_menu menu-item-2401"><div class="mega-menu-content">		<div data-elementor-type="wp-post" data-elementor-id="2387" class="elementor elementor-2387" data-elementor-settings="[]">
                    <div class="elementor-inner">
                      <div class="elementor-section-wrap">
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-fd846ca elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-content-align-center elementor-section-column-vertical-align-stretch" data-id="fd846ca" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-extended">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-bdf1c58" data-id="bdf1c58" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-d60b87c edumall-list-layout-block elementor-widget elementor-widget-tm-list" data-id="d60b87c" data-element_type="widget" data-widget_type="tm-list.default">
                <div class="elementor-widget-container">
                  <div class="edumall-list">
                        <div class="item elementor-repeater-item-14f2e94">

                    <a class="link" href="https://edumall.thememove.com/">
                    <div class="list-header">
                                                                  <div class="text-wrap">
                                          <div class="text">Landing</div>
                                      </div>

                                  </div>

                    </a>
                  </div>
                            <div class="item elementor-repeater-item-4522670">

                    <a class="link" href="https://edumall.thememove.com/main/">
                    <div class="list-header">
                                                                  <div class="text-wrap">
                                          <div class="text">Main Demo</div>
                                      </div>

                                      <div class="badge">Hot</div>
                                  </div>

                    </a>
                  </div>
                            <div class="item elementor-repeater-item-719de04">

                    <a class="link" href="https://edumall.thememove.com/main/course-hub/">
                    <div class="list-header">
                                                                  <div class="text-wrap">
                                          <div class="text">Course Hub</div>
                                      </div>

                                  </div>

                    </a>
                  </div>
                            <div class="item elementor-repeater-item-f38caaa">

                    <a class="link" href="https://edumall.thememove.com/main/online-academy/">
                    <div class="list-header">
                                                                  <div class="text-wrap">
                                          <div class="text">Online Academy</div>
                                      </div>

                                      <div class="badge">Hot</div>
                                  </div>

                    </a>
                  </div>
                            <div class="item elementor-repeater-item-e679b22">

                    <a class="link" href="https://edumall.thememove.com/main/university/">
                    <div class="list-header">
                                                                  <div class="text-wrap">
                                          <div class="text">University</div>
                                      </div>

                                  </div>

                    </a>
                  </div>
                      </div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-81affe9" data-id="81affe9" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-a66ba11 edumall-list-layout-block elementor-widget elementor-widget-tm-list" data-id="a66ba11" data-element_type="widget" data-widget_type="tm-list.default">
                <div class="elementor-widget-container">
                  <div class="edumall-list">
                        <div class="item elementor-repeater-item-14f2e94">

                    <a class="link" href="https://edumall.thememove.com/main/education-center/">
                    <div class="list-header">
                                                                  <div class="text-wrap">
                                          <div class="text">Education Center</div>
                                      </div>

                                      <div class="badge">Hot</div>
                                  </div>

                    </a>
                  </div>
                            <div class="item elementor-repeater-item-719de04">

                    <a class="link" href="https://edumall.thememove.com/main/language-academic/">
                    <div class="list-header">
                                                                  <div class="text-wrap">
                                          <div class="text">Language Academic</div>
                                      </div>

                                  </div>

                    </a>
                  </div>
                            <div class="item elementor-repeater-item-f38caaa">

                    <a class="link" href="https://edumall.thememove.com/main/single-instructor/">
                    <div class="list-header">
                                                                  <div class="text-wrap">
                                          <div class="text">Single Instructor</div>
                                      </div>

                                  </div>

                    </a>
                  </div>
                            <div class="item elementor-repeater-item-4522670">

                    <a class="link" href="https://edumall.thememove.com/main/dev/">
                    <div class="list-header">
                                                                  <div class="text-wrap">
                                          <div class="text">Dev</div>
                                      </div>

                                      <div class="badge">New</div>
                                  </div>

                    </a>
                  </div>
                            <div class="item elementor-repeater-item-88d2c56">

                    <a class="link" href="https://edumall.thememove.com/main/online-art/">
                    <div class="list-header">
                                                                  <div class="text-wrap">
                                          <div class="text">Online Art</div>
                                      </div>

                                      <div class="badge">New</div>
                                  </div>

                    </a>
                  </div>
                      </div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ba0abd1" data-id="ba0abd1" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-014f41d elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch" data-id="014f41d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div class="elementor-container elementor-column-gap-extended">
                      <div class="elementor-row">
                  <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a208421" data-id="a208421" data-element_type="column">
              <div class="elementor-column-wrap elementor-element-populated">
                      <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-2bdd83d elementor-widget elementor-widget-tm-heading" data-id="2bdd83d" data-element_type="widget" data-widget_type="tm-heading.default">
                <div class="elementor-widget-container">
                  <div class="tm-modern-heading">
              
                  <div class="heading-primary-wrap">
              <h2 class="heading-primary elementor-heading-title">Achieve Your Goals With EduMall</h2>		</div>
            
              
                  </div>
                </div>
                </div>
                <div class="elementor-element elementor-element-fb175d6 elementor-widget elementor-widget-tm-button" data-id="fb175d6" data-element_type="widget" data-widget_type="tm-button.default">
                <div class="elementor-widget-container">
                  <div class="tm-button-wrapper">
              <a href="https://themeforest.net/item/edumall-lms-education-wordpress-theme/29240444" target="_blank" rel="nofollow" class="tm-button-link tm-button style-flat tm-button-xs" role="button">
                    <div class="button-content-wrapper">
              
                      <span class="button-text">Purchase now</span>
              
                  </div>
            
                      </a>
            </div>
                </div>
                </div>
                    </div>
                  </div>
            </div>
                        </div>
                  </div>
            </section>
                    </div>
                  </div>
            </div>
                        </div>
                  </div>
            </section>
                    </div>
                    </div>
                  </div>
            </div></li>
        </ul>
        </li>
        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16 level-1"><a href="https://edumall.thememove.com/main/courses/"><div class="menu-item-wrap"><span class="menu-item-title">Courses</span><span class="toggle-sub-menu"> </span></div></a><ul class="sub-menu children simple-menu">	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-236"><a href="https://edumall.thememove.com/main/courses/?course_archive_preset=01"><div class="menu-item-wrap"><span class="menu-item-title">Grid Basic Layout</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-233"><a href="https://edumall.thememove.com/main/courses/?course_archive_preset=02"><div class="menu-item-wrap"><span class="menu-item-title">Grid Modern Layout</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-232"><a href="https://edumall.thememove.com/main/courses/?course_archive_preset=03"><div class="menu-item-wrap"><span class="menu-item-title">Grid Full Layout</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-234"><a href="https://edumall.thememove.com/main/courses/?course_archive_preset=04"><div class="menu-item-wrap"><span class="menu-item-title">Grid Left Sidebar</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-376"><a href="https://edumall.thememove.com/main/courses/?course_archive_preset=05"><div class="menu-item-wrap"><span class="menu-item-title">Grid Right Sidebar</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-377"><a href="https://edumall.thememove.com/main/courses/?course_archive_preset=06"><div class="menu-item-wrap"><span class="menu-item-title">List Sidebar</span></div></a></li>
          <li class="menu-item menu-item-type-taxonomy menu-item-object-course-category menu-item-321"><a href="https://edumall.thememove.com/main/course-category/art-design/"><div class="menu-item-wrap"><span class="menu-item-title">Category Page</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1666"><a href="#"><div class="menu-item-wrap"><span class="menu-item-title">Single Layout</span><span class="toggle-sub-menu"> </span></div></a>	<ul class="sub-menu children simple-menu">		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1665"><a href="https://edumall.thememove.com/main/courses/mastering-data-modeling-fundamentals/?course_single_preset=01"><div class="menu-item-wrap"><span class="menu-item-title">Layout 01</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1667"><a href="https://edumall.thememove.com/main/courses/mastering-data-modeling-fundamentals/?course_single_preset=02"><div class="menu-item-wrap"><span class="menu-item-title">Layout 02</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1668"><a href="https://edumall.thememove.com/main/courses/fundamentals-of-accounting/?course_single_preset=03"><div class="menu-item-wrap"><span class="menu-item-title">Layout 03</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1669"><a href="https://edumall.thememove.com/main/courses/mastering-data-modeling-fundamentals/?course_single_preset=04"><div class="menu-item-wrap"><span class="menu-item-title">Layout 04</span></div></a></li>
          </ul>
        </li>
        </ul>
        </li>
        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-309 level-1"><a href="https://edumall.thememove.com/main/blog/"><div class="menu-item-wrap"><span class="menu-item-title">Blog</span><span class="toggle-sub-menu"> </span></div></a><ul class="sub-menu children simple-menu">	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-313"><a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=grid"><div class="menu-item-wrap"><span class="menu-item-title">Grid</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-319"><a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=grid-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">Grid with Sidebar</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-316"><a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=grid-02"><div class="menu-item-wrap"><span class="menu-item-title">Grid Wide</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-312"><a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=special"><div class="menu-item-wrap"><span class="menu-item-title">Special Layout</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-311"><a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=list-01"><div class="menu-item-wrap"><span class="menu-item-title">List Layout 01</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-310"><a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=list-02"><div class="menu-item-wrap"><span class="menu-item-title">List Layout 02</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-302"><a href="#"><div class="menu-item-wrap"><span class="menu-item-title">Single Layouts</span><span class="toggle-sub-menu"> </span></div></a>	<ul class="sub-menu children simple-menu">		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-306"><a href="https://edumall.thememove.com/main/how-to-harness-the-power-of-online-learning-9/?single_post_preset=left-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">Left Sidebar</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-308"><a href="https://edumall.thememove.com/main/how-to-harness-the-power-of-online-learning-9/?single_post_preset=right-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">Right Sidebar</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-307"><a href="https://edumall.thememove.com/main/how-to-harness-the-power-of-online-learning-9/?single_post_preset=no-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">No Sidebar</span></div></a></li>
          </ul>
        </li>
        </ul>
        </li>
        <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-19 level-1"><a href="#"><div class="menu-item-wrap"><span class="menu-item-title">Pages</span><span class="toggle-sub-menu"> </span></div></a><ul class="sub-menu children simple-menu">	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1337"><a href="https://edumall.thememove.com/main/become-an-instructor/"><div class="menu-item-wrap"><span class="menu-item-title">Become an Instructor</span></div></a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3412"><a href="https://edumall.thememove.com/main/instructors/"><div class="menu-item-wrap"><span class="menu-item-title">Instructors</span></div></a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1300 current_page_item menu-item-1341"><a href="https://edumall.thememove.com/main/about-us/"><div class="menu-item-wrap"><span class="menu-item-title">About us</span></div></a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1340"><a href="https://edumall.thememove.com/main/about-us-02/"><div class="menu-item-wrap"><span class="menu-item-title">About us 02</span></div></a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1339"><a href="https://edumall.thememove.com/main/contact-us/"><div class="menu-item-wrap"><span class="menu-item-title">Contact us</span></div></a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1338"><a href="https://edumall.thememove.com/main/contact-us-02/"><div class="menu-item-wrap"><span class="menu-item-title">Contact us 02</span></div></a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1625"><a href="https://edumall.thememove.com/main/membership-plans/"><div class="menu-item-wrap"><span class="menu-item-title">Membership plans</span></div></a></li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1336"><a href="https://edumall.thememove.com/main/faqs/"><div class="menu-item-wrap"><span class="menu-item-title">FAQs</span></div></a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1342"><a href="https://edumall.thememove.com/main/404-page/"><div class="menu-item-wrap"><span class="menu-item-title">404 Page</span></div></a></li>
        </ul>
        </li>
        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-88 level-1"><a href="#"><div class="menu-item-wrap"><span class="menu-item-title">Features</span><span class="toggle-sub-menu"> </span></div></a><ul class="sub-menu children simple-menu">	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17"><a href="#"><div class="menu-item-wrap"><span class="menu-item-title">Events</span><span class="toggle-sub-menu"> </span></div></a>	<ul class="sub-menu children simple-menu">		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-372"><a href="https://edumall.thememove.com/main/events/"><div class="menu-item-wrap"><span class="menu-item-title">Event Listing 01</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-373"><a href="https://edumall.thememove.com/main/events/?event_archive_preset=02"><div class="menu-item-wrap"><span class="menu-item-title">Event Listing 02</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-371"><a href="https://edumall.thememove.com/main/events/?event_archive_preset=03"><div class="menu-item-wrap"><span class="menu-item-title">Event Listing 03</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-374"><a href="https://edumall.thememove.com/main/events/?event_archive_preset=04"><div class="menu-item-wrap"><span class="menu-item-title">Event Listing 04</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-344"><a href="#"><div class="menu-item-wrap"><span class="menu-item-title">Single Layouts</span><span class="toggle-sub-menu"> </span></div></a>		<ul class="sub-menu children simple-menu">			<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-343"><a href="https://edumall.thememove.com/main/events/creating-futures-through-technology-conference-maxcoach-tech-center"><div class="menu-item-wrap"><span class="menu-item-title">Layout 01</span></div></a></li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-345"><a href="https://edumall.thememove.com/main/events/creating-futures-through-technology-conference-maxcoach-tech-center/?single_event_preset=02"><div class="menu-item-wrap"><span class="menu-item-title">Layout 02</span></div></a></li>
            </ul>
        </li>
          </ul>
        </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-78"><a href="https://edumall.thememove.com/main/shop/"><div class="menu-item-wrap"><span class="menu-item-title">Shop</span><span class="toggle-sub-menu"> </span></div></a>	<ul class="sub-menu children simple-menu">		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-140"><a href="https://edumall.thememove.com/main/shop/?shop_archive_preset=default"><div class="menu-item-wrap"><span class="menu-item-title">Shop &#8211; Default</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-135"><a href="https://edumall.thememove.com/main/shop/?shop_archive_preset=left-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">Shop &#8211; Left Sidebar</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-136"><a href="https://edumall.thememove.com/main/shop/?shop_archive_preset=right-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">Shop &#8211; Right Sidebar</span></div></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149"><a href="https://edumall.thememove.com/main/my-account/"><div class="menu-item-wrap"><span class="menu-item-title">My account</span></div></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-152"><a href="https://edumall.thememove.com/main/wishlist/"><div class="menu-item-wrap"><span class="menu-item-title">Wishlist</span></div></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-151"><a href="https://edumall.thememove.com/main/cart/"><div class="menu-item-wrap"><span class="menu-item-title">Cart</span></div></a></li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-150"><a href="https://edumall.thememove.com/main/checkout/"><div class="menu-item-wrap"><span class="menu-item-title">Checkout</span></div></a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-79"><a href="#"><div class="menu-item-wrap"><span class="menu-item-title">Single Layouts</span><span class="toggle-sub-menu"> </span></div></a>		<ul class="sub-menu children simple-menu">			<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-80"><a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=list-left-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">List &#8211; Left Sidebar</span></div></a></li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-81"><a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=list-right-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">List &#8211; Right Sidebar</span></div></a></li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-82"><a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=list-no-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">List &#8211; No Sidebar</span></div></a></li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-83"><a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=tabs-left-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">Tabs &#8211; Left Sidebar</span></div></a></li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-84"><a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=tabs-right-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">Tabs &#8211; Right Sidebar</span></div></a></li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-85"><a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=tabs-no-sidebar"><div class="menu-item-wrap"><span class="menu-item-title">Tabs &#8211; No Sidebar</span></div></a></li>
            </ul>
        </li>
          </ul>
        </li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2443"><a href="https://edumall.thememove.com/main/zoom-meetings/"><div class="menu-item-wrap"><span class="menu-item-title">Zoom Meetings</span></div></a></li>
        </ul>
        </li>
        </ul>	</nav>
        </div>
            <div id="mini-cart" class="mini-cart style-normal">
                  <a href="https://edumall.thememove.com/main/cart/" class="mini-cart__button header-icon" title="View your shopping cart"><span class="mini-cart-icon" data-count="0"></span></a>					<div class="widget_shopping_cart_content"></div>
                </div>
              
                        
                              
                                      </div>
                    </div>

                    <div id="page-open-mobile-menu" class="header-icon page-open-mobile-menu">
          <div class="burger-icon">
            <span class="burger-icon-top"></span>
            <span class="burger-icon-bottom"></span>
          </div>
        </div>

                    <div id="page-open-components" class="header-icon page-open-components">
          <div class="inner">
            <div class="circle circle-one"></div>
            <div class="circle circle-two"></div>
            <div class="circle circle-three"></div>
          </div>
        </div>
                  </div>
                </div>

                      </div>
                      
            </div>
            <div class="page-mobile-menu-content">
				<ul id="mobile-menu-primary" class="menu__container">
					<li
						class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-15 level-1 has-mega-menu">
						<a href="https://edumall.thememove.com/main/">
							<div class="menu-item-wrap"><span class="menu-item-title">Home</span><span
									class="toggle-sub-menu"> </span></div>
						</a>
						<ul class="sub-menu children mega-menu">
							<li class="menu-item menu-item-type-post_type menu-item-object-ic_mega_menu menu-item-2401">
								<div class="mega-menu-content">
									<div data-elementor-type="wp-post" data-elementor-id="2387"
										class="elementor elementor-2387" data-elementor-settings="[]">
										<div class="elementor-inner">
											<div class="elementor-section-wrap">
												<section
													class="elementor-section elementor-top-section elementor-element elementor-element-fd846ca elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-content-align-center elementor-section-column-vertical-align-stretch"
													data-id="fd846ca" data-element_type="section">
													<div class="elementor-container elementor-column-gap-extended">
														<div class="elementor-row">
															<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-bdf1c58"
																data-id="bdf1c58" data-element_type="column">
																<div
																	class="elementor-column-wrap elementor-element-populated">
																	<div class="elementor-widget-wrap">
																		<div class="elementor-element elementor-element-d60b87c edumall-list-layout-block elementor-widget elementor-widget-tm-list"
																			data-id="d60b87c" data-element_type="widget"
																			data-widget_type="tm-list.default">
																			<div class="elementor-widget-container">
																				<div class="edumall-list">
																					<div
																						class="item elementor-repeater-item-14f2e94">

																						<a class="link"
																							href="https://edumall.thememove.com/">
																							<div class="list-header">
																								<div class="text-wrap">
																									<div class="text">
																										Landing</div>
																								</div>

																							</div>

																						</a>
																					</div>
																					<div
																						class="item elementor-repeater-item-4522670">

																						<a class="link"
																							href="https://edumall.thememove.com/main/">
																							<div class="list-header">
																								<div class="text-wrap">
																									<div class="text">
																										Main Demo</div>
																								</div>

																								<div class="badge">Hot
																								</div>
																							</div>

																						</a>
																					</div>
																					<div
																						class="item elementor-repeater-item-719de04">

																						<a class="link"
																							href="https://edumall.thememove.com/main/course-hub/">
																							<div class="list-header">
																								<div class="text-wrap">
																									<div class="text">
																										Course Hub</div>
																								</div>

																							</div>

																						</a>
																					</div>
																					<div
																						class="item elementor-repeater-item-f38caaa">

																						<a class="link"
																							href="https://edumall.thememove.com/main/online-academy/">
																							<div class="list-header">
																								<div class="text-wrap">
																									<div class="text">
																										Online Academy
																									</div>
																								</div>

																								<div class="badge">Hot
																								</div>
																							</div>

																						</a>
																					</div>
																					<div
																						class="item elementor-repeater-item-e679b22">

																						<a class="link"
																							href="https://edumall.thememove.com/main/university/">
																							<div class="list-header">
																								<div class="text-wrap">
																									<div class="text">
																										University</div>
																								</div>

																							</div>

																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-81affe9"
																data-id="81affe9" data-element_type="column">
																<div
																	class="elementor-column-wrap elementor-element-populated">
																	<div class="elementor-widget-wrap">
																		<div class="elementor-element elementor-element-a66ba11 edumall-list-layout-block elementor-widget elementor-widget-tm-list"
																			data-id="a66ba11" data-element_type="widget"
																			data-widget_type="tm-list.default">
																			<div class="elementor-widget-container">
																				<div class="edumall-list">
																					<div
																						class="item elementor-repeater-item-14f2e94">

																						<a class="link"
																							href="https://edumall.thememove.com/main/education-center/">
																							<div class="list-header">
																								<div class="text-wrap">
																									<div class="text">
																										Education Center
																									</div>
																								</div>

																								<div class="badge">Hot
																								</div>
																							</div>

																						</a>
																					</div>
																					<div
																						class="item elementor-repeater-item-719de04">

																						<a class="link"
																							href="https://edumall.thememove.com/main/language-academic/">
																							<div class="list-header">
																								<div class="text-wrap">
																									<div class="text">
																										Language
																										Academic</div>
																								</div>

																							</div>

																						</a>
																					</div>
																					<div
																						class="item elementor-repeater-item-f38caaa">

																						<a class="link"
																							href="https://edumall.thememove.com/main/single-instructor/">
																							<div class="list-header">
																								<div class="text-wrap">
																									<div class="text">
																										Single
																										Instructor</div>
																								</div>

																							</div>

																						</a>
																					</div>
																					<div
																						class="item elementor-repeater-item-4522670">

																						<a class="link"
																							href="https://edumall.thememove.com/main/dev/">
																							<div class="list-header">
																								<div class="text-wrap">
																									<div class="text">
																										Dev</div>
																								</div>

																								<div class="badge">New
																								</div>
																							</div>

																						</a>
																					</div>
																					<div
																						class="item elementor-repeater-item-88d2c56">

																						<a class="link"
																							href="https://edumall.thememove.com/main/online-art/">
																							<div class="list-header">
																								<div class="text-wrap">
																									<div class="text">
																										Online Art</div>
																								</div>

																								<div class="badge">New
																								</div>
																							</div>

																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ba0abd1"
																data-id="ba0abd1" data-element_type="column">
																<div
																	class="elementor-column-wrap elementor-element-populated">
																	<div class="elementor-widget-wrap">
																		<section
																			class="elementor-section elementor-inner-section elementor-element elementor-element-014f41d elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
																			data-id="014f41d"
																			data-element_type="section"
																			data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
																			<div
																				class="elementor-container elementor-column-gap-extended">
																				<div class="elementor-row">
																					<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a208421"
																						data-id="a208421"
																						data-element_type="column">
																						<div
																							class="elementor-column-wrap elementor-element-populated">
																							<div
																								class="elementor-widget-wrap">
																								<div class="elementor-element elementor-element-2bdd83d elementor-widget elementor-widget-tm-heading"
																									data-id="2bdd83d"
																									data-element_type="widget"
																									data-widget_type="tm-heading.default">
																									<div
																										class="elementor-widget-container">
																										<div
																											class="tm-modern-heading">

																											<div
																												class="heading-primary-wrap">
																												<h2
																													class="heading-primary elementor-heading-title">
																													Achieve
																													Your
																													Goals
																													With
																													EduMall
																												</h2>
																											</div>


																										</div>
																									</div>
																								</div>
																								<div class="elementor-element elementor-element-fb175d6 elementor-widget elementor-widget-tm-button"
																									data-id="fb175d6"
																									data-element_type="widget"
																									data-widget_type="tm-button.default">
																									<div
																										class="elementor-widget-container">
																										<div
																											class="tm-button-wrapper">
																											<a href="https://themeforest.net/item/edumall-lms-education-wordpress-theme/29240444"
																												target="_blank"
																												rel="nofollow"
																												class="tm-button-link tm-button style-flat tm-button-xs"
																												role="button">
																												<div
																													class="button-content-wrapper">

																													<span
																														class="button-text">Purchase
																														now</span>

																												</div>

																											</a>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</section>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</section>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</li>
					<li
						class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16 level-1">
						<a href="https://edumall.thememove.com/main/courses/">
							<div class="menu-item-wrap"><span class="menu-item-title">Courses</span><span
									class="toggle-sub-menu"> </span></div>
						</a>
						<ul class="sub-menu children simple-menu">
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-236"><a
									href="https://edumall.thememove.com/main/courses/?course_archive_preset=01">
									<div class="menu-item-wrap"><span class="menu-item-title">Grid Basic Layout</span>
									</div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-233"><a
									href="https://edumall.thememove.com/main/courses/?course_archive_preset=02">
									<div class="menu-item-wrap"><span class="menu-item-title">Grid Modern Layout</span>
									</div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-232"><a
									href="https://edumall.thememove.com/main/courses/?course_archive_preset=03">
									<div class="menu-item-wrap"><span class="menu-item-title">Grid Full Layout</span>
									</div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-234"><a
									href="https://edumall.thememove.com/main/courses/?course_archive_preset=04">
									<div class="menu-item-wrap"><span class="menu-item-title">Grid Left Sidebar</span>
									</div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-376"><a
									href="https://edumall.thememove.com/main/courses/?course_archive_preset=05">
									<div class="menu-item-wrap"><span class="menu-item-title">Grid Right Sidebar</span>
									</div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-377"><a
									href="https://edumall.thememove.com/main/courses/?course_archive_preset=06">
									<div class="menu-item-wrap"><span class="menu-item-title">List Sidebar</span></div>
								</a></li>
							<li
								class="menu-item menu-item-type-taxonomy menu-item-object-course-category menu-item-321">
								<a href="https://edumall.thememove.com/main/course-category/art-design/">
									<div class="menu-item-wrap"><span class="menu-item-title">Category Page</span></div>
								</a></li>
							<li
								class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1666">
								<a href="#">
									<div class="menu-item-wrap"><span class="menu-item-title">Single Layout</span><span
											class="toggle-sub-menu"> </span></div>
								</a>
								<ul class="sub-menu children simple-menu">
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1665">
										<a
											href="https://edumall.thememove.com/main/courses/mastering-data-modeling-fundamentals/?course_single_preset=01">
											<div class="menu-item-wrap"><span class="menu-item-title">Layout 01</span>
											</div>
										</a></li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1667">
										<a
											href="https://edumall.thememove.com/main/courses/mastering-data-modeling-fundamentals/?course_single_preset=02">
											<div class="menu-item-wrap"><span class="menu-item-title">Layout 02</span>
											</div>
										</a></li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1668">
										<a
											href="https://edumall.thememove.com/main/courses/fundamentals-of-accounting/?course_single_preset=03">
											<div class="menu-item-wrap"><span class="menu-item-title">Layout 03</span>
											</div>
										</a></li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1669">
										<a
											href="https://edumall.thememove.com/main/courses/mastering-data-modeling-fundamentals/?course_single_preset=04">
											<div class="menu-item-wrap"><span class="menu-item-title">Layout 04</span>
											</div>
										</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li
						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-309 level-1">
						<a href="https://edumall.thememove.com/main/blog/">
							<div class="menu-item-wrap"><span class="menu-item-title">Blog</span><span
									class="toggle-sub-menu"> </span></div>
						</a>
						<ul class="sub-menu children simple-menu">
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-313"><a
									href="https://edumall.thememove.com/main/blog/?blog_archive_preset=grid">
									<div class="menu-item-wrap"><span class="menu-item-title">Grid</span></div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-319"><a
									href="https://edumall.thememove.com/main/blog/?blog_archive_preset=grid-sidebar">
									<div class="menu-item-wrap"><span class="menu-item-title">Grid with Sidebar</span>
									</div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-316"><a
									href="https://edumall.thememove.com/main/blog/?blog_archive_preset=grid-02">
									<div class="menu-item-wrap"><span class="menu-item-title">Grid Wide</span></div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-312"><a
									href="https://edumall.thememove.com/main/blog/?blog_archive_preset=special">
									<div class="menu-item-wrap"><span class="menu-item-title">Special Layout</span>
									</div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-311"><a
									href="https://edumall.thememove.com/main/blog/?blog_archive_preset=list-01">
									<div class="menu-item-wrap"><span class="menu-item-title">List Layout 01</span>
									</div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-310"><a
									href="https://edumall.thememove.com/main/blog/?blog_archive_preset=list-02">
									<div class="menu-item-wrap"><span class="menu-item-title">List Layout 02</span>
									</div>
								</a></li>
							<li
								class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-302">
								<a href="#">
									<div class="menu-item-wrap"><span class="menu-item-title">Single Layouts</span><span
											class="toggle-sub-menu"> </span></div>
								</a>
								<ul class="sub-menu children simple-menu">
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-306"><a
											href="https://edumall.thememove.com/main/how-to-harness-the-power-of-online-learning-9/?single_post_preset=left-sidebar">
											<div class="menu-item-wrap"><span class="menu-item-title">Left
													Sidebar</span></div>
										</a></li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-308"><a
											href="https://edumall.thememove.com/main/how-to-harness-the-power-of-online-learning-9/?single_post_preset=right-sidebar">
											<div class="menu-item-wrap"><span class="menu-item-title">Right
													Sidebar</span></div>
										</a></li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-307"><a
											href="https://edumall.thememove.com/main/how-to-harness-the-power-of-online-learning-9/?single_post_preset=no-sidebar">
											<div class="menu-item-wrap"><span class="menu-item-title">No Sidebar</span>
											</div>
										</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li
						class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-19 level-1">
						<a href="#">
							<div class="menu-item-wrap"><span class="menu-item-title">Pages</span><span
									class="toggle-sub-menu"> </span></div>
						</a>
						<ul class="sub-menu children simple-menu">
							<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1337"><a
									href="https://edumall.thememove.com/main/become-an-instructor/">
									<div class="menu-item-wrap"><span class="menu-item-title">Become an
											Instructor</span></div>
								</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3412"><a
									href="https://edumall.thememove.com/main/instructors/">
									<div class="menu-item-wrap"><span class="menu-item-title">Instructors</span></div>
								</a></li>
							<li
								class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1300 current_page_item menu-item-1341">
								<a href="https://edumall.thememove.com/main/about-us/">
									<div class="menu-item-wrap"><span class="menu-item-title">About us</span></div>
								</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1340"><a
									href="https://edumall.thememove.com/main/about-us-02/">
									<div class="menu-item-wrap"><span class="menu-item-title">About us 02</span></div>
								</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1339"><a
									href="https://edumall.thememove.com/main/contact-us/">
									<div class="menu-item-wrap"><span class="menu-item-title">Contact us</span></div>
								</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1338"><a
									href="https://edumall.thememove.com/main/contact-us-02/">
									<div class="menu-item-wrap"><span class="menu-item-title">Contact us 02</span></div>
								</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1625"><a
									href="https://edumall.thememove.com/main/membership-plans/">
									<div class="menu-item-wrap"><span class="menu-item-title">Membership plans</span>
									</div>
								</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1336"><a
									href="https://edumall.thememove.com/main/faqs/">
									<div class="menu-item-wrap"><span class="menu-item-title">FAQs</span></div>
								</a></li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1342"><a
									href="https://edumall.thememove.com/main/404-page/">
									<div class="menu-item-wrap"><span class="menu-item-title">404 Page</span></div>
								</a></li>
						</ul>
					</li>
					<li
						class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-88 level-1">
						<a href="#">
							<div class="menu-item-wrap"><span class="menu-item-title">Features</span><span
									class="toggle-sub-menu"> </span></div>
						</a>
						<ul class="sub-menu children simple-menu">
							<li
								class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17">
								<a href="#">
									<div class="menu-item-wrap"><span class="menu-item-title">Events</span><span
											class="toggle-sub-menu"> </span></div>
								</a>
								<ul class="sub-menu children simple-menu">
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-372"><a
											href="https://edumall.thememove.com/main/events/">
											<div class="menu-item-wrap"><span class="menu-item-title">Event Listing
													01</span></div>
										</a></li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-373"><a
											href="https://edumall.thememove.com/main/events/?event_archive_preset=02">
											<div class="menu-item-wrap"><span class="menu-item-title">Event Listing
													02</span></div>
										</a></li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-371"><a
											href="https://edumall.thememove.com/main/events/?event_archive_preset=03">
											<div class="menu-item-wrap"><span class="menu-item-title">Event Listing
													03</span></div>
										</a></li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-374"><a
											href="https://edumall.thememove.com/main/events/?event_archive_preset=04">
											<div class="menu-item-wrap"><span class="menu-item-title">Event Listing
													04</span></div>
										</a></li>
									<li
										class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-344">
										<a href="#">
											<div class="menu-item-wrap"><span class="menu-item-title">Single
													Layouts</span><span class="toggle-sub-menu"> </span></div>
										</a>
										<ul class="sub-menu children simple-menu">
											<li
												class="menu-item menu-item-type-custom menu-item-object-custom menu-item-343">
												<a
													href="https://edumall.thememove.com/main/events/creating-futures-through-technology-conference-maxcoach-tech-center">
													<div class="menu-item-wrap"><span class="menu-item-title">Layout
															01</span></div>
												</a></li>
											<li
												class="menu-item menu-item-type-custom menu-item-object-custom menu-item-345">
												<a
													href="https://edumall.thememove.com/main/events/creating-futures-through-technology-conference-maxcoach-tech-center/?single_event_preset=02">
													<div class="menu-item-wrap"><span class="menu-item-title">Layout
															02</span></div>
												</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li
								class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-78">
								<a href="https://edumall.thememove.com/main/shop/">
									<div class="menu-item-wrap"><span class="menu-item-title">Shop</span><span
											class="toggle-sub-menu"> </span></div>
								</a>
								<ul class="sub-menu children simple-menu">
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-140"><a
											href="https://edumall.thememove.com/main/shop/?shop_archive_preset=default">
											<div class="menu-item-wrap"><span class="menu-item-title">Shop &#8211;
													Default</span></div>
										</a></li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-135"><a
											href="https://edumall.thememove.com/main/shop/?shop_archive_preset=left-sidebar">
											<div class="menu-item-wrap"><span class="menu-item-title">Shop &#8211; Left
													Sidebar</span></div>
										</a></li>
									<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-136"><a
											href="https://edumall.thememove.com/main/shop/?shop_archive_preset=right-sidebar">
											<div class="menu-item-wrap"><span class="menu-item-title">Shop &#8211; Right
													Sidebar</span></div>
										</a></li>
									<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
										<a href="https://edumall.thememove.com/main/my-account/">
											<div class="menu-item-wrap"><span class="menu-item-title">My account</span>
											</div>
										</a></li>
									<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-152">
										<a href="https://edumall.thememove.com/main/wishlist/">
											<div class="menu-item-wrap"><span class="menu-item-title">Wishlist</span>
											</div>
										</a></li>
									<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-151">
										<a href="https://edumall.thememove.com/main/cart/">
											<div class="menu-item-wrap"><span class="menu-item-title">Cart</span></div>
										</a></li>
									<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-150">
										<a href="https://edumall.thememove.com/main/checkout/">
											<div class="menu-item-wrap"><span class="menu-item-title">Checkout</span>
											</div>
										</a></li>
									<li
										class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-79">
										<a href="#">
											<div class="menu-item-wrap"><span class="menu-item-title">Single
													Layouts</span><span class="toggle-sub-menu"> </span></div>
										</a>
										<ul class="sub-menu children simple-menu">
											<li
												class="menu-item menu-item-type-custom menu-item-object-custom menu-item-80">
												<a
													href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=list-left-sidebar">
													<div class="menu-item-wrap"><span class="menu-item-title">List
															&#8211; Left Sidebar</span></div>
												</a></li>
											<li
												class="menu-item menu-item-type-custom menu-item-object-custom menu-item-81">
												<a
													href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=list-right-sidebar">
													<div class="menu-item-wrap"><span class="menu-item-title">List
															&#8211; Right Sidebar</span></div>
												</a></li>
											<li
												class="menu-item menu-item-type-custom menu-item-object-custom menu-item-82">
												<a
													href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=list-no-sidebar">
													<div class="menu-item-wrap"><span class="menu-item-title">List
															&#8211; No Sidebar</span></div>
												</a></li>
											<li
												class="menu-item menu-item-type-custom menu-item-object-custom menu-item-83">
												<a
													href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=tabs-left-sidebar">
													<div class="menu-item-wrap"><span class="menu-item-title">Tabs
															&#8211; Left Sidebar</span></div>
												</a></li>
											<li
												class="menu-item menu-item-type-custom menu-item-object-custom menu-item-84">
												<a
													href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=tabs-right-sidebar">
													<div class="menu-item-wrap"><span class="menu-item-title">Tabs
															&#8211; Right Sidebar</span></div>
												</a></li>
											<li
												class="menu-item menu-item-type-custom menu-item-object-custom menu-item-85">
												<a
													href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=tabs-no-sidebar">
													<div class="menu-item-wrap"><span class="menu-item-title">Tabs
															&#8211; No Sidebar</span></div>
												</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2443"><a
									href="https://edumall.thememove.com/main/zoom-meetings/">
									<div class="menu-item-wrap"><span class="menu-item-title">Zoom Meetings</span></div>
								</a></li>
						</ul>
					</li>
				</ul>
			</div> */}
    
     <div className="container">
        <div className="header-wrap">
          <div className="header-left">
            <div className="header-content-inner">
              <div className="branding">
                <div className="branding-logo-wrap">
                  <a href="/" rel="home">
                    <img
                      src="../assets/images/logo/dark-logo-3.png"
                      alt="Main"
                      className="branding-logo dark-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="header-right">
            <div className="header-content-inner">
              <div id="header-right-inner" className="header-right-inner">
                <div className="header-right-inner-content">
                  <div
                    id="page-navigation"
                    className="navigation page-navigation"
                  >
                    <nav id="menu" className="menu menu--primary">
                      <ul
                        id="menu-primary"
                        className="menu__container sm sm-simple"
                      >
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-15 level-1 has-mega-menu">
                          <a href="https://edumall.thememove.com/main/">
                            <div className="menu-item-wrap">
                              <span className="menu-item-title">Home</span>
                              <span className="toggle-sub-menu"> </span>
                            </div>
                          </a>
                          <ul className="sub-menu children mega-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-ic_mega_menu menu-item-2401">
                              <div className="mega-menu-content">
                                <div
                                  data-elementor-type="wp-post"
                                  data-elementor-id="2387"
                                  className="elementor elementor-2387"
                                  data-elementor-settings="[]"
                                >
                                  <div className="elementor-inner">
                                    <div className="elementor-section-wrap">
                                      <section
                                        className="elementor-section elementor-top-section elementor-element elementor-element-fd846ca elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-content-align-center elementor-section-column-vertical-align-stretch"
                                        data-id="fd846ca"
                                        data-element_type="section"
                                      >
                                        <div className="elementor-container elementor-column-gap-extended">
                                          <div className="elementor-row">
                                            <div
                                              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-bdf1c58"
                                              data-id="bdf1c58"
                                              data-element_type="column"
                                            >
                                              <div className="elementor-column-wrap elementor-element-populated">
                                                <div className="elementor-widget-wrap">
                                                  <div
                                                    className="elementor-element elementor-element-d60b87c edumall-list-layout-block elementor-widget elementor-widget-tm-list"
                                                    data-id="d60b87c"
                                                    data-element_type="widget"
                                                    data-widget_type="tm-list.default"
                                                  >
                                                    <div className="elementor-widget-container">
                                                      <div className="edumall-list">
                                                        <div className="item elementor-repeater-item-14f2e94">
                                                          <a
                                                            className="link"
                                                            href="https://edumall.thememove.com/"
                                                          >
                                                            <div className="list-header">
                                                              <div className="text-wrap">
                                                                <div className="text">
                                                                  Landing
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                        <div className="item elementor-repeater-item-4522670">
                                                          <a
                                                            className="link"
                                                            href="https://edumall.thememove.com/main/"
                                                          >
                                                            <div className="list-header">
                                                              <div className="text-wrap">
                                                                <div className="text">
                                                                  Main Demo
                                                                </div>
                                                              </div>

                                                              <div className="badge">
                                                                Hot
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                        <div className="item elementor-repeater-item-719de04">
                                                          <a
                                                            className="link"
                                                            href="https://edumall.thememove.com/main/course-hub/"
                                                          >
                                                            <div className="list-header">
                                                              <div className="text-wrap">
                                                                <div className="text">
                                                                  Course Hub
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                        <div className="item elementor-repeater-item-f38caaa">
                                                          <a
                                                            className="link"
                                                            href="index.htm"
                                                          >
                                                            <div className="list-header">
                                                              <div className="text-wrap">
                                                                <div className="text">
                                                                  Online Academy
                                                                </div>
                                                              </div>

                                                              <div className="badge">
                                                                Hot
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                        <div className="item elementor-repeater-item-e679b22">
                                                          <a
                                                            className="link"
                                                            href="https://edumall.thememove.com/main/university/"
                                                          >
                                                            <div className="list-header">
                                                              <div className="text-wrap">
                                                                <div className="text">
                                                                  University
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-81affe9"
                                              data-id="81affe9"
                                              data-element_type="column"
                                            >
                                              <div className="elementor-column-wrap elementor-element-populated">
                                                <div className="elementor-widget-wrap">
                                                  <div
                                                    className="elementor-element elementor-element-a66ba11 edumall-list-layout-block elementor-widget elementor-widget-tm-list"
                                                    data-id="a66ba11"
                                                    data-element_type="widget"
                                                    data-widget_type="tm-list.default"
                                                  >
                                                    <div className="elementor-widget-container">
                                                      <div className="edumall-list">
                                                        <div className="item elementor-repeater-item-14f2e94">
                                                          <a
                                                            className="link"
                                                            href="https://edumall.thememove.com/main/education-center/"
                                                          >
                                                            <div className="list-header">
                                                              <div className="text-wrap">
                                                                <div className="text">
                                                                  Education
                                                                  Center
                                                                </div>
                                                              </div>

                                                              <div className="badge">
                                                                Hot
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                        <div className="item elementor-repeater-item-719de04">
                                                          <a
                                                            className="link"
                                                            href="https://edumall.thememove.com/main/language-academic/"
                                                          >
                                                            <div className="list-header">
                                                              <div className="text-wrap">
                                                                <div className="text">
                                                                  Language
                                                                  Academic
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                        <div className="item elementor-repeater-item-f38caaa">
                                                          <a
                                                            className="link"
                                                            href="https://edumall.thememove.com/main/single-instructor/"
                                                          >
                                                            <div className="list-header">
                                                              <div className="text-wrap">
                                                                <div className="text">
                                                                  Single
                                                                  Instructor
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                        <div className="item elementor-repeater-item-4522670">
                                                          <a
                                                            className="link"
                                                            href="https://edumall.thememove.com/main/dev/"
                                                          >
                                                            <div className="list-header">
                                                              <div className="text-wrap">
                                                                <div className="text">
                                                                  Dev
                                                                </div>
                                                              </div>

                                                              <div className="badge">
                                                                New
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                        <div className="item elementor-repeater-item-88d2c56">
                                                          <a
                                                            className="link"
                                                            href="https://edumall.thememove.com/main/online-art/"
                                                          >
                                                            <div className="list-header">
                                                              <div className="text-wrap">
                                                                <div className="text">
                                                                  Online Art
                                                                </div>
                                                              </div>

                                                              <div className="badge">
                                                                New
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ba0abd1"
                                              data-id="ba0abd1"
                                              data-element_type="column"
                                            >
                                              <div className="elementor-column-wrap elementor-element-populated">
                                                <div className="elementor-widget-wrap">
                                                  <section
                                                    className="elementor-section elementor-inner-section elementor-element elementor-element-014f41d elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch"
                                                    data-id="014f41d"
                                                    data-element_type="section"
                                                    data-settings='{"background_background":"classNameic"}'
                                                  >
                                                    <div className="elementor-container elementor-column-gap-extended">
                                                      <div className="elementor-row">
                                                        <div
                                                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a208421"
                                                          data-id="a208421"
                                                          data-element_type="column"
                                                        >
                                                          <div className="elementor-column-wrap elementor-element-populated">
                                                            <div className="elementor-widget-wrap">
                                                              <div
                                                                className="elementor-element elementor-element-2bdd83d elementor-widget elementor-widget-tm-heading"
                                                                data-id="2bdd83d"
                                                                data-element_type="widget"
                                                                data-widget_type="tm-heading.default"
                                                              >
                                                                <div className="elementor-widget-container">
                                                                  <div className="tm-modern-heading">
                                                                    <div className="heading-primary-wrap">
                                                                      <h2 className="heading-primary elementor-heading-title">
                                                                        Achieve
                                                                        Your
                                                                        Goals
                                                                        With
                                                                        EduMall
                                                                      </h2>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div
                                                                className="elementor-element elementor-element-fb175d6 elementor-widget elementor-widget-tm-button"
                                                                data-id="fb175d6"
                                                                data-element_type="widget"
                                                                data-widget_type="tm-button.default"
                                                              >
                                                                <div className="elementor-widget-container">
                                                                  <div className="tm-button-wrapper">
                                                                    <a
                                                                      href="https://themeforest.net/item/edumall-lms-education-wordpress-theme/29240444"
                                                                      target="_blank"
                                                                      rel="nofollow"
                                                                      className="tm-button-link tm-button style-flat tm-button-xs"
                                                                      role="button"
                                                                    >
                                                                      <div className="button-content-wrapper">
                                                                        <span className="button-text">
                                                                          Purchase
                                                                          now
                                                                        </span>
                                                                      </div>
                                                                    </a>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16 level-1">
                          <a href="https://edumall.thememove.com/main/courses/">
                            <div className="menu-item-wrap">
                              <span className="menu-item-title">Courses</span>
                              <span className="toggle-sub-menu"> </span>
                            </div>
                          </a>
                          <ul className="sub-menu children simple-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-236">
                              <a href="https://edumall.thememove.com/main/courses/?course_archive_preset=01">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Grid Basic Layout
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-233">
                              <a href="https://edumall.thememove.com/main/courses/?course_archive_preset=02">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Grid Modern Layout
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-232">
                              <a href="https://edumall.thememove.com/main/courses/?course_archive_preset=03">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Grid Full Layout
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-234">
                              <a href="https://edumall.thememove.com/main/courses/?course_archive_preset=04">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Grid Left Sidebar
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-376">
                              <a href="https://edumall.thememove.com/main/courses/?course_archive_preset=05">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Grid Right Sidebar
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-377">
                              <a href="https://edumall.thememove.com/main/courses/?course_archive_preset=06">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    List Sidebar
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-course-category menu-item-321">
                              <a href="https://edumall.thememove.com/main/course-category/art-design/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Category Page
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1666">
                              <a href="#">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Single Layout
                                  </span>
                                  <span className="toggle-sub-menu"> </span>
                                </div>
                              </a>
                              <ul className="sub-menu children simple-menu">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1665">
                                  <a href="https://edumall.thememove.com/main/courses/mastering-data-modeling-fundamentals/?course_single_preset=01">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Layout 01
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1667">
                                  <a href="https://edumall.thememove.com/main/courses/mastering-data-modeling-fundamentals/?course_single_preset=02">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Layout 02
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1668">
                                  <a href="https://edumall.thememove.com/main/courses/fundamentals-of-accounting/?course_single_preset=03">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Layout 03
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1669">
                                  <a href="https://edumall.thememove.com/main/courses/mastering-data-modeling-fundamentals/?course_single_preset=04">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Layout 04
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-309 level-1">
                          <a href="https://edumall.thememove.com/main/blog/">
                            <div className="menu-item-wrap">
                              <span className="menu-item-title">Blog</span>
                              <span className="toggle-sub-menu"> </span>
                            </div>
                          </a>
                          <ul className="sub-menu children simple-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-313">
                              <a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=grid">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">Grid</span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-319">
                              <a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=grid-sidebar">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Grid with Sidebar
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-316">
                              <a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=grid-02">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Grid Wide
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-312">
                              <a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=special">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Special Layout
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-311">
                              <a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=list-01">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    List Layout 01
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-310">
                              <a href="https://edumall.thememove.com/main/blog/?blog_archive_preset=list-02">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    List Layout 02
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-302">
                              <a href="#">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Single Layouts
                                  </span>
                                  <span className="toggle-sub-menu"> </span>
                                </div>
                              </a>
                              <ul className="sub-menu children simple-menu">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-306">
                                  <a href="https://edumall.thememove.com/main/how-to-harness-the-power-of-online-learning-9/?single_post_preset=left-sidebar">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Left Sidebar
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-308">
                                  <a href="https://edumall.thememove.com/main/how-to-harness-the-power-of-online-learning-9/?single_post_preset=right-sidebar">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Right Sidebar
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-307">
                                  <a href="https://edumall.thememove.com/main/how-to-harness-the-power-of-online-learning-9/?single_post_preset=no-sidebar">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        No Sidebar
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-19 level-1">
                          <a href="#">
                            <div className="menu-item-wrap">
                              <span className="menu-item-title">Pages</span>
                              <span className="toggle-sub-menu"> </span>
                            </div>
                          </a>
                          <ul className="sub-menu children simple-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1337">
                              <a href="https://edumall.thememove.com/main/become-an-instructor/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Become an Instructor
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3412">
                              <a href="https://edumall.thememove.com/main/instructors/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Instructors
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1341">
                              <a href="https://edumall.thememove.com/main/about-us/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    About us
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1340">
                              <a href="https://edumall.thememove.com/main/about-us-02/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    About us 02
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1339">
                              <a href="https://edumall.thememove.com/main/contact-us/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Contact us
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1338">
                              <a href="https://edumall.thememove.com/main/contact-us-02/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Contact us 02
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1625">
                              <a href="https://edumall.thememove.com/main/membership-plans/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Membership plans
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1336">
                              <a href="https://edumall.thememove.com/main/faqs/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">FAQs</span>
                                </div>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1342">
                              <a href="https://edumall.thememove.com/main/404-page/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    404 Page
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-88 level-1">
                          <a href="#">
                            <div className="menu-item-wrap">
                              <span className="menu-item-title">Features</span>
                              <span className="toggle-sub-menu"> </span>
                            </div>
                          </a>
                          <ul className="sub-menu children simple-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17">
                              <a href="#">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Events
                                  </span>
                                  <span className="toggle-sub-menu"> </span>
                                </div>
                              </a>
                              <ul className="sub-menu children simple-menu">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-372">
                                  <a href="https://edumall.thememove.com/main/events/">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Event Listing 01
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-373">
                                  <a href="https://edumall.thememove.com/main/events/?event_archive_preset=02">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Event Listing 02
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-371">
                                  <a href="https://edumall.thememove.com/main/events/?event_archive_preset=03">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Event Listing 03
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-374">
                                  <a href="https://edumall.thememove.com/main/events/?event_archive_preset=04">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Event Listing 04
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-344">
                                  <a href="#">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Single Layouts
                                      </span>
                                      <span className="toggle-sub-menu"> </span>
                                    </div>
                                  </a>
                                  <ul className="sub-menu children simple-menu">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-343">
                                      <a href="https://edumall.thememove.com/main/events/creating-futures-through-technology-conference-maxcoach-tech-center">
                                        <div className="menu-item-wrap">
                                          <span className="menu-item-title">
                                            Layout 01
                                          </span>
                                        </div>
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-345">
                                      <a href="https://edumall.thememove.com/main/events/creating-futures-through-technology-conference-maxcoach-tech-center/?single_event_preset=02">
                                        <div className="menu-item-wrap">
                                          <span className="menu-item-title">
                                            Layout 02
                                          </span>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-78">
                              <a href="https://edumall.thememove.com/main/shop/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">Shop</span>
                                  <span className="toggle-sub-menu"> </span>
                                </div>
                              </a>
                              <ul className="sub-menu children simple-menu">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-140">
                                  <a href="https://edumall.thememove.com/main/shop/?shop_archive_preset=default">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Shop &#8211; Default
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-135">
                                  <a href="https://edumall.thememove.com/main/shop/?shop_archive_preset=left-sidebar">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Shop &#8211; Left Sidebar
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-136">
                                  <a href="https://edumall.thememove.com/main/shop/?shop_archive_preset=right-sidebar">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Shop &#8211; Right Sidebar
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
                                  <a href="https://edumall.thememove.com/main/my-account/">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        My account
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-152">
                                  <a href="https://edumall.thememove.com/main/wishlist/">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Wishlist
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-151">
                                  <a href="https://edumall.thememove.com/main/cart/">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Cart
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-150">
                                  <a href="https://edumall.thememove.com/main/checkout/">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Checkout
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-79">
                                  <a href="#">
                                    <div className="menu-item-wrap">
                                      <span className="menu-item-title">
                                        Single Layouts
                                      </span>
                                      <span className="toggle-sub-menu"> </span>
                                    </div>
                                  </a>
                                  <ul className="sub-menu children simple-menu">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-80">
                                      <a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=list-left-sidebar">
                                        <div className="menu-item-wrap">
                                          <span className="menu-item-title">
                                            List &#8211; Left Sidebar
                                          </span>
                                        </div>
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-81">
                                      <a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=list-right-sidebar">
                                        <div className="menu-item-wrap">
                                          <span className="menu-item-title">
                                            List &#8211; Right Sidebar
                                          </span>
                                        </div>
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-82">
                                      <a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=list-no-sidebar">
                                        <div className="menu-item-wrap">
                                          <span className="menu-item-title">
                                            List &#8211; No Sidebar
                                          </span>
                                        </div>
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-83">
                                      <a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=tabs-left-sidebar">
                                        <div className="menu-item-wrap">
                                          <span className="menu-item-title">
                                            Tabs &#8211; Left Sidebar
                                          </span>
                                        </div>
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-84">
                                      <a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=tabs-right-sidebar">
                                        <div className="menu-item-wrap">
                                          <span className="menu-item-title">
                                            Tabs &#8211; Right Sidebar
                                          </span>
                                        </div>
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85">
                                      <a href="https://edumall.thememove.com/main/product/business-administration/?shop_single_preset=tabs-no-sidebar">
                                        <div className="menu-item-wrap">
                                          <span className="menu-item-title">
                                            Tabs &#8211; No Sidebar
                                          </span>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2443">
                              <a href="https://edumall.thememove.com/main/zoom-meetings/">
                                <div className="menu-item-wrap">
                                  <span className="menu-item-title">
                                    Zoom Meetings
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div id="mini-cart" className="mini-cart style-svg">
                    <a
                      href="https://edumall.thememove.com/main/cart/"
                      className="mini-cart__button header-icon"
                      title="View your shopping cart"
                    >
                      <span className="mini-cart-icon" data-count="0"></span>
                    </a>
                    <div className="widget_shopping_cart_content"></div>
                  </div>
                </div>
              </div>

              <div
                id="page-open-mobile-menu"
                className="header-icon page-open-mobile-menu"
              >
                <div className="burger-icon">
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>

              <div
                id="page-open-components"
                className="header-icon page-open-components"
              >
                <div className="inner">
                  <div className="circle circle-one"></div>
                  <div className="circle circle-two"></div>
                  <div className="circle circle-three"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Header;
