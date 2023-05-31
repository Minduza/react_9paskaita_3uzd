import ListItem from "./ListItem";

const { useState, useRef } = require("react");

const List = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const todoRef = useRef();

  const inputFocus = () => {
    todoRef.current.focus();
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addListItem = () => {
    setList((prevState) => [...prevState, inputValue]);
    setInputValue("");
  };

  const enterKeydown = (e) => {
    if (e.key === "Enter") {
      addListItem();
    }
  };

  const deleteItem = (index) => {
    setList((prevState) => {
      const newList = [...prevState];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <div className="todoContainer">
      <div className="message">
        <h2>
          {list.length > 0
            ? `You have ${list.length} Todos`
            : "Todo list is empty"}
        </h2>
      </div>
      <ul>
        {list.map((item, index) => (
          <ListItem
            key={index}
            text={item}
            deleteItem={() => deleteItem(index)}
          />
        ))}
      </ul>
      <div className="inputRow">
        <input
          className="todoInput"
          type="text"
          value={inputValue}
          onChange={inputHandler}
          placeholder="Enter item"
          ref={todoRef}
          onKeyDown={enterKeydown}
        />
        <button
          className="inputBtn"
          onClick={() => {
            addListItem();
            inputFocus();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default List;
