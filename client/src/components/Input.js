import React, { Component } from 'react';
import axios from 'axios';


class Input extends Component {

  state = {
    title: ""
  }

  addCourse = () => {
    const newEntry = {title: this.state.title}

    if(newEntry.title && newEntry.title.length > 0){
      axios.post('/api/courses', newEntry)
        .then(res => {
          if(res.data){
            this.props.getCourses();
            this.setState({title: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    let { title } = this.state;
    return (
      <div className="course-input">
        <input type="text" onChange={this.handleChange} value={title} />
        <button type="button" className="btn btn-success" onClick={this.addCourse}>Add Course</button>
      </div>
    )
  }
}

export default Input