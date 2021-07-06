import React from "react";
import "./style.css";

function Footer() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-dark justify-content-center fixed-bottom">
                <div id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link text-light" href="mailto:aisthorpe@gmail.com"><img className="logo" src="../../assets/images/email.png" alt="Email Logo"></img></a>
                        <a className="nav-link text-light" href="https://github.com/naisthorpe"><img className="logo" src="../../assets/images/github.png" alt="Github Logo"></img></a>
                        <a className="nav-link text-light" href="https://www.linkedin.com/in/nick-aisthorpe/"><img className="logo" src="../../assets/images/linkedin.png" alt="LinkedIn Logo"></img></a>
                        <a className="nav-link text-light" href="https://open.spotify.com/user/nickais?si=3IA86MWLSj-BGmHZkMz5Lw"><img className="logo" src="../../assets/images/spotify.png" alt="Spotify Logo"></img></a>
                    </div>
                </div>
            </nav>
        </>
        
    );
}

export default Footer;