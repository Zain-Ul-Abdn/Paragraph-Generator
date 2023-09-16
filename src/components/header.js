import React from 'react'
import './header.css'

export default function header(props) {
    return (
        <div>
            <header className='p-3 bg-primary'>
                <nav className='d-flex'>
                    <h2 className="nav-title ">{props.title}</h2>
                    <ul className="nav-item d-none d-sm-block">
                        <li className='mx-2 d-inline'>Home</li>
                        <li className='mx-2 d-inline'>About</li>
                        <li className='mx-2 d-inline'>Services</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
