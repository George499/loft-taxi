import React from "react"
import './Header.scss'
import Radium from 'radium'

  const Header = (props) => {

    return (
      <>
        <div className="header">{props.setPage()}</div>
      </>
    )
  }

export default Radium(Header)