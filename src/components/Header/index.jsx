import React from "react";
import "./style.css";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                    <div className="navbar-nav justify-content-around">
                        <a className="nav-link text-light fw-bold" href="/">Home</a>
                        <a className="nav-link text-light fw-bold" href="/projects">Projects</a>
                        <a className="nav-link text-light fw-bold" href="/contact">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;