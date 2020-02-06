import React  from "react"
import { useContextLogin } from '../Context/Context'
import './Header.scss'
import {Logo} from "loft-taxi-mui-theme"; 
import PropTypes from 'prop-types'
import {Button} from "@material-ui/core";

  const Header = (props) => {

    Header.propTypes = {
      pages: PropTypes.array 
    }

    const {logout} = useContextLogin()  

    const handleNavLinkClick = (e) => {
      const buttonName = e.target.dataset.page;
      props.currentPage(buttonName)  
      if (buttonName === 'login'){
        logout()
      }    
  };
    
    const link = Array.isArray(props.pages) && props.pages.map((page, index)=>{
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