import React from "react";
import AccountBalance from "./AccountBalance";

function AddCredits(props) {

    return (
        <div style={{margin:"10px"}}>
            <AccountBalance creds={props.creds} debs={props.debs} style={{fontSize:"20px"}}/>
            <div style={{marginTop:"8px", marginBottom:"8px"}}>Credit: ${props.creds}</div>
            <form onSubmit={props.handleCreditDataEntry} style={{display:"inline"}}>
                <label>Description: </label>
                <input></input>
                <label>Amount: </label>
                <input></input>
                <button type="submit">Add Credit</button>
            </form>
            <div>
                {props.creditEntries && props.creditEntries.map((credit, index) => (
                    <div key={index} className="list-item">
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