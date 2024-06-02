"use client"
import { useState, createContext } from "react";

const PodcastContext = createContext(); 

const PodcastContextProvider = ({children}) => {
    const [podcastModalActive, setPodcastModalActive] = useState(false); 
    const [index, setIndex] = useState(null); 

    return (
        <PodcastContext.Provider value={{podcastModalActive, setPodcastModalActive, index, setIndex}} >
            {children}
        </PodcastContext.Provider>
    )
}

export {PodcastContext, PodcastContextProvider}
