// Function to toggle the dark mode
function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  updateLocalStorage();
  updateButtonText(isDarkMode);
}

// Update local storage based on the current theme
function updateLocalStorage() {
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
}

// Update the button text based on the current theme
function updateButtonText(isDarkMode) {
  if (isDarkMode) {
    themeToggleButton.textContent = 'Switch to Light Mode'; // Change text for dark mode
  } else {
    themeToggleButton.textContent = 'Switch to Dark Mode'; // Change text for light mode
  }
}

// Get the button element
const themeToggleButton = document.getElementById('theme-toggle');

// Add event listener to the button
themeToggleButton.addEventListener('click', () => {
  const isDarkMode = document.body.classList.contains('dark-mode');
  toggleDarkMode();
  updateButtonText(!isDarkMode); // Update button text after toggling
});

// Check the saved theme preference when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
  updateButtonText(isDarkMode); // Update button text based on saved preference
});
