import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>Lorem ipsum</p>
        </div>
        <div className="card-action light-blue lighten-5
">
          <div>Posted by...</div>
          <div>Thursday</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
