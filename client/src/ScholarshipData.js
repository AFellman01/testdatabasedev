import React from 'react';

export default class ScholarshipData extends React.Component {
  render(){
    return(
      <ul>
      {
        this.props.data.map((item)=>{
          return (
            <li key={item._id}>
            <h3>Org: {item.organization}</h3>
            <p>Name of Scholarship: {item.name}</p>
            <p>The Amount Being Offered: {item.amount}</p>
            <p>When Submissions are Due: {item.due_date}</p>
            <p>The Website: {item.url}</p>
          </li>
        );
        })
      }
      </ul>
    )
  }
};
