import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card grey z-depth-0 lighten-2">
      <div className="card-content">
        <span className="card-title">{project.title}</span>
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>
          Posted by {project.authorFirstName} {project.authorLastName}
        </div>
        <div>Posted {moment(project.createdAt.toDate()).calendar()}</div>
      </div>
    </div>
  );
};

export default ProjectSummary;
