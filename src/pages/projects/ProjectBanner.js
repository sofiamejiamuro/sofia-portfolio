import React from 'react';
import './ProjectBanner.css';

const ProjectBanner = ({area, title}) => {
  // Que el banner sea degradado , tal vez centrado el texto, sin imagen
  return (
    <div className="project-bar">
      <h3>{area}</h3>
      <h2>{title}</h2>
    </div>
  )
}

export default ProjectBanner;