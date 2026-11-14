document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const searchInput = document.getElementById("projectSearch");
  const projectsGrid = document.getElementById("csProjectsGrid");

  if (searchInput && projectsGrid) {
    const cards = Array.from(projectsGrid.getElementsByClassName("item-card"));
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(term) ? "" : "none";
      });
    });
  }
});