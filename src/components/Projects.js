import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { NavLink } from "react-router-dom";

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

    return (
        <section className="projects" id="projects">
            <h2><FontAwesomeIcon icon={faCode}/> Proyectos</h2>
            <div className="cards">
                {
                    projects.map((project) => {
                        return(
                            <div className="card" key={project.id}>
                                <NavLink to={`/proyecto/${project.id}`}>
                                    <img className="card-image" src={project.frontpage} alt={project.title}/>
                                </NavLink>
                                <div className="card-content">
                                    <NavLink to={`/proyecto/${project.id}`}>
                                        <h3 className="card-title">{project.title}</h3>
                                    </NavLink>
                                    <h5 className="card-subtitle">{project.subtitle}</h5>
                                    <p className="card-description">
                                        {project.description.substring(0, 90) + '...'}
                                    </p>
                                    <NavLink to={`/proyecto/${project.id}`} className="card-button">
                                        Ver mas
                                        <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}
 
export default Projects;