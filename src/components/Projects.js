import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        const q = query(
            collection(db, 'projects'),
            orderBy('timestamp', 'desc')
        );

        const unsubscribe = onSnapshot(
            q, (snapshot) => {
                const projectsArray =  snapshot.docs.map((document) => {
                    return {...document.data(), id: document.id}
                })

                setProjects(projectsArray);
            }, 
            (error) => {
                console.log(error);
            }
        );

        return () => unsubscribe();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <section className="projects" id="projects">
            <h2><FontAwesomeIcon icon={faCode}/> Proyectos</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                    projects.map((project) => {
                        return(
                            <article className="card" key={project.id}>
                                <NavLink to={`/proyecto/${project.id}`}>
                                    <img className="card-image" src={project.frontpage} alt={project.title}/>
                                </NavLink>
                                <div className="card-content">
                                    <div className="card-content-lr">
                                        <div className="card-content-l">
                                            <NavLink to={`/proyecto/${project.id}`}>
                                                <h3 className="card-title">{project.title}</h3>
                                                <h5 className="card-subtitle">{project.subtitle}</h5>
                                            </NavLink>
                                        </div>
                                        <div className="card-content-r">
                                            <a href={project.link ? project.link : '#'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                                        </div>
                                    </div>
                                    <p className="card-description">
                                        {project.description.join(" ").substring(0, 90) + '...'}
                                    </p>
                                    <NavLink to={`/proyecto/${project.id}`} className="card-button">
                                        Ver mas
                                        <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </NavLink>
                                </div>
                            </article>
                        )
                    })
                    }
                </Slider>
            </div>
        </section>
    );
}
 
export default Projects;