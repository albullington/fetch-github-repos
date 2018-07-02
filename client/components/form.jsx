import React from 'react';

const Form = ({ handleSubmit, handleChange, value }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} type="text" placeholder="Search for a User's repository..." />
      <button type="submit">Search</button>
    </form>
  </div>
);

export default Form;
