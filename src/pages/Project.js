import React from 'react'
import projects from "./ProjectList";
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 19px;
  border-radius: 5px;
  margin: 10px 0px;
  box-shadow: 0px 2px 2px lightgray;
  cursor: pointer;
`;

const Project = (props) => {
    const name = props.match.params.name;
let repositoryLink, deployment, technologies, image, iname;
  for(let i=0;i<projects.length;i++){
    let temp="Name: "+projects[i].name;
    if (temp===name){
      repositoryLink=projects[i].repositoryLink;
      deployment=projects[i].deployment;
      technologies=projects[i].technologies;
      image=projects[i].image;
      iname=projects[i].name
    }
  }
      
    const loaded = () => {  
     return (
      <>
         <div>
            <h1>Project details</h1> 
            <h2>{name}</h2>
            <h3>Technologies: {technologies}</h3>
            <div id="project-detail-bttns" >
            <a
              href={repositoryLink}
              target='_blank'
              rel='noreferrer'
            >
              <Button>Github</Button>
            </a>
            <a
              href={deployment}
              target='_blank'
              rel='noreferrer'
            >
              <Button>Deployed Version</Button>
            </a>
            </div>
         </div>

         <div id="project-detail-img">
      <img src={image} alt={iname}/>
    </div>
         </>
     )
    }
      return loaded();
    };
    

export default Project