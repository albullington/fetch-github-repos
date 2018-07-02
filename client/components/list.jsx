const List = ({ data }) => {
  const dataMap = data.map((repo) => {
    return <li>repo.name</li>;
  });
  
  render() {
    return (
    <div>
      <p>{dataMap}</p>
    </div>
    );
  }
}