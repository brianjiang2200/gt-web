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
      <div>
        <input type="text" onChange={this.handleChange} value={title} />
        <button onClick={this.addCourse}>add course</button>
      </div>
    )
  }
}

export default Input