import React from 'react';
import '../css/ListCourse.css';

import deleteIcon from '../assets/delete-icon.png';

const ListCourse = ({ courses, deleteCourse }) => {

  return (
    <ul>
      {
        courses &&
          courses.length > 0 ?
            (
              courses.map(course => {
                return (
                  <li className='course-entry' key={course._id}>
                    <div className='course-entry-title'>
                      {course.title}
                    </div>
                    <div className='course-entry-delete'>
                      <img className='deleteIcon' src={deleteIcon} 
                        onClick={() => deleteCourse(course._id)} alt="" width="30"/>
                    </div>
                  </li>
                );
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