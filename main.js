document.addEventListener("DOMContentLoaded", () => {
  // Select all <details> elements
  const detailsElements = document.querySelectorAll("details");

  detailsElements.forEach((details) => {
    const summary = details.querySelector("summary");

    // Create an arrow span inside summary if not present
    if (!summary.querySelector(".arrow")) {
      const arrow = document.createElement("span");
      arrow.classList.add("arrow");
      arrow.textContent = "▶"; // triangle arrow right
      arrow.style.display = "inline-block";
      arrow.style.marginRight = "6px";
      arrow.style.transition = "transform 0.3s ease";
      summary.prepend(arrow);
    }

    // Update arrow rotation on toggle
    details.addEventListener("toggle", () => {
      const arrow = summary.querySelector(".arrow");
      if (details.open) {
        arrow.style.transform = "rotate(90deg)";
      } else {
        arrow.style.transform = "rotate(0deg)";
      }
    });

    // Initialize arrow rotation based on default open state
    if (details.open) {
      summary.querySelector(".arrow").style.transform = "rotate(90deg)";
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');
  
  // Add click event to all carousel images
  document.querySelectorAll('.carousel img').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.classList.add('show');
    });
  });
  
  // Close modal on clicking the close button
  modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
  });
  
  // Close modal on clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});
