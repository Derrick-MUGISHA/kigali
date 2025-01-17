function ListGroup() {
  let items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  items = [];

  return (
    <>
      <h1>ListGroup</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
