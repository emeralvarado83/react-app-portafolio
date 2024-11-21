import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return (
        <section className='hero' id="hero">
            <div className="title-available">
                <h1>Hola, <span>soy Emerson</span></h1>
                <a href='#'><FontAwesomeIcon icon={faCircleDot}/> Disponible para trabajar</a>
            </div>
            <h2>+4 años de experiencia.<span> Desarrollador Frontend</span>. Me centro en la creación de interfaces intuitivas y atractivas que mejoren la experiencia del usuario en la web sea cual sea el dispositivo.
            </h2>
            <div className='hero-networks'>
                <a href='https://github.com/emeralvarado83?tab=repositories' target="_blank"><FontAwesomeIcon icon={faGithub}/> Github</a>
                <a href='https://www.linkedin.com/in/emerson-alvarado-2b2384203/' target="_blank"><FontAwesomeIcon icon={faLinkedin}/> Linkedin</a>
                <a href='https://api.whatsapp.com/send/?phone=5804126684648' target="_blank"><FontAwesomeIcon icon={faWhatsapp}/> Whatsapp</a>
                <a href="mailto:emeralvarado1983@gmail.com"><FontAwesomeIcon icon={faEnvelope}/> emeralvarado1983@gmail.com</a>
            </div>
        </section>
    );
}
 
export default Hero;