import React from 'react'
import Radium from 'radium'
import '../../Components/App.scss'

function Signup(props) {

    const {onAuthorize} = props;

    const inputClass = ['input']

	return (
    <div >
        <h1>Регистрация</h1>
    <form>
        <input 
        className={inputClass.join(' ')} />
        <input type='text' className={inputClass.join(' ')} />    
    </form>
    <button onClick={onAuthorize}>Click</button>
    </div>
    )
}
export default Radium(Signup)
