import React, {useContext} from "react"
import './Header.scss'
import {Logo} from "loft-taxi-mui-theme"; 
import PropTypes from 'prop-types'
import {Button} from "@material-ui/core";
import {ContextLogin} from '../Context/Context'

  const Header = (props) => {

    Header.propTypes = {
      pages: PropTypes.array 
    }

    const {logout} = useContext(ContextLogin)  

    const handleNavLinkClick = (e) => {
      const buttonName = e.target.dataset.page;
      props.currentPage(buttonName)  
      if (buttonName === 'login'){
        logout()
      }    
  };


    const link = props.pages.map((page, index)=>{
      return(
        <li key={index}>
            <Button data-page={page.name}  color="primary" style={{marginRight: '5px'}}>
              <span data-page={page.name}>{page.text}</span> 
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

export default Header