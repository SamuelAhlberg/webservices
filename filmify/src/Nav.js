import React, {useState, useEffect}from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
    
        return () => {
            window.addEventListener("scroll", () => {
                if(window.scrollY > 100){
                    handleShow(true);

                }else handleShow(false);
            });
            return () => {
                window.removeEventListener("scroll");
            }
        }
    }, []);
    return (
        <div className = {`nav${show && "nav_black"}`}>
            <img className="nav_logo" 
            src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png" 
            alt="Search Logo"/>
        </div>
    )
}

export default Nav;
