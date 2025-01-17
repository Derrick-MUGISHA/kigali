
// {items: [], headings: strings}

interface Props {
  items: string[];
  headings: string[];
}
function ListGroup(props: Props) {
  let items = ["Item 1", "Item 2", "Item 3", "Item 4"];
//   Hook 
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>ListGroup</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={()  => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
