import React, { Component } from "react";
import axios from 'axios';

import PersonList from "../personList/personList";

export default class Master extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      users: [],
      error: null
    }
    // https://jsonplaceholder.typicode.com/users?_sort=name&_order=asc
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <PersonList />
      </div>
    );
  }
}
