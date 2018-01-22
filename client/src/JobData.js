import React from 'react';

export default class JobData extends React.Component {
  render(){
    return(
      <ul>
      {
        this.props.data.map((item)=>{
          return (
            <li key={item._id}>
            <h3>Company: {item.organization}</h3>
            <p>Job Title: {item.name}</p>
            <p>Salary {item.amount}</p>
            <p>Next Action: {item.due_date}</p>
            <p>The Website: {item.job_url}</p>
          </li>
        );
        })
      }
      </ul>
    )
  }
};
