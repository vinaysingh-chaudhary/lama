"use client"
import { useState, createContext } from "react";

const ProjectModalContext = createContext(); 

const ProjectModalContextProvider = ({children}) => {
    const [projectModalActive, setProjectModalActive] = useState(false); 

    return (
        <ProjectModalContext.Provider value={{projectModalActive, setProjectModalActive}} >
            {children}
        </ProjectModalContext.Provider>
    )
}

export {ProjectModalContext, ProjectModalContextProvider}