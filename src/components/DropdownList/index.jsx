import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const sortByList = [
  {
    key: "Sort by popularity",
    name: "Sort by popularity",
  },
  {
    key: "Sort by price: high to low",
    name: "Sort by price: high to low",
  },
  {
    key: "Sort by price: low to high",
    name: "Sort by price: low to high",
  },
  {
    key: "Sort by latest",
    name: "Sort by latest",
  },
  {
    key: "Sort by average rating",
    name: "Sort by average rating",
  },
];

const DropdownList = () => {
  const [sortBy, setSortBy] = useState("Sort by popularity");

  return (
    <Dropdown className=" d-flex justify-content-end">
      <Dropdown.Toggle
        variant="link"
        id="dropdown-basic"
        className="text-light"
      >
        {sortBy}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {sortByList.map((item) => (
          <Dropdown.Item key={item.key} onClick={() => setSortBy(item.key)}>
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownList;
