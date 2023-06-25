import React, { useEffect, useState } from "react";

export default function Table({ month }) {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        let fakearr = [];
        let amount = 472500;
        for (let i = 0; i < 40; i++) {
            if (i > 32) {
                amount += 5000;
            } else {
                amount += 2500;
            }
            fakearr.push({ i: i + 1, amount });
        }
        setArr(fakearr);
    }, [month]);
    return (
        <>
            <h3>
                You will recive amount {arr.amount} in {month}th month
            </h3>
            <table className="result">
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>EMI</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((each) => {
                        return (
                            <tr key={each.i} id={each.i === +month ? "highlight" : ""}>
                                <td>{each.i} </td>
                                <td>12,500</td>
                                <td>{each.amount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
