import React from 'react'
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import { Amendments, AmendmentsPara, Constraints, ConstraintsPara, Disclaimer, DisclaimerPara, GoverningLaw, GoverningLaw_Para, GoverningLaw_ParaSmall, Links, LinksPara, PRIVACY_POLICY, PrivacyPolicy_Para, PrivacyPolicy_Para2, PrivacyPolicy_UL1, PrivacyPolicy_UL2, PrivacyPolicy_UL3, PrivacyPolicy_UL4, PrivacyPolicy_UL5, PrivacyPolicy_UL6, PrivacyPolicy_UL7, SiteModifications, SiteModifications_Para, Terms, TermsPara, UseLicense, UseLicense_OL_a, UseLicense_OL_b, UseLicense_OL_i, UseLicense_OL_ii, UseLicense_OL_iii, UseLicense_OL_iv, UseLicense_OL_v } from '../../constants/Constants';

const PrivacyPolicy = () => {
    return (
        <>
            <SEO title="Privacy Policy" />
            
                <BreadcrumbOne 
                    title="Privacy Policy"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Privacy Policy"
                />
                <div className="edu-privacy-policy-area edu-privacy-policy bg-color-white" style={{paddingTop:"40px", paddingBottom:"80px"}}>
                    <div className="container">
                        <div className="row g-5">
                            <div className="content">
                                <h4 className="title">1. {Terms}</h4>
                                <p>{TermsPara}</p>
            
                                <h4 className="title">2. {UseLicense}</h4>
                                <ol type="a">
                                    <li><span style={{marginLeft:"7px"}}>{UseLicense_OL_a}</span></li>
                                    <ol type="i">
                                        <li><span style={{marginLeft:"20px"}}>{UseLicense_OL_i}</span></li>
                                        <li><span style={{marginLeft:"20px"}}>{UseLicense_OL_ii}</span></li>
                                        <li><span style={{marginLeft:"20px"}}>{UseLicense_OL_iii}</span></li>
                                        <li><span style={{marginLeft:"20px"}}>{UseLicense_OL_iv}</span></li>
                                        <li><span style={{marginLeft:"20px"}}>{UseLicense_OL_v}</span></li>
                                    </ol>
                                    <li><span style={{marginLeft:"7px"}}>{UseLicense_OL_b}</span></li>
                                </ol>

                                <h4 className="title">3. {Disclaimer}</h4>
                                <p>{DisclaimerPara}</p>

                                <h4 className="title">4. {Constraints}</h4>
                                <p>{ConstraintsPara}</p>
                    
                                <h4 className="title">5. {Amendments}</h4>
                                <p>{AmendmentsPara}</p>

                                <h4 className="title">6. {Links}</h4>
                                <p>{LinksPara}</p>

                                <h4 className="title">7. {SiteModifications}</h4>
                                <p>{SiteModifications_Para}</p>

                                <h4 className="title">8. {GoverningLaw}</h4>
                                <p>{GoverningLaw_Para}</p>
                                <p style={{marginTop:"-20px"}}>{GoverningLaw_ParaSmall}</p>

                                <h4 className="title">{PRIVACY_POLICY}</h4>
                                <p>{PrivacyPolicy_Para}</p>
                                <ul>
                                    <li><span style={{marginLeft:"5px"}}>{PrivacyPolicy_UL1}</span></li>
                                    <li><span style={{marginLeft:"5px"}}>{PrivacyPolicy_UL2}</span></li>
                                    <li><span style={{marginLeft:"5px"}}>{PrivacyPolicy_UL3}</span></li>
                                    <li><span style={{marginLeft:"5px"}}>{PrivacyPolicy_UL4}</span></li>
                                    <li><span style={{marginLeft:"5px"}}>{PrivacyPolicy_UL5}</span></li>
                                    <li><span style={{marginLeft:"5px"}}>{PrivacyPolicy_UL6}</span></li>
                                    <li><span style={{marginLeft:"5px"}}>{PrivacyPolicy_UL7}</span></li>
                                </ul>
                                <p>{PrivacyPolicy_Para2}</p>

                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}
export default PrivacyPolicy;