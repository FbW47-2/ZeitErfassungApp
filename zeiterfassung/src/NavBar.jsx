import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';



function NavBar() {
    return (
        <div>
            <ul>
               <Link to = '/' > <li>Logo</li> </Link>
                <Link to = '/showpersonal' > <li> Show Personal</li> </Link>
                <Link to = '/payment' > <li> Payment</li> </Link>
                <Link to = '/contact' > <li> Contact</li> </Link>

                
                </ul>
        </div>
    )
}

export default NavBar;
