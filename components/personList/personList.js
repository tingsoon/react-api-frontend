import React, { Component } from "react";
import axios from 'axios';

export default class Master extends Component {
  constructor() {
    super();
    this.state = {
      isLoading : true,
      users : [],
      error : null
    }
    // https://jsonplaceholder.typicode.com/users?_sort=name&_order=asc
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const data = res.data;
        this.setState({ 
          users : data,
          isLoading : false,
         });
      })
  }


  render() {
    const { users, error, isLoading } = this.state;
    return (
      <div>
        <div>
          {users.map((user) => (
            <div>
              <div >
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.company.catchPhrase}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
