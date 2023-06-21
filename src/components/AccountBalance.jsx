import React from "react";

function AccountBalance(props) {
    return (
        <div>
            <div>AccountBalance: {props.creds - props.debs}</div>
        </div>
    )
}

export default AccountBalance