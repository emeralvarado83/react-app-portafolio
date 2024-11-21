import React from 'react';
const DesktopNav = () => {

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className='desktop-nav'>
            <a onClick={() => handleScroll("hero")}>Inicio</a>
            <a onClick={() => handleScroll("experience")}>Experiencia</a>
            <a onClick={() => handleScroll("projects")}>Proyectos</a>
            <a onClick={() => handleScroll("about-me")}>Sobre mí</a>
        </nav>
    );
}
 
export default DesktopNav;