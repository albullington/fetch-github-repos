import React, { Component } from 'react';
import axios from 'axios';

import List from './list';
import Form from './form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      data: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getGitHubRepo(username) {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    }, () => this.getGitHubRepo(this.state.value));
  }

  render() {
    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <List
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
