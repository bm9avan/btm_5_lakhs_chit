import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Table from "./Table";

const options = [
  {
    label: "5 Lakhs(20 Months)",
    value: "5-20",
    month: "20"
  },
  {
    label: "5 Lakhs(40 Months)",
    value: "5-40",
    month: "40"
  },
  {
    label: "2 Lakhs(20 Months)",
    value: "2",
    month: "20"
  },
  {
    label: "1 Lakhs(20 Months)",
    value: "1",
    month: "20"
  },
];

export default function App() {
  const [dis, setDis] = useState("");
  const [chit, setChit] = useState(0)
  const inref = useRef();
  useEffect(() => {
    inref.current.focus()
  }, [])

  function functionSet(v) {
    if (v === '5-20') {
      setChit(0)
    } else if (v === '5-40') {
      setChit(1)
    } else if (v === '2') {
      setChit(2)
    } else {
      setChit(3)
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

        <span><select value={options[chit].value} onChange={(e) => functionSet(e.target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select></span>
      </h4>
      <form onSubmit={printHandler}>
        <input ref={inref} type="number" min="1" max={options[chit].month} id="inMonth" placeholder="Enter Month"></input>
      </form>
      {dis !== "" ? (
        <Table month={inref.current.value} chit={chit} />
      ) : (
        <p className="noData">"Choose a month <span>(1 to {options[chit].month})</span> for Chit selection"</p>
      )}
    </div>
  );
}
