import React from 'react';

function NavBar(){
    return(
        <div className='d-flex justify-content-end'>
            
        <nav className='navbar navbar-expand-lg'>
            <div className = "collapse navbar-collapse d-flex me-3" id = "navbarNav">
                <ul className="navbar-nav">
                    <li className='nav-item'> 
                        <a className='nav-link'> Home </a>
                    </li>
                    <li className='nav-item'> 
                        <a className='nav-link'> About </a>
                    </li>
                    <li className='nav-item'> 
                        <a className='nav-link'> Education </a>
                    </li>
                    <li className='nav-item'> 
                        <a className='nav-link'> Skills </a>
                    </li>
                    <li className='nav-item'> 
                        <a className='nav-link'> Projects </a>
                    </li>
                    <li className='nav-item'> 
                        <a className='nav-link'> Contact </a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
    );
}

export default NavBar;