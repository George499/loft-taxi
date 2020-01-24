import React from 'react'

export default function Login(props) {
    const {className, onAuthorize} = props;

	return (
    <div className={className}>
    <button 
    className={'page-login__authorize-button' }
    onClick={onAuthorize}
    >Click</button>
    </div>
    )
}