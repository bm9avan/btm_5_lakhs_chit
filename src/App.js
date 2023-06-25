import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Table from "./Table";

export default function App() {
  const [dis, setDis] = useState("");
  const inref = useRef();
  useEffect(()=>{
    inref.current.focus()
  },[])
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
        40 Months <span>5 Lakhs Chit</span>
      </h4>
      <form onSubmit={printHandler}>
        <label htmlFor="inMonth">Month: </label>
        <input ref={inref} type="number" min="1" max="40" id="inMonth" placeholder="Enter Month"></input>
      </form>
      {dis !== "" ? (
        <Table month={inref.current.value} />
      ) : (
        <p className="noData">"Choose a month (1 to 40) for Chit selection"</p>
      )}
    </div>
  );
}
