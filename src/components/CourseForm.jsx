import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

export const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please add a course title");

    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: courseTitle,
    });

    setCourseTitle("");

  };


  return (
    <div className="">
      <div>
        <input
          type="text"
          className="form-input"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />

        <button onClick={() => {handleCourseSubmit()}} className="form-submit-btn">
          Add Course
        </button>
      </div>
    </div>
  );
};
