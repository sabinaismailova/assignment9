import React from "react";
import AccountBalance from "./AccountBalance";

function AddCredits(props) {

    return (
        <div>
            <AccountBalance creds={props.creds} debs={props.debs} setAccountBalance={props.setAccountBalance}/>
            <div>Credit: {props.creds}</div>
            <form onSubmit={props.handleCreditDataEntry}>
                <label>Description: </label>
                <input></input>
                <label>Amount: </label>
                <input></input>
                <button type="submit">Add Credit</button>
            </form>
            <div>
                {props.creditEntries && props.creditEntries.map((credit, index) => (
                    <div key={index}>
                        <p>Description: {credit.description}</p>
                        <p>Amount: ${credit.amount}</p>
                        <p>Date: {credit.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddCredits