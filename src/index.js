import Project from './modules/classProject';
import renderProjects from './modules/renderProjects';
import projectMaster from './modules/projectMaster';
import './style.css';

const projects = [];
projects.push(new Project('Inbox'));
renderProjects(projects);
projectMaster.setActiveProject('Inbox');

const btnAddproject = document.querySelector('.projectsHeaderAdd');
const projectDialog = document.getElementById('projectDialog');
const submitProject = document.getElementById('submitProject');
const projectTitle = document.getElementById('projectTitle');

btnAddproject.addEventListener('click', () => {
  projectDialog.showModal();
});

submitProject.addEventListener('click', () => {
  const project = new Project(projectTitle.value);
  projects.push(project);
  renderProjects(projects);
  //   renderTasks(project);
  projectTitle.value = '';
});
