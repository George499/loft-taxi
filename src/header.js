import React from "react"
import './Header.scss'
import Radium from 'radium'

  const Header = (props) => {

    return (
      <>
        <div className="header">{props.pagesRender()}</div>
      </>
    )
  }

export default Radium(Header)