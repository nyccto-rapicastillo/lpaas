import React from 'react';
import FooterNav from './FooterNav';
import UnityLogo from '../assets/img/nyc_unity_logo.png';
import CYELogo from '../assets/img/NYCYE.png';
import MayorsFundLogo from '../assets/img/mayorsfund.png';
import MOCTOLogo from '../assets/img/MOCTO.png';

export default function Footer(props) {
    let returnBgClass = "grid-container usa-footer__return-to-top "+props.returnBg;
    let footerBgClass = "usa-footer "+props.returnBg;
    return(
        <div>
            <footer class={footerBgClass}>
                <div class={returnBgClass}>
                    <a href="#">Return to top</a>
                </div>
                
                <FooterNav
                link1="/" label1="Home"
                link2="/" label2="About"
                link3="/" label3="Contact"
                link4="/" label4="Privacy Policy"
                link5="/" label5="Terms of Use"/>

                <div class="usa-footer__secondary-section bg-unity-purple text-white ">
                    <div class="grid-container bg-unity-purple text-white">
                    <div class="agency-grid footer-text">
                                    <img class="agency-item agency-adjustment-first" src={UnityLogo} alt=""/>

                                    <div class="agency-item">
                                        <p>A collaboration of</p>
                                        <img src={CYELogo} alt=""/>
                                    </div>
                                    
                                    <img class="agency-item agency-adjustment" src={MayorsFundLogo} alt=""/>

                                    <div class="agency-item">
                                        <p>Website created with support of</p>
                                        <img src={MOCTOLogo} alt=""/>
                                    </div> 
                                </div>
                            {/* <div class="usa-footer__contact-links mobile-lg:grid-col-6">
                                
                            </div> */}

                            <p/>
                            
                            <p class="footer-text">© 2020 City of New York. All Rights Reserved.
                            <br/>NYC is a trademark and service mark of the City of New York</p>
                        <div class="grid-row grid-gap">
                        </div>
                    </div>
                </div>
            </footer>
        </div>     
    );
}