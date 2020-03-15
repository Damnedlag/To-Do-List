import {Projects, Project} from './applicationLogic.js'

console.table(Projects);

//toggle addproject visibility
const addProjectVisibility = document.getElementById('showAddProject')
const addNewProject = document.getElementById('addNewProject')
addNewProject.classList = 'invisibility'
addProjectVisibility.addEventListener('click', function e() {
    addNewProject.classList != "invisibility" ? addNewProject.classList = 'invisibility' : addNewProject.classList.remove('invisibility')
})

//function to add new project
const addProject = document.getElementById('addProject');
addProject.addEventListener('click', function e() {
    let projectTitle = document.getElementById('projectTitle').value;
    let projectDescription = document.getElementById('projectDescription').value;
    let id = Projects.length +1;
    addNewProject.classList = 'invisibility'
    let newProject = new Project(projectTitle, projectDescription, id);
    newProject.projectListupdate();
    Projects.push(newProject);
    console.table(Projects);
})

export {addProject, addProjectVisibility}