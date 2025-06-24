// Image Gallery Modal
function openModal(img) {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

function closeModal() {
  document.getElementById("galleryModal").style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
  const modal = document.getElementById("galleryModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address!");
      return;
  }

  // Simulate form submission (replace with actual API call)
  alert(`Thank you, ${name}! Your message has been sent.`);
  this.reset();
});