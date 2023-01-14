import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../css/projects.css"

const ShowPage = () =>{

    const [data, SetData] = useState([]);

    let k = 0;

    useEffect(() => {
        fetch("Projects.json")
            .then(res => res.json())
            .then(json => {
                SetData(json);
            });
    }, [])
    return(
    <div id="showcase-page">
        <table>
            <tbody>
                {
                    data.map(project => {
                        k++;
                        return(
                        <tr className="project-row" key={k}>
                            <td className="project-title">{project.Title}</td>
                            <td className="project-anchor"><a href={project.Link} target="_blank" rel="noopener noreferrer"> Click Here</a></td>
                            <td> 
                                {
                                    <a href={`Media/${project.Img}`}><img alt="" src={`Media/${project.Img}`} className="project-img"/></a>
                                }
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    )
}

export default ShowPage;