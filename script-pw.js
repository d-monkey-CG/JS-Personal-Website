//Name: Joanna Sanchez
//Function to display content of book commentary/analysis

function toggleDetails(button) {
      const paragraph = button.nextElementSibling;
      const isVisible = paragraph.style.display === "block";

      paragraph.style.display = isVisible ? "none" : "block";
      button.textContent = isVisible ? "▶" : "▼";
    }

// Get modal elements
var modal = document.getElementById("videoModal");
var btn = document.getElementById("openVideo");
var span = document.getElementsByClassName("close")[0];
var video = modal.querySelector("video");

// Open modal
btn.onclick = function() {
  modal.style.display = "block";
  video.play();
}

// Close modal
span.onclick = function() {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

// Close if user clicks outside video
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
}
