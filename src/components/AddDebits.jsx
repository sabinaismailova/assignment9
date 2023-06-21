import React from "react";
import AccountBalance from "./AccountBalance";

function AddDebits(props) {
        
    return (
        <div>
            <AccountBalance debs={props.debs} creds={props.creds} setAccountBalance={props.setAccountBalance}/>
            <div>Debit: {props.debs}</div>
            <form onSubmit={props.handleDebitDataEntry}>
                <label>Description: </label>
                <input></input>
                <label>Amount: </label>
                <input></input>
                <button type="submit">Add Debit</button>
            </form>
            <div>
                {props.debitEntries && props.debitEntries.map((debit, index) => (
                    <div key={index}>
                        <p>Description: {debit.description}</p>
                        <p>Amount: ${debit.amount}</p>
                        <p>Date: {debit.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddDebits