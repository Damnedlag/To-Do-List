let Projects = [];
const tableOfProjects = document.getElementById('tableOfProjects')

class Project {
    constructor(title, description, id) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.toDos = [];
    }
    info() {return `${this.name} is ${this.priority}`}
    projectListupdate() {
        let row = tableOfProjects.insertRow(-1);
        row.id = this.id;

        //button to add task
        let addcell = row.insertCell(0);
        let addTask = document.createElement('button');
        addcell.appendChild(addTask);
        addTask.textContent = 'Add a task';
        let rmvTask = document.createElement('button');
        addcell.appendChild(rmvTask);
        rmvTask.textContent = 'Remove a task';

        //list of existing tasks
        let cell0 = row.insertCell(0);
        this.toDos.forEach(function e (item, index) {
            cell0.insertAdjacentHTML("beforeend", `${index + 1}. ${item} </br>`);
         });

        let cell1 = row.insertCell(0);
        cell1.innerHTML = this.description;
        let cell2 = row.insertCell(0);
        cell2.innerHTML = this.title;
    }
}


const example = new Project('example', 'stuff to do', 0)
example.toDos.push('this')
example.toDos.push('thas')
example.toDos.push('thes')
Projects.push(example)
example.projectListupdate()
export {Projects, Project}