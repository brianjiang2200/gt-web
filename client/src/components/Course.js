import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListCourse from './ListCourse';

class Course extends Component {

  state = {
    courses: []
  }

  componentDidMount(){
    this.getCourses();
  }

  getCourses = () => {
    axios.get('/api/courses')
      .then(res => {
        if(res.data){
          this.setState({
            courses: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteCourse = (id) => {

    axios.delete(`/api/courses/${id}`)
      .then(res => {
        if(res.data){
          this.getCourses()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { courses } = this.state;

    return(
      <div>
        <h1>Courses</h1>
        <Input getCourses={this.getCourses}/>
        <ListCourse courses={courses} deleteCourse={this.deleteCourse}/>
      </div>
    )
  }
}

export default Course;