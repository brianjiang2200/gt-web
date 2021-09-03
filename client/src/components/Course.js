import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

class Course extends Component {

  state = {
    course: [{
      title: "",
      summatives: [],
      active: true,
      description: ""
    }]
  }

  componentDidMount() {
    this.getCourse();
  }

  getCourse = () => {
    const id = this.props.match.params.id;
    axios.get(`/api/courses/${id}`)
      .then(res => {
        if(res.data){
          this.setState({
            course: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let course = this.state.course[0];
    return (
      <div className="course-wrapper">
          <div className="course-title">
            {course.title}
          </div>
          <div className="course-description">
            {course.description}
          </div>
          <div className="summative-headers">
            <div>
              Name
            </div>
            <div>
              Weight
            </div>
            <div>
              Grade
            </div>
          </div>
          <div className="course-summatives">
            {course.summatives.map(summ => {
              return (
                <div className="summative-wrapper">
                  <div className="summative-title">
                    {summ.title}
                  </div>
                  <div className="summative-weight">
                    {summ.weight}
                  </div>
                  <div className="summative-grade">
                    {summ.grade}
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    );
  }

};

export default withRouter(Course);