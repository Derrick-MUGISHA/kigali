function ListGroup() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <>
      <h1>ListGroup</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
