import React from "react";
import "./style.css";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/">Aisthorpe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="resume/Aisthorpe, Nicholas - Resume 2021.pdf" download>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

        // <div>
        //     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        //         <div className="navbar-collapse collapse justify-content-around" id="navbarNavAltMarkup">
        //             <div className="navbar-nav justify-content-around">
        //                 <a className="nav-link text-light fw-bold" href="/">Home</a>
        //                 <a className="nav-link text-light fw-bold" href="/projects">Projects</a>
        //                 <a className="nav-link text-light fw-bold" href="/contact">Contact</a>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    );
}

export default Header;