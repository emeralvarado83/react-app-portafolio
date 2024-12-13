import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Project = () => {

    const {projectId} = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    // Estado para Lightbox
    const [lightbox, setLightbox] = useState({
        isOpen: false,
        currentImage: null,
    });

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const projectDoc = doc(db, 'projects', projectId);
                const projectSnap = await getDoc(projectDoc);
                
                if(projectSnap.exists()) {
                    setProject({...projectSnap.data(), id: projectSnap.id});
                } else {
                    console.log('El proyecto no existe');
                }
            }catch(error) {
                console.error("Error al obtener el proyecto:", error);
            }
            setLoading(false);
        }

        fetchProject();

    }, [projectId]);

    const openLightbox = (image) => {
        setLightbox({ isOpen: true, currentImage: image });
        document.body.classList.add("no-scroll"); // Bloquear scroll del fondo
      };
    
      const closeLightbox = () => {
        setLightbox({ isOpen: false, currentImage: null });
        document.body.classList.remove("no-scroll"); // Restaurar scroll del fondo
      };

    if (loading) {
        return <div className="loading">Cargando...</div>;
    }

    if (!project) {
        return <div className="error">Ocurrió un error al cargar el proyecto.</div>;
    }

    return (
        <section className="project">
            <div className="project-info">
                <h2 className="project-title">{project.title} - {project.subtitle && <span className="project-subtitle">{project.subtitle}</span>}</h2>
                <>
                    {
                        project.description.map((parrafo, index) => {
                            return(
                                <p key={index}>{parrafo}</p>
                            )
                        })
                    }
                </>
            </div>
            <div className="project-pictures">
                <h2>Galería</h2>
                <div className="project-pictures-flex">
                {project.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            className="gallery-image"
                            onClick={() => openLightbox(image)} // Al hacer clic se abre el Lightbox
                        />
                    ))}
                </div>

                {/* Lightbox */}
                {lightbox.isOpen && (
                    <div className="lightbox" onClick={closeLightbox}>
                        <div className="lightbox-content">
                            <img src={lightbox.currentImage} alt="Vista ampliada" />
                            <button className="lightbox-close" onClick={closeLightbox}>
                                ✖
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
 
export default Project;