import React from 'react';
import FooterNav from './FooterNav';
import AgencyGrid from './AgencyGrid';

export default function Footer(props) {
    return(
        <footer className={`usa-footer ${props.returnBg}`}>
            <div className="grid-container usa-footer__return-to-top">
                <a href="#">Return to top</a>
            </div>

            <FooterNav/>

            <AgencyGrid/>

        </footer>   
    );
}