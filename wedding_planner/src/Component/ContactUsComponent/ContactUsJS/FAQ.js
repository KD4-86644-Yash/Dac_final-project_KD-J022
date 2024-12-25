document.querySelectorAll('.faq-header').forEach((header) => {
    header.addEventListener('click', () => {
      const answer = header.nextElementSibling; // Select the answer div
      const toggleButton = header.querySelector('.faq-toggle'); // Select the toggle button
  
      // Toggle the display of the answer
      if (answer.style.display === 'block') {
        answer.style.display = 'none'; // Hide the answer
        toggleButton.classList.remove('open'); // Remove the 'open' class from the button
      } else {
        answer.style.display = 'block'; // Show the answer
        toggleButton.classList.add('open'); // Add the 'open' class to the button
      }
    });
  });
  