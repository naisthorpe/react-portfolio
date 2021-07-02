import React from "react";
import "./style.css";

function Footer() {
    return (
        <div className="fixed-bottom">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                    <div className="navbar-nav justify-content-around">
                        <a className="nav-link text-light fw-bold" href="mailto:aisthorpe@gmail.com">aisthorpe@gmail.com</a>
                        <a className="nav-link text-light fw-bold" href="https://github.com/naisthorpe">GitHub</a>
                        <a className="nav-link text-light fw-bold" href="https://www.linkedin.com/in/nick-aisthorpe/">LinkedIn</a>
                        <a className="nav-link text-light fw-bold" href="https://open.spotify.com/user/nickais?si=3IA86MWLSj-BGmHZkMz5Lw">Spotify</a>
                    </div>
                </div>
            </nav>
        </div>
        
    );
}

export default Footer;