import React from 'react';
import axios from 'axios';
export default class JobSubmit extends React.Component {
  constructor() {
    super();
    this.state = {
      company: '',
      name: '',
      salary: '',
      next_action:'',
      job_url:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { company, name, salary, next_action, job_url } = this.state;
    console.log(this.state);
    axios.post("/jobSubmit", {
      company,
      name,
      salary,
      next_action,
      job_url
    }).then((res)=>{
    alert("Thank you for your submission");
    this.props.getData();
    this.setState({
      company: '',
      name: '',
      salary: '',
      next_action:'',
      job_url:''
    });
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}> {/* Don't worry about a method or action for now */}
        <label htmlFor="company">Name of Company: </label>
          <input value={this.state.company} onChange={this.handleChange} name="company" type="text" />
        <label htmlFor="name">Job Title:: </label>
          <input value={this.state.name} onChange={this.handleChange} name="name" type="text" />
          <label htmlFor="salary">What is the Salary?: </label>
            <input value={this.state.salary} onChange={this.handleChange} name="salary" type="text" />
            <label htmlFor="next_action">What do you need to do? </label>
              <input value={this.state.next_action} onChange={this.handleChange} name="next_action" type="text" />
              <label htmlFor="job_url">URL: </label>
              <input value={this.state.job_url} onChange={this.handleChange} name="job_url" type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
