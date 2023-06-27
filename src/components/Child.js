import React from "react";

function Child({ data, changeData }) {
    function deleteItem(index){
        let tempArr = [...data];
        tempArr.splice(index,1);
        changeData(tempArr);
    }
  return (
    <div className="child">
      <h2>Child Component</h2>
      <ul>
      <li><button>Remove</button></li>
        {
            
            data.map((element,index)=>(
                <li key={index}>{element.name} - ${element.price} <button onClick={()=>deleteItem(index)}>Remove</button></li>
            ))
        }
      </ul>
    </div>
  );
}

export default Child;
