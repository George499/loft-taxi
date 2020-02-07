import React  from "react"
import { useContextLogin } from '../Context/Context'
import './Header.scss'
import {Logo} from "loft-taxi-mui-theme"; 
import PropTypes from 'prop-types'
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom'

  const Header = (props) => {

    Header.propTypes = {
      pages: PropTypes.array 
    }

    const {logout} = useContextLogin()  
    
    const link = Array.isArray(props.pages) && props.pages.map((page, index)=>{
      return(
        <Link to={page.name} className='nav'>
        <li key={index}>
            <Button data-page={page.name}  color="primary" style={{marginRight: '5px'}}>
              <span data-page={page.name}>{page.text}</span> 
            </Button> 
        </li>          
        </Link>
      )
  })

    return (
      <>
        <div className="header">
        <Logo/>
          <ul className='navList'>{link}</ul>          
        </div>
      </>
    )
    
  }

export default Header