import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faGithub,  } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
    return(
        <footer class="footer">
        <div class="footer__content">
            <h3>SmartWatch</h3>
            <ul class="redes">
                <li><a href="https://www.facebook.com/" className="redes__facebook"><FontAwesomeIcon icon={faFacebook} className="i" /></a></li>
                <li><a href="https://www.instagram.com/" className="redes__instagram"><FontAwesomeIcon icon={faInstagram} className="i" /></a></li>
                <li><a href="https://www.linkedin.com" className="redes__linkedin"><FontAwesomeIcon icon={faLinkedin} className="i"/></a></li>
                <li><a href="https://github.com/" className="redes__github"><FontAwesomeIcon icon={faGithub} className="i" /></a></li>
            </ul>
            <div class="footer__copy">
                <p>Copyright &copy;2022 <span>SmartWatch</span></p>
            </div>
        </div>  
        </footer>   
    );
}

export default Footer;