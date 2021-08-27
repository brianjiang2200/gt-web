import React from 'react';

const ListCourse = ({ courses, deleteCourse }) => {

  return (
    <ul>
      {
        courses &&
          courses.length > 0 ?
            (
              courses.map(course => {
                return (
                  <li key={course._id} onClick={() => deleteCourse(course._id)}>{course.action}</li>
                )
              })
            )
            :
            (
              <li>No course(s) left</li>
            )
      }
    </ul>
  )
}

export default ListCourse