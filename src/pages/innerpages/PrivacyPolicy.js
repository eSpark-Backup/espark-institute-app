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
                                <h4 className="title">{Terms}</h4>
                                <p>{TermsPara}</p>
            
                                <h4 className="title">{UseLicense}</h4>
                                <ol type="a">
                                    <li>{UseLicense_OL_a}</li>
                                    <ol type="i">
                                        <li>{UseLicense_OL_i}</li>
                                        <li>{UseLicense_OL_ii}</li>
                                        <li>{UseLicense_OL_iii}</li>
                                        <li>{UseLicense_OL_iv}</li>
                                        <li>{UseLicense_OL_v}</li>
                                    </ol>
                                    <li>{UseLicense_OL_b}</li>
                                </ol>

                                <h4 className="title">{Disclaimer}</h4>
                                <p>{DisclaimerPara}</p>

                                <h4 className="title">{Constraints}</h4>
                                <p>{ConstraintsPara}</p>
                    
                                <h4 className="title">{Amendments}</h4>
                                <p>{AmendmentsPara}</p>

                                <h4 className="title">{Links}</h4>
                                <p>{LinksPara}</p>

                                <h4 className="title">{SiteModifications}</h4>
                                <p>{SiteModifications_Para}</p>

                                <h4 className="title">{GoverningLaw}</h4>
                                <p>{GoverningLaw_Para}</p>
                                <p>{GoverningLaw_ParaSmall}</p>

                                <h4 className="title">{PRIVACY_POLICY}</h4>
                                <p>{PrivacyPolicy_Para}</p>
                                <ul>
                                    <li>{PrivacyPolicy_UL1}</li>
                                    <li>{PrivacyPolicy_UL2}</li>
                                    <li>{PrivacyPolicy_UL3}</li>
                                    <li>{PrivacyPolicy_UL4}</li>
                                    <li>{PrivacyPolicy_UL5}</li>
                                    <li>{PrivacyPolicy_UL6}</li>
                                    <li>{PrivacyPolicy_UL7}</li>
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