const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
function openModal(project) {
  // Open the modal
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  
  // Populate modal content based on project
  const title = document.getElementById("modal-title");
  const img = document.getElementById("modal-img");
  const description = document.getElementById("modal-description");

  if (project === 'project1') {
    title.textContent = "Project One GRB";
    img.src = "assets/project1.png";
    description.textContent = "As the face of GRB, I had the wonderful opportunity to bring warmth and elegance to their advertising campaign...";
  } else if (project === 'project2') {
    title.textContent = "Project Two AVR JWELERS";
    img.src = "assets/project2.png";
    description.textContent = "Being a part of the AVR Jewelers campaign was an incredible experience...";
  }
  // Add more projects as needed
}

function closeModal() {
  // Close the modal
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
