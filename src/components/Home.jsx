import React from 'react'
import AccountBalance from './AccountBalance'

function Home(props) {
  return (
    <div style={{display:"flex", justifyContent:"center", margin:"120px"}}>
        <div className="accountBalance">
            <AccountBalance className="home" creds={props.creds} debs={props.debs}/>
        </div>
    </div>
  )
}

export default Home