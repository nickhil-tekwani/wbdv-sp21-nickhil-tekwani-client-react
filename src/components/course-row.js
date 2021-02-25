import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseRow = ({
  course,
  deleteCourse,
  updateCourse,
  lastModified,
  title,
  owner,
}) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const saveTitle = () => {
    setEditing(false);
    const newCourse = {
      ...course,
      title: newTitle,
    };
    updateCourse(newCourse);
  };
  return (
    <tr>
      <td>
        {!editing && <Link to="/courses/editor">{title}</Link>}
        {editing && (
          <input
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            className="form-control"
          />
        )}
      </td>
      <td className="d-none d-md-table-cell">{owner}</td>
      <td className="d-none d-lg-table-cell">{lastModified}</td>
      <td>
        {editing && (
          <i
            onClick={() => {
              deleteCourse(course);
              setEditing(false);
            }}
            className="fas fa-times mr-2 float-right color-red"
          ></i>
        )}
        {!editing && (
          <i
            onClick={() => setEditing(true)}
            className="fas fa-edit mr-2 float-right color-blue"
          />
        )}
        {editing && (
          <i
            onClick={() => saveTitle()}
            className="fas fa-check mr-2 float-right color-green"
          />
        )}
      </td>
    </tr>
  );
};

export default CourseRow;
