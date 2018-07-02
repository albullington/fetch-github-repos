import React from 'react';

const List = ({ data }) => {
  const dataMap = data.map((repo) => {
    return <ul>{repo.name}</ul>;
  });

  return (
    <div>
      <li>{dataMap}</li>
    </div>
  );
}

export default List;
