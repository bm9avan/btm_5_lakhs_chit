import React, { useEffect, useState } from "react";

export default function Table({ month, chit }) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    let fakearr = [];
    if (chit === 0) {
      let haraaju = 470000;
      for (let i = 0; i < 20; i++) {
        haraaju += 5000;
        fakearr.push({ i: i + 1, haraaju });
      }
    } else if (chit === 1) {
      let haraaju = 472500;
      for (let i = 0; i < 40; i++) {
        if (i > 32) {
          haraaju += 5000;
        } else {
          haraaju += 2500;
        }
        fakearr.push({ i: i + 1, haraaju });
      }
    } else {
      let haraaju = 24000;
      let profit = 1000;
      for (let i = 0; i < 20; i++) {
        haraaju -= 1000;
        profit -= 50;
        if (chit === 2) {
          //2 Lakhs
          fakearr.push({
            i: i + 1,
            haraaju: haraaju * 2,
            profit: profit * 2,
            emi: (5000 - profit) * 2,
          });
        } else {
          fakearr.push({ i: i + 1, haraaju, profit, emi: 5000 - profit });
        }
      }
    }
    setArr(fakearr);
  }, [month, chit]);
  return (
    <>
      <h3>
        You will recive amount {arr[+month - 1] ? arr[+month - 1].haraaju : ""}{" "}
        in {month}th month
      </h3>
      {(chit === 0 || chit === 1) && (
        <table className="result">
          <thead>
            <tr>
              <th>Month</th>
              <th>EMI</th>
              <th>Haraaju</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((each) => {
              return (
                <tr key={each.i} id={each.i === +month ? "highlight" : ""}>
                  <td>{each.i} </td>
                  <td>{chit === 0 ? "25,000" : "12,500"}</td>
                  <td>{each.haraaju}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {chit !== 0 && chit !== 1 && (
        <table className="result">
          <thead>
            <tr>
              <th>Month</th>
              <th>Haraaju</th>
              <th>Profit</th>
              <th>EMI</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((each) => {
              return (
                <tr key={each.i} id={each.i === +month ? "highlight" : ""}>
                  <td>{each.i} </td>
                  <td>{each.haraaju}</td>
                  <td>{each.profit}</td>
                  <td>{each.emi}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
