import React, { Component } from 'react'
import StudentDetails from './StudentDetails'
import STUDENT from './students.json'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      student:STUDENT
    }
  }
  render() {
    return (
      <StudentDetails data={this.state.student} />
    )
  }
}
