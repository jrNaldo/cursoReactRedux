import React from "react";
import './Menu.css'
import  {Link}from 'react-router-dom'
const Menu = props => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to='/usestate'>UseState( )</Link>
                    </li>
                    <li>
                        <Link to='/useeffect'>UseEffect( )</Link>
                    </li>
                    <li>
                        <Link to='/useref'>UseRef( )</Link>
                    </li>
                    <li>
                        <Link to='/usememo'>UseMemo( )</Link>
                    </li>
                    <li>
                        <Link to='usecallback'>UseCallback( )</Link> 
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu