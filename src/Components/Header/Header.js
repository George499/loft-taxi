import React from "react"
import './Header.scss'
import Radium from 'radium'
import {Logo} from "loft-taxi-mui-theme"; 
import PropTypes from 'prop-types'
import {Button} from "@material-ui/core";

  const Header = (props) => {

    Header.propTypes = {
      pages: PropTypes.number 
    }

    const handleNavLinkClick = (e) => {       
      const buttonName = e.target.dataset.page;
      props.currentPage(buttonName)
  };

    const link = props.pages.map((page, index)=>{
      return(
        <li key={index}>
            <Button data-page={page.name} variant="outlined" color="primary" aria-label="outlined primary button group">
              <span data-page={page.name}>{page.name}</span> 
            </Button> 
        </li>          
      )
  })

    return (
      <>
        <div className="header">
        <Logo/>
          <ul className='navList'
          onClick={handleNavLinkClick}>{link}</ul>          
        </div>
      </>
    )
    
  }

export default Radium(Header)