import React from 'react'
import AccountBalance from './AccountBalance'

function Home(props) {
  return (
    <div>
        <div>Home</div>
        <AccountBalance creds={props.creds} debs={props.debs} setAccountBalance={props.setAccountBalance}/>
    </div>
  )
}

export default Home