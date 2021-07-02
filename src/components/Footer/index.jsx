import React from "react";
import "./style.css";

function Footer() {
    return (
        <>
            <nav className="fixed-bottom navbar navbar-expand navbar-light bg-dark justify-content-center">
                <div id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link text-light fw-bold" href="mailto:aisthorpe@gmail.com"><img className="logo" src="images/email.png" alt="Email Logo"></img></a>
                        <a className="nav-link text-light fw-bold" href="https://github.com/naisthorpe"><img className="logo" src="images/github.png" alt="Github Logo"></img></a>
                        <a className="nav-link text-light fw-bold" href="https://www.linkedin.com/in/nick-aisthorpe/"><img className="logo" src="images/linkedin.png" alt="LinkedIn Logo"></img></a>
                        <a className="nav-link text-light fw-bold" href="https://open.spotify.com/user/nickais?si=3IA86MWLSj-BGmHZkMz5Lw"><img className="logo" src="images/spotify.png" alt="Spotify"></img></a>
                    </div>
                </div>
            </nav>
        </>
        
    );
}

export default Footer;