import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

import '../css/Course.css';

class Course extends Component {

  state = {
    projected: 0,
    cumulative: 0,
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
          //Set state to returned Data
          this.setState({
            projected: 0,
            cumulative: 0,
            course: res.data
          });
          //Compute new projected average
          let totalWeight = 0;
          let totalAcquired = 0;
          let course = this.state.course[0];
          course.summatives.forEach((summ, index, array) => {
            const weight = parseFloat(summ.weight['$numberDecimal']);
            totalWeight += weight;
            totalAcquired += weight * parseFloat(summ.grade['$numberDecimal']);
          });
          //Compute cumulative score
          this.setState({
            projected: (totalWeight > 0) ? 
                (totalAcquired/totalWeight).toFixed(1) : "N/A",
            cumulative: (totalWeight > 0) ? 
                (totalAcquired/100.0).toFixed(1) : "N/A",
            course: this.state.course
          });
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let course = this.state.course[0];
    return (
      <div className="course-wrapper">
          <div className="course-row">
            <div className="course-title">
              {course.title}
            </div>
            <div className="projected-avg">
              Projected Average: <b>{this.state.projected}</b>
            </div>
          </div>
          <div className="course-row">
            <div className="course-description">
              {course.description}
            </div>
            <div className="cumulative">
              Cumulative: <b>{this.state.cumulative}</b>
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