import React from "react";

function AccountBalance(props) {
    return (
        <div className={props.className} style={props.style}>
            Account Balance: ${props.creds - props.debs}
        </div>
    )
}

export default AccountBalance