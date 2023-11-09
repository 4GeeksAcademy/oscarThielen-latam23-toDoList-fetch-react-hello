import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      setList([...list, value]);
      setValue("");
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-center">to do list</h1>
        <input
          placeholder="What needs to be done?"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <ul>
          {list.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item}
              {hoverIndex === index && (
                <button onClick={() => handleDelete(index)}>x</button>
              )}
            </li>
          ))}
        </ul>
        <span>{list.length} task pending</span>
      </div>
    </div>
  );
};

export default Home;