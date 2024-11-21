import React from 'react';
import photoDos from '../assets/emerson-perfil-2.png';

const AboutMe = () => {

    return (
        <section className="about-me" id='about-me'>
            <h2>Sobre mí</h2>
            <div className="about-me-description">
                <p>Hola soy Emerson, con 4 años de experiencia en el desarrollo web, domino tecnologías como HTML, CSS y JavaScript, mi framework favorito para construir interfaces es React, este lo complemento con Tailwind CSS para un diseño elegante y funcional.</p>
                <p>Aunque mi enfoque principal es el frontend, también he trabajado con otros lenguajes como PHP y MySQL, cabe mencionar que suelo utilizar Firebase como base de datos en proyectos con React. Mis herramientas de trabajo incluyen Visual Studio Code, Git, GitHub y NPM. Actualmente estoy ampliando mis habilidades aprendiendo Astro y TypeScript.</p>
                <p>Mi objetivo es combinar tecnologías y creatividad para ofrecer soluciones web de alta calidad. ¡Echa un vistazo a mis proyectos y descubramos cómo puedo aportar valor a tu equipo o proyecto!</p>
            </div>
            <div className="about-me-photo">
                <img src={photoDos} alt=""/>
            </div>
        </section>
    );
}
 
export default AboutMe;