import React from 'react';

const List = ({ data }) => {
  const dataMap = data.map(repo => (<ul>
    <hr />
    <a href={repo.html_url}>{repo.name}</a>
    <p>{repo.description}</p>
      <ul>Forks Count: {repo.forks_count}</ul>
      <ul>Issues Open: {repo.open_issues_count}</ul>
      <ul>Stargazers Count: {repo.stargazers_count}</ul>    
    </ul>));

  return (
    <div>
      {dataMap}
    </div>
  );
};

export default List;
