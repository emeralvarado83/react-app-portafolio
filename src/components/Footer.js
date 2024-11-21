import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
    return (
        <footer>
            <span className="footer-text">Emerson Alvarado</span>
            <div className="footer-networks">
                <a href='#'><FontAwesomeIcon icon={faGithub}/></a>
                <a href='#'><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href='#'><FontAwesomeIcon icon={faWhatsapp}/></a>
                <a href="mailto:emeralvarado1983@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
            </div>
        </footer>
    );
}
 
export default Footer;