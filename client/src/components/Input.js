import React, { Component } from 'react';
import axios from 'axios';


class Input extends Component {

  state = {
    action: ""
  }

  addCourse = () => {
    const task = {action: this.state.action}

    if(task.action && task.action.length > 0){
      axios.post('/api/courses', task)
        .then(res => {
          if(res.data){
            this.props.getCourses();
            this.setState({action: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      action: e.target.value
    })
  }

  render() {
    let { action } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={action} />
        <button onClick={this.addCourse}>add course</button>
      </div>
    )
  }
}

export default Input