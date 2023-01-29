import React from "react";
import './footer.css'

const Footer = ({footerJson}) => {
  return (<>
          <div id="page-footer-wrapper" class="page-footer-wrapper marginTop">
            <div class="page-footer elementor-footer" id="page-footer">
                <div data-elementor-type="footer" data-elementor-id="507" class="elementor elementor-507 elementor-location-footer" data-elementor-settings="[]">
              <div class="elementor-section-wrap">
                    <section class="elementor-section elementor-top-section elementor-element elementor-element-d1548b8 elementor-section-boxed elementor-section-gap-beside-yes elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch" data-id="d1548b8" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                      <div class="elementor-container elementor-column-gap-extended">
                        <div class="elementor-row">
                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-edfc0de" data-id="edfc0de" data-element_type="column">
                <div class="elementor-column-wrap elementor-element-populated">
                        <div class="elementor-widget-wrap">
                      <section class="elementor-section elementor-inner-section elementor-element elementor-element-f472362 elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch" data-id="f472362" data-element_type="section">
                      <div class="elementor-container elementor-column-gap-extended">
                        <div class="row">
                    <div className="col-sm-6 col-md-3 displayFlexFooter" >
                          <div  class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-9d1df08" data-id="9d1df08" data-element_type="column">
                                  <div class="elementor-column-wrap elementor-element-populated">
                                          <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-f6805fc elementor-widget elementor-widget-image" data-id="f6805fc" data-element_type="widget" data-widget_type="image.default">
                                    <div class="elementor-widget-container">
                                            <div class="elementor-image">
                                                      <a href="https://edumall.thememove.com/main/">
                                          <img width="296" height="64" src={footerJson.eittAddr.imgUrl} class="attachment-full size-full" alt="" loading="lazy" />								</a>
                                                        </div>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-5b82a00 elementor-widget elementor-widget-tm-heading" data-id="5b82a00" data-element_type="widget" data-widget_type="tm-heading.default">
                                    <div class="elementor-widget-container">
                                      <div class="tm-modern-heading">
                                  
                                      <div class="heading-primary-wrap">
                                  <div class="heading-primary elementor-heading-title">{footerJson.eittAddr.title}</div>		</div></div>
                                    </div>
                                    </div>
                                    <div class="elementor-element elementor-element-61a3989 elementor-widget elementor-widget-tm-heading" data-id="61a3989" data-element_type="widget" data-widget_type="tm-heading.default">
                                    <div class="elementor-widget-container">
                                      <div class="tm-modern-heading">
                                      <div class="heading-primary-wrap">
                                  <div class="heading-primary elementor-heading-title">{footerJson.eittAddr.heading_2}</div>		</div>
                                      </div>
                                    </div>
                                    </div>
                                    <div class="elementor-element elementor-element-2efb847 elementor-widget elementor-widget-tm-heading" data-id="2efb847" data-element_type="widget" data-widget_type="tm-heading.default">
                                    <div class="elementor-widget-container">
                                      <div class="tm-modern-heading">
                                  
                                      <div class="heading-primary-wrap">
                                  <div class="heading-primary elementor-heading-title">{footerJson.eittAddr.heading_primary}</div>		</div>

                                      </div>
                                    </div>
                                    </div>
                                    <div class="elementor-element elementor-element-ff5b295 elementor-widget elementor-widget-tm-heading" data-id="ff5b295" data-element_type="widget" data-widget_type="tm-heading.default">
                                    <div class="elementor-widget-container">
                                      <div class="tm-modern-heading">                               
                                      <div class="heading-primary-wrap">
                                        <div class="heading-primary elementor-heading-title">{footerJson.eittAddr.email}</div>		</div>
                                            
                                      </div>
                                    </div>
                                    </div>
                                    <div class="elementor-element elementor-element-0708e7c elementor-widget elementor-widget-tm-social-networks" data-id="0708e7c" data-element_type="widget" data-widget_type="tm-social-networks.default">
                                    <div class="elementor-widget-container">
                                      <div class="tm-social-networks style-large-icons layout-inline">
                                  <ul class="list">		
                                  {footerJson.icons.map(icons => <li class={icons.className}>
                                            <a class="link" aria-label="Twitter" href="#" target="_blank" rel="nofollow">
                                              <i class={icons.iconsITag}></i>					</a>
                                        </li>)}
                                    	
                                    </ul>		</div>
                                    </div>
                                    </div>
                                    <div class="elementor-element elementor-element-a5ca034 elementor-widget elementor-widget-spacer" data-id="a5ca034" data-element_type="widget" data-widget_type="spacer.default">
                                    <div class="elementor-widget-container">
                                      <div class="elementor-spacer">
                                  <div class="elementor-spacer-inner"></div>
                                </div>
                                    </div>
                                    </div>
                                        </div>
                                      </div>
                        </div>
                     </div>
                     <div className=" col-sm-6 col-md-3 displayFlexFooter" >

                            <div   class=" footerDivs elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-172fcf4" data-id="172fcf4" data-element_type="column">
                          <div class="elementor-column-wrap elementor-element-populated">
                                  <div class="elementor-widget-wrap">
                                <div class="elementor-element elementor-element-729c27f elementor-widget elementor-widget-tm-heading" data-id="729c27f" data-element_type="widget" data-widget_type="tm-heading.default">
                            <div class="elementor-widget-container">
                              <div class="tm-modern-heading">
                          
                              <div class="heading-primary-wrap">
                          <h3 class="heading-primary elementor-heading-title">About</h3>		</div>
                        
                          
                              </div>
                            </div>
                            </div>
                            <div class="elementor-element elementor-element-edc9280 edumall-list-layout-block elementor-widget elementor-widget-tm-list" data-id="edc9280" data-element_type="widget" data-widget_type="tm-list.default">
                            <div class="elementor-widget-container">
                              <div class="edumall-list">
                                    <div class="item elementor-repeater-item-03d9b22">

                                <a class="link" href="#">
                                <div class="list-header">
                                                                              <div class="text-wrap">
                                                      <div class="text">About Us</div>
                                                  </div>

                                              </div>

                                </a>
                                     </div>
                                        <div class="item elementor-repeater-item-6dd1bdb">

                                <a class="link" href="#">
                                <div class="list-header">
                                                                              <div class="text-wrap">
                                                      <div class="text">Courses</div>
                                                  </div>

                                              </div>

                                </a>
                                        </div>
                                        <div class="item elementor-repeater-item-7e36fa2">

                                <a class="link" href="#">
                                <div class="list-header">
                                                                              <div class="text-wrap">
                                                      <div class="text">Instructor</div>
                                                  </div>

                                              </div>

                                </a>
                                       </div>
                                        <div class="item elementor-repeater-item-e966fdf">

                                <a class="link" href="#">
                                <div class="list-header">
                                                                              <div class="text-wrap">
                                                      <div class="text">Events</div>
                                                  </div>

                                              </div>

                                </a>
                                         </div>
                                        <div class="item elementor-repeater-item-197fb31">

                                <a class="link" href="#">
                                <div class="list-header">
                                                                              <div class="text-wrap">
                                                      <div class="text">Become A Teacher</div>
                                                  </div>

                                              </div>

                                </a>
                                      </div>
                                  </div>
                            </div>
                            </div>
                            <div class="elementor-element elementor-element-6b662d8 elementor-widget elementor-widget-spacer" data-id="6b662d8" data-element_type="widget" data-widget_type="spacer.default">
                            <div class="elementor-widget-container">
                              <div class="elementor-spacer">
                          <div class="elementor-spacer-inner"></div>
                        </div>
                            </div>
                            </div>
                                </div>
                              </div>
                            </div>
                     </div>
                     <div className=" col-sm-6 col-md-3 displayFlexFooter"  >
                <div  class=" footerDivs elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-a6f4785" data-id="a6f4785" data-element_type="column">
                <div class=" elementor-column-wrap elementor-element-populated">
                        <div class="elementor-widget-wrap">
                      <div class="elementor-element elementor-element-f1351fa elementor-widget elementor-widget-tm-heading" data-id="f1351fa" data-element_type="widget" data-widget_type="tm-heading.default">
                  <div class="elementor-widget-container">
                    <div class="tm-modern-heading">
                
                    <div class="heading-primary-wrap">
                <h3 class="heading-primary elementor-heading-title">Links</h3>		</div>
              
                
                    </div>
                  </div>
                  </div>
                  <div class="elementor-element elementor-element-b117ee8 edumall-list-layout-block elementor-widget elementor-widget-tm-list" data-id="b117ee8" data-element_type="widget" data-widget_type="tm-list.default">
                  <div class="elementor-widget-container">
                    <div class="edumall-list">
                          <div class="item elementor-repeater-item-03d9b22">

                      <a class="link" href="#">
                      <div class="list-header">
                                                                    <div class="text-wrap">
                                            <div class="text">News &amp; Blogs</div>
                                        </div>

                                    </div>

                      </a>
                    </div>
                              <div class="item elementor-repeater-item-6dd1bdb">

                      <a class="link" href="#">
                      <div class="list-header">
                                                                    <div class="text-wrap">
                                            <div class="text">Library</div>
                                        </div>

                                    </div>

                      </a>
                    </div>
                              <div class="item elementor-repeater-item-7e36fa2">

                      <a class="link" href="#">
                      <div class="list-header">
                                                                    <div class="text-wrap">
                                            <div class="text">Gallery</div>
                                        </div>

                                    </div>

                      </a>
                    </div>
                              <div class="item elementor-repeater-item-e966fdf">

                      <a class="link" href="#">
                      <div class="list-header">
                                                                    <div class="text-wrap">
                                            <div class="text">Partners</div>
                                        </div>

                                    </div>

                      </a>
                    </div>
                              <div class="item elementor-repeater-item-197fb31">

                      <a class="link" href="#">
                      <div class="list-header">
                                                                    <div class="text-wrap">
                                            <div class="text">Career</div>
                                        </div>

                                    </div>

                      </a>
                    </div>
                        </div>
                  </div>
                  </div>
                  <div class="elementor-element elementor-element-ac60af3 elementor-widget elementor-widget-spacer" data-id="ac60af3" data-element_type="widget" data-widget_type="spacer.default">
                  <div class="elementor-widget-container">
                    <div class="elementor-spacer">
                <div class="elementor-spacer-inner"></div>
              </div>
                  </div>
                  </div>
                      </div>
                    </div>
              </div>
                     </div>
                     
                      <div className=" col-sm-6 col-md-3 displayFlexFooter" >
                              <div class="footerDivs elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-2fe0155" data-id="2fe0155" data-element_type="column">
                                <div class="elementor-column-wrap elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                      <div class="elementor-element elementor-element-7fe82fa elementor-widget elementor-widget-tm-heading" data-id="7fe82fa" data-element_type="widget" data-widget_type="tm-heading.default">
                                  <div class="elementor-widget-container">
                                    <div class="tm-modern-heading">
                                
                                    <div class="heading-primary-wrap">
                                <h3 class="heading-primary elementor-heading-title">Support</h3>		</div>
                              
                                
                                    </div>
                                  </div>
                                  </div>
                                  <div class="elementor-element elementor-element-d06dd94 edumall-list-layout-block elementor-widget elementor-widget-tm-list" data-id="d06dd94" data-element_type="widget" data-widget_type="tm-list.default">
                                  <div class="elementor-widget-container">
                                    <div class="edumall-list">
                                          <div class="item elementor-repeater-item-03d9b22">

                                      <a class="link" href="#">
                                      <div class="list-header">
                                                                                    <div class="text-wrap">
                                                            <div class="text">Documentation</div>
                                                        </div>

                                                    </div>

                                      </a>
                                    </div>
                                              <div class="item elementor-repeater-item-6dd1bdb">

                                      <a class="link" href="#">
                                      <div class="list-header">
                                                                                    <div class="text-wrap">
                                                            <div class="text">FAQs</div>
                                                        </div>

                                                    </div>

                                      </a>
                                    </div>
                                              <div class="item elementor-repeater-item-7e36fa2">

                                      <a class="link" href="#">
                                      <div class="list-header">
                                                                                    <div class="text-wrap">
                                                            <div class="text">Forum</div>
                                                        </div>

                                                    </div>

                                      </a>
                                    </div>
                                              <div class="item elementor-repeater-item-e966fdf">

                                      <a class="link" href="#">
                                      <div class="list-header">
                                                                                    <div class="text-wrap">
                                                            <div class="text">Sitemap</div>
                                                        </div>

                                                    </div>

                                      </a>
                                    </div>
                                        </div>
                                  </div>
                                  </div>
                                  <div class="elementor-element elementor-element-23eea77 elementor-widget elementor-widget-spacer" data-id="23eea77" data-element_type="widget" data-widget_type="spacer.default">
                                  <div class="elementor-widget-container">
                                    <div class="elementor-spacer">
                                <div class="elementor-spacer-inner"></div>
                              </div>
                                  </div>
                                  </div>
                                      </div>
                                    </div>
                              </div>
                      </div>
                </div>
                    </div>
              </section>
                  <section class="elementor-section elementor-inner-section elementor-element elementor-element-e1e81c0 elementor-section-content-middle elementor-section-gap-beside-no elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section-column-vertical-align-stretch" data-id="e1e81c0" data-element_type="section">
                      <div class="elementor-container elementor-column-gap-extended">
                        <div class="elementor-row">
                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a139656" data-id="a139656" data-element_type="column">
                <div class="elementor-column-wrap elementor-element-populated">
                        <div class="elementor-widget-wrap">
                      <div class="elementor-element elementor-element-777a11d edumall-list-layout-inline elementor-widget elementor-widget-tm-list" data-id="777a11d" data-element_type="widget" data-widget_type="tm-list.default">
                  <div class="elementor-widget-container">
                    <div class="edumall-list">
                          <div class="item elementor-repeater-item-03d9b22">

                      <a class="link" href="#">
                      <div class="list-header">
                                                                    <div class="text-wrap">
                                            <div class="text">Terms of Use</div>
                                        </div>

                                    </div>

                      </a>
                    </div>
                              <div class="item elementor-repeater-item-6dd1bdb">

                      <a class="link" href="#">
                      <div class="list-header">
                                                                    <div class="text-wrap">
                                            <div class="text">Privacy Policy</div>
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
                  <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c09f1dd" data-id="c09f1dd" data-element_type="column">
                <div class="elementor-column-wrap elementor-element-populated">
                        <div class="elementor-widget-wrap">
                      <div class="elementor-element elementor-element-bde44ad elementor-widget elementor-widget-tm-heading" data-id="bde44ad" data-element_type="widget" data-widget_type="tm-heading.default">
                  <div class="elementor-widget-container">
                    <div class="tm-modern-heading">
                
                    <div class="heading-primary-wrap">
                <p class="heading-primary elementor-heading-title">© 2020 EduMall. All Rights Reserved</p>		</div>
              
                
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
  </>

  )
};

export default Footer;
