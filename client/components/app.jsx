import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      value: '',
      data: [],
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
   
  handleChange(e) {
    this.setState({
      value: e.target.value
    }, () => getGitHubRepo(this.state.value));
  }
   
  handleSubmit(e) {
    e.preventDefault();
  }
   
  getGitHubRepo(username) {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
      console.log(response);
        this.setState({
          data: response.data,
        })
      })
      .catch((err) => {
         if (err) throw err;
      })
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
