//Name: Joanna Sanchez
//Function to display content of book commentary/analysis

function toggleDetails(button) {
      const paragraph = button.nextElementSibling;
      const isVisible = paragraph.style.display === "block";

      paragraph.style.display = isVisible ? "none" : "block";
      button.textContent = isVisible ? "▶" : "▼";
    }