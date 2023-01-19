import React from "react";

const TopBar = ({data}) => {
  return (<>
  {data.map(item =>  <div className="page-top-bar top-bar-03">
    <div className="container">
      <div className="row row-eq-height">
        <div className="col-md-6 top-bar-left">
          <div className="top-bar-wrap">
            <div className="top-bar-info">
              <ul className="info-list">
                <li className="info-item">
                  {/* <a href="tel:+8819906886" className="info-link"> */}
                  <a href="javascript:;" className="info-link">
                    <i className="info-icon fas fa-phone"></i>
                    <span className="info-text">{item.phone}</span>
                  </a>
                </li>
                <li className="info-item">
                  <a href="javascript:;" className="info-link">
                    <i className="info-icon far fa-envelope"></i>
                    <span className="info-text">{item.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 top-bar-right">
          <div className="top-bar-wrap">
            <div className="top-bar-user-links">
              <div className="link-wrap">
                <a
                 href="javascript:;"
                  title="Log in"
                  className="open-popup-login top-bar-login-link"
                >
                {item.loginName}
                </a>
                <a
                 href="javascript:;"
                  title="Register"
                  className="open-popup-register top-bar-register-link"
                  >
                    {item.registrationName}
                </a>
              </div>
            </div>
            <div className="top-bar-social-network">
            <div className="inner">
                {item.iconsPath.map(icon => <a
                        className=" social-link"
                        href={icon.path}
                        target="_blank"
                        rel="nofollow"
                        >
                          <i className={`social-icon fab ${icon.iconClass}`}></i>
                      </a>)}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)}  
  </>
    );
};

export default TopBar;
    // <div className="page-top-bar top-bar-03">
    //   <div className="container">
    //     <div className="row row-eq-height">
    //       <div className="col-md-6 top-bar-left">
    //         <div className="top-bar-wrap">
    //           <div className="top-bar-info">
    //             <ul className="info-list">
    //               <li className="info-item">
    //                 <a href="tel:+8819906886" className="info-link">
    //                   <i className="info-icon fas fa-phone"></i>

    //                   <span className="info-text">(+88) 1990 6886</span>
    //                 </a>
    //               </li>
    //               <li className="info-item">
    //                 <a href="mailto:agency@thememove.com" className="info-link">
    //                   <i className="info-icon far fa-envelope"></i>

    //                   <span className="info-text">agency@thememove.com</span>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-6 top-bar-right">
    //         <div className="top-bar-wrap">
    //           <div className="top-bar-user-links">
    //             <div className="link-wrap">
    //               <a
    //                 href="/"
    //                 title="Log in"
    //                 className="open-popup-login top-bar-login-link"
    //               >
    //                 Log in
    //               </a>
    //               <a
    //                 href="/"
    //                 title="Register"
    //                 className="open-popup-register top-bar-register-link"
    //               >
    //                 Register
    //               </a>
    //             </div>
    //           </div>
    //           <div className="top-bar-social-network">
    //             <div className="inner">
    //               <a
    //                 className=" social-link"
    //                 href="https://twitter.com"
    //                 target="_blank"
    //                 rel="nofollow"
    //               >
    //                 <i className="social-icon fab fa-twitter"></i>
    //               </a>
    //               <a
    //                 className=" social-link"
    //                 href="https://facebook.com"
    //                 target="_blank"
    //                 rel="nofollow"
    //               >
    //                 <i className="social-icon fab fa-facebook-f"></i>
    //               </a>
    //               <a
    //                 className=" social-link"
    //                 href="https://instagram.com"
    //                 target="_blank"
    //                 rel="nofollow"
    //               >
    //                 <i className="social-icon fab fa-instagram"></i>
    //               </a>
    //               <a
    //                 className=" social-link"
    //                 href="https://linkedin.com"
    //                 target="_blank"
    //                 rel="nofollow"
    //               >
    //                 <i className="social-icon fab fa-linkedin-in"></i>
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

