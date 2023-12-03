export default function renderProjects(projects) {
  const projectList = document.querySelector('.projects');
  projects.forEach((project) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerText = project.name;
    projectList.appendChild(projectDiv);
  });
}
