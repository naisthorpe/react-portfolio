import React from "react";
import "./style.css";

function About() {
    return (
        <div className="h-100">
            <div className="jumbotron jumbotron-fluid bg-info">
                <div className="container col mb-2">
                    <div className="row">
                        <img className="col-4" src="/images/100-transparent.png" alt="Nick Aisthorpe"></img>
                        <h1 className="col-6 align-self-center">Nick Aisthorpe</h1>
                    </div>

                    <div className="row flex-grow-1">
                        <p className="bg-warning text-center">I like cheese.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;