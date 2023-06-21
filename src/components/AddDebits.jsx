import React from "react";
import AccountBalance from "./AccountBalance";

function AddDebits(props) {
        
    return (
        <div style={{margin:"10px"}}>
            <AccountBalance debs={props.debs} creds={props.creds} style={{fontSize:"20px"}}/>
            <div style={{marginTop:"8px", marginBottom:"8px"}}>Debit: ${props.debs}</div>
            <form onSubmit={props.handleDebitDataEntry} style={{display:"inline"}}>
                <label>Description: </label>
                <input></input>
                <label style={{marginLeft:"16px"}}>Amount: </label>
                <input></input>
                <button type="submit">Add Debit</button>
            </form>
            <div>
                {props.debitEntries && props.debitEntries.map((debit, index) => (
                    <div key={index} className="list-item">
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