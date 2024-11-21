import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const Experience = () => {

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'experiences'), 
            (snapshot) => {
                const experiencesArray = snapshot.docs.map((document) => {
                    return {...document.data(), id: document.id}
                })

                setExperiences(experiencesArray);
            },
            (error) => {
                console.log(error);
            }
        );

        // Limpieza del listener al desmontar el componente
        return () => unsubscribe();
    }, []);

    return (
        <section className="experience" id="experience">
            <h2><FontAwesomeIcon icon={faBriefcase}/> Experiencia</h2>
            <ul className="timeline">
                {
                    experiences.map((experience) => {
                        return(
                            <li className="timeline-item" key={experience.id}>
                                <div className="timeline-marker"></div>
                                <span className="timeline-date">{experience.date}</span>
                                <h3 className="timeline-title">{experience.title}</h3>
                                <p className="timeline-description">{experience.description}</p>
                            </li>
                        )
                    })
                }

            </ul>
        </section>
    );
}
 
export default Experience;