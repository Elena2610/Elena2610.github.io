import React from 'react'
import {Link} from "react-router-dom"
import projects1 from "./ProjectList";

const Projects = (props) => {
    const projects = projects1

return (

     <div className="Projects">
         <h1>My projects</h1>
         {projects.map((projects) => {
             const {name, description} = projects;
             return (
               <>
             <Link to={`/Project/Name: ${name}`}key={name}>
                <h2>Project: {name} - {description}</h2>
            </Link>           
</> 
             )
         })}
     </div>

)

}

export default Projects