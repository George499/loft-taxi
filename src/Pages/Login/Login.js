import React from 'react'
import Radium from 'radium'
import '../../Components/App.scss'

function Login(props) {

    const {currentPage} = props;

    const inputClass = ['input']

	return (
    <div >
    <form>
        <input 
        className={inputClass.join(' ')} />
        <input type='text' className={inputClass.join(' ')} />    
    </form>
    <button onClick={currentPage}>Click</button>
    </div>
    )
}
export default Radium(Login)