import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Table from "./Table";

const options = [
  {
    label: "5 Lakhs",
    value: "5",
    month:"40"
  },
  {
    label: "2 Lakhs",
    value: "2",
    month: "20"
  },
  {
    label: "1 Lakhs",
    value: "1",
    month:"10"
  },
];

export default function App() {
  const [dis, setDis] = useState("");
  const [chit, setChit] = useState(0)
  const inref = useRef();
  useEffect(()=>{
    inref.current.focus()
  },[])
  
  function functionSet(v){
    if(v==='5'){
      setChit(0)
    }else if(v==='2'){
      setChit(1)
    }else {
      setChit(2)
    }
    setDis("");
    inref.current.value = "";
    inref.current.focus();
  }
  
  function printHandler(e) {
    e.preventDefault();
    setDis(inref.current.value);
    inref.current.blur();
    setTimeout(() => {
      window.location.replace("#highlight");
    }, 100);
  }
  return (
    <div className="App">
      <h2>Manjunath - 9902781386</h2>
      <h4>
        
        {options[chit].month} Months <span><select value={options[chit].value} onChange={(e)=>functionSet(e.target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select></span>
      </h4>
      <form onSubmit={printHandler}>
        <label htmlFor="inMonth">Month: </label>
        <input ref={inref} type="number" min="1" max={options[chit].month} id="inMonth" placeholder="Enter Month"></input>
      </form>
      {dis !== "" ? (
        <Table month={inref.current.value} chit={chit}/>
      ) : (
          <p className="noData">"Choose a month <span>(1 to {options[chit].month})</span> for Chit selection"</p>
      )}
    </div>
  );
}
