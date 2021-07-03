import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron bg-green pb-2">
                <div className="container col mb-2">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-xs-12">
                            <img className="my-pic" src="/images/100-transparent.png" alt="Nick Aisthorpe"></img>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <h1 className="fw-bold display-1 text-center">Nick Aisthorpe</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;