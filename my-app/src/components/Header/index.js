import React from "react";
import "./style.css";


function Header(props) {
    return (
    <header className="header-container">
        <h1>Welcome to Mandy's Portfolio</h1>
            <img src="https://wallpapers.com/images/hd/tree-lined-road-linkedin-cover-09zf7199vkzsbf90.jpg"/>
            {props.children}   
    </header>
    );
}

export default Header;