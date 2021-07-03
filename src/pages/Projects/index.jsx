import React from "react";
import "./style.css";

function Project() {

    const projects = [
        {
            id: 1,
            title: "Stock Research Application",
            githubUrl: "https://github.com/naisthorpe/crypto-stock-app",
            deployedUrl: "https://naisthorpe.github.io/crypto-stock-app/",
            picture: "images/stock-app-screenshot.png"
        },
        {
            id: 2,
            title: "Weather Dashboard",
            githubUrl: "https://github.com/naisthorpe/weather-dashboard",
            deployedUrl: "https://naisthorpe.github.io/weather-dashboard/",
            picture: "images/weather-app-screenshot.png"
        },
        {
            id: 3,
            title: "Javascript Coding Quiz",
            githubUrl: "https://github.com/naisthorpe/js-coding-quiz",
            deployedUrl: "https://naisthorpe.github.io/js-coding-quiz/",
            picture: "images/js-quiz-app-screenshot.png"
        },
        {
            id: 4,
            title: "GeoTreasure Adventures",
            githubUrl: "https://github.com/naisthorpe/gta",
            deployedUrl: "https://naisthorpe.github.io/js-coding-quiz/",
            picture: "images/gta-app-screenshot.png"
        }
    ]

    return (
        <section className="container col mt-3 mb-3">
            <h1 className="text-center fw-bold mb-4">Projects</h1>
            <div className="row justify-content-around">
                {projects.map(project =>
                    <div key={project.id} className="card bg-dark mb-3" style={{ width: "20rem" }}>
                        <h5 className="card-title text-center text-light fw-bold mt-2">{project.title}</h5>
                        <img className="card-img-top img-thumbnail" src={project.picture} alt={project.title}></img>
                        <div className="card-body">
                            <div className="row justify-content-around">
                                <a href={project.githubUrl} rel="noreferrer" target="_blank" className="btn github-purple col-5 text-light">GitHub</a>
                                <a href={project.deployedUrl} rel="noreferrer" target="_blank" className="btn deployed-orange col-5 text-light">Deployed</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Project;