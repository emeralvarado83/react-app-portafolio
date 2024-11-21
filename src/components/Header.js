import React, { useState, useEffect } from 'react';
import photo from '../assets/emerson-perfil-1.jpg';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isProjectPage = location.pathname.startsWith('/proyecto') || location.pathname.startsWith('/admin');

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    }

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
        if (window.innerWidth > 768) {
            setIsMobileNavOpen(false); // Cierra el menú si el usuario cambia a una pantalla más grande
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [screenWidth.innerWidth]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Cambia el estado al hacer scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            margin: "auto",
            zIndex: 1000,
            backdropFilter: isScrolled ? "blur(10px)" : "none", // Efecto borroso
            backgroundColor: isScrolled
                    ? "rgba(5, 5, 5, 0.5)" // Fondo semitransparente
                    : "transparent", // Transparente al inicio
            transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
            boxShadow: isScrolled ? "0 3px 5px rgba(255, 255, 255, 0.1)" : "none"
        }}>
            <div className='header-container'>
            <img src={photo} alt=''/>
            {
                isProjectPage ? (
                    <button className='back' onClick={() => navigate('/')}>Volver</button>
                ) : (
                    screenWidth > 768 ? (
                        <DesktopNav />
                    ) : (
                        <>
                            <button onClick={toggleMobileNav}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            {isMobileNavOpen && <MobileNav />}
                        </>
                    )                    
                )
            }
            </div>
        </header>
    );
}
 
export default Header;