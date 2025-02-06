// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Find the target section
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    });
  });

  fetch('https://api.github.com/users/abosfu/repos')
  .then(response => response.json())
  .then(data => {
    const projectsList = document.getElementById('projects-list');
    data.forEach(repo => {
      const project = document.createElement('div');
      project.className = 'project';
      project.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description available.'}</p>
        <a href="${repo.html_url}" target="_blank" class="btn">View on GitHub</a>
      `;
      projectsList.appendChild(project);
    });
  });