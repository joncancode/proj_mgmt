import React from 'react'
import projectReducer from '../../store/reducers/projectReducer';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>posted by...</p>
          <p className="grey-text">Tuesday</p>
        </div>
      </div>
    )
}

export default ProjectSummary