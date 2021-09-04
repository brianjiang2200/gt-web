import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

import '../css/Course.css';

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
    console.log(course);
    return (
      <div className="course-wrapper">
          <div className="course-row">
            <div className="course-title">
              {course.title}
            </div>
            <div className="projected-avg">
              Projected Average: <b>86.7</b>
            </div>
          </div>
          <div className="course-row">
            <div className="course-description">
              {course.description}
            </div>
            <div className="cumulative">
              Cumulative: <b>50.4</b>
            </div>
          </div>
          <hr/>
          <div>Summatives</div>
          <table className="table table-dark summative-table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Weight</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
            {
                course.summatives.map((summ, index) => {
                  return (
                    <tr key={index}>
                      <td>{summ.title}</td>
                      <td>{parseFloat(summ.weight['$numberDecimal']).toFixed(1)}</td>
                      <td>{parseFloat(summ.grade['$numberDecimal']).toFixed(1)}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
      </div>
    );
  }

};

export default withRouter(Course);