import React from "react"
import './Header.scss'
import Radium from 'radium'

  const Header = (props) => {

    const link = props.pages.map((page, index)=>{
      return(
        <li key={index}>
          <button 
          onClick={props.currentPage}>{page.name}</button>
        </li>          
      )
  })

    return (
      <>
        <div className="header">
          <ul className='navList'>{link}</ul>
        </div>
      </>
    )
  }

export default Radium(Header)