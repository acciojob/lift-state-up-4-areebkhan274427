import React, { useState } from "react";
import Child from "./Child";
function Parent() {
  const [arr, setArr] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addData() {
    setArr([
      ...arr,
      {
        name: name,
        price: price,
      },
    ]);
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <label>Item Name</label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="itemName"
      />
      <label>Item Price</label>
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        id="itemPrice"
      />
      <button onClick={addData}>Add Item</button>
      <Child data={arr} changeData={setArr}/>
    </div>
  );
}

export default Parent;
