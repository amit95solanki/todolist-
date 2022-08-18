import React, { useState } from "react";
import "./App.css";
import Tlists from "./Tlists";
const App = () => {

  const [inputList, setinputList] = useState(" ");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setinputList(event.target.value);
  }

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList('');

  }
  const deleteItem = (id) => {
    console.log("deleted")
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;

      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="add item" value={inputList} onChange={itemEvent} />
          <button onClick={listOfItem}>+</button>
          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              return <Tlists
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;