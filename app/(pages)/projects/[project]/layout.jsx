"use client"
import React from "react";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import { PodcastContextProvider } from "../../../../context/PodcastContext";

const ProjectLayout = ({ children }) => {
  return (
    <PodcastContextProvider>
      <div className="flex justify-end">
        <Sidebar />

        <div className="min-w-[80vw] mt-20">{children}</div>
      </div>
    </PodcastContextProvider>
  );
};

export default ProjectLayout;
