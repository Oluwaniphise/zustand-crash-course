import React from "react";
import useCourseStore from "../app/courseStore";

export const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  return (
    <div>
      <ul>
        {courses.map((course) => {
          return (
            <React.Fragment key={course.id}>
              <li
                className="course-item"
                style={{
                  backgroundColor: course.completed ? "#00ff0044" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    onChange={(e) => toggleCourseStatus(course.id)}
                    type="checkbox"
                  />
                </span>
                <span>{course?.title}</span>
                <button onClick={() => removeCourse(course.id) } className="delete-btn">Delete</button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
