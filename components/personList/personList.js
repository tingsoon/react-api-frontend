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
        console.log(data);
        data.sort(function(a,b) {
          // return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
          return (a.name > b.name) ? 1 : -1;
        })
        this.setState({ 
          users : data,
          isLoading : false,
         });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { users, error, isLoading } = this.state;
    return (
      <div>
        {error ? <p>{error.message}</p> : null} 
        {!isLoading ? (
          users.map(user => {
            return (
              <div>
                <h3>{user.name}</h3>
              </div>
            )
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    )
  }
}
