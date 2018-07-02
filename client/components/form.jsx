import React from 'react';

const Form = ({ handleSubmit, handleChange, value }) => (
  <div>
    <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} value={this.value} type="text" placeholder="Search for a User's repository..." />
      <button type="submit">Search</button>
    </form>
  </div>
);

export default Form;
