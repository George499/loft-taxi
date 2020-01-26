import React from "react"
import './Header.scss'
import Radium from 'radium'

  const Header = (props) => {

    const handleNavLinkClick = (e) => {    
      const buttonName = e.target.dataset.page;
      props.currentPage(buttonName)
  };

    const link = props.pages.map((page, index)=>{
      return(
        <li key={index}>
          <button 
          data-page={page.name}>{page.name}
          </button>
        </li>          
      )
  })
    return (
      <>
        <div className="header">
          <ul className='navList'
          onClick={handleNavLinkClick}>{link}</ul>
        </div>
      </>
    )
  }

export default Radium(Header)