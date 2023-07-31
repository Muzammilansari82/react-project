import React, { useState } from "react";
import FirstTask from "./Task";

const Project = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: "First Project", content: "Project content for First Project" },
      ]);
      const [newTask, setNewTask] = useState("")

      
      

      const [selectedProjectName, setSelectedProjectName] = useState("First Project");
      const [selectedProjectContent, setSelectedProjectContent] = useState(
        "Project content for First Project"
      );
    
      const addNewProject = () => {
        const newProjectName = prompt("Enter the name of the new project");
        const newProjectContent = ("content");
      
        // Check if the user provided a name for the new project
        if (newProjectName && newProjectName.trim() !== "") {
          const newProject = {
            id: projects.length + 1, // Assign a unique ID to the new project
            name: newProjectName,
            content: newProjectContent,
          };
      
          setProjects((prevProjects) => [...prevProjects, newProject]);
        } else {
          alert("Please provide a valid name for the new project.");
        }
      };
      
    
      const deleteProject = (projectId) => {
        setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
      };
      
    
      const handleProjectClick = (project) => {
        setSelectedProjectName(project.name);
        setSelectedProjectContent(project.content);
      };
  

  return (
    <div className="flex-main">
      <div className="part1">
        <div className="flex">
          <i className="fa-solid fa-magnifying-glass"></i>
          <p className="p">Search</p>
        </div>
        <div className="flex">
          <i className="fa-regular fa-bell"></i>
          <p className="p">Inbox</p>
        </div>
        <hr />
        

        <p>Projects</p>
        {projects.map((project) => (
          <div className="flex" style={{cursor: "pointer"}} key={project.id}>
            <i className="fa-solid fa-clipboard"></i>
            <div className="p"onClick={() => handleProjectClick(project)}>
              {project.name}
              </div>
            {/* <hr/> */}
            <div className="hr">
        
          
            <i className="fa-solid fa-trash" onClick={() => deleteProject(project.id)}></i>
          </div></div>
        ))}
        <button onClick={addNewProject} className="button1">+ Project</button>
      </div>
      <div className="part2">
       <h2>{selectedProjectName}</h2>
        
        <hr />
         < div className="a1">
        
        <FirstTask/>
        

</div>

  
 
      
    
        {/* <p>{selectedProjectContent}</p> 
          <button>Name<Name /></button> */}

    </div>
  
    </div>
  );
      };

export default Project;