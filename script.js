// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
      let currentSlide = 0;
  
      function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }
  
      setInterval(showNextSlide, 5000);
    }
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length > 0) {
      navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
  
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  
    // Function to handle button clicks
    function handleButtonClick(event) {
      const plant = event.target.getAttribute('data-plant'); // Get plant name
      const type = event.target.getAttribute('data-type'); // Get content type (medical/household)
  
      console.log(`Button clicked for plant: ${plant}, type: ${type}`); // Debugging log
  
      // Hide all content for this plant
      const allContents = document.querySelectorAll(`#${plant}-medical, #${plant}-household`);
      allContents.forEach(content => content.style.display = 'none');
  
      // Show the selected content
      const selectedContent = document.getElementById(`${plant}-${type}`);
      if (selectedContent) {
        selectedContent.style.display = 'block';
      }
    }
  
    // Add event listeners to all buttons
    const buttons = document.querySelectorAll('.medical-btn, .household-btn');
    if (buttons.length > 0) {
      buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
      });
    }
  
    // Expand/Collapse Functionality
    const expandButtons = document.querySelectorAll('.expand-btn');
    if (expandButtons.length > 0) {
      expandButtons.forEach(button => {
        button.addEventListener('click', () => {
          const moreContent = button.nextElementSibling;
          moreContent.style.display = moreContent.style.display === 'block' ? 'none' : 'block';
          button.textContent = moreContent.style.display === 'block' ? 'Read Less' : 'Read More';
        });
      });
    }
  
    // Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove active class from all buttons
          document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
          // Add active class to the clicked button
          button.classList.add('active');
  
          const filter = button.getAttribute('data-filter');
          const tips = document.querySelectorAll('.tip-card');
  
          tips.forEach(tip => {
            if (filter === 'all' || tip.getAttribute('data-category') === filter) {
              tip.style.display = 'block';
            } else {
              tip.style.display = 'none';
            }
          });
        });
      });
    }
  
    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const tips = document.querySelectorAll('.tip-card');
  
        tips.forEach(tip => {
          const title = tip.querySelector('h2').textContent.toLowerCase();
          const description = tip.querySelector('p').textContent.toLowerCase();
          if (title.includes(searchTerm) || description.includes(searchTerm)) {
            tip.style.display = 'block';
          } else {
            tip.style.display = 'none';
          }
        });
      });
    }
  });
document.addEventListener('DOMContentLoaded', () => {
    // Community Forum Functionality
    document.getElementById('post-question').addEventListener('click', () => {
      const question = document.getElementById('forum-question').value;
      if (question.trim() !== '') {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = question;
        document.getElementById('forum-posts').appendChild(post);
        document.getElementById('forum-question').value = ''; // Clear the textarea
      }
    });

    // User Stories Functionality
    document.getElementById('post-story').addEventListener('click', () => {
      const storyText = document.getElementById('story-text').value;
      const storyImage = document.getElementById('story-image').files[0];

      if (storyText.trim() !== '') {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = storyText;

        if (storyImage) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            post.appendChild(img);
          };
          reader.readAsDataURL(storyImage);
        }

        document.getElementById('story-posts').appendChild(post);
        document.getElementById('story-text').value = ''; // Clear the textarea
        document.getElementById('story-image').value = ''; // Clear the file input
      }
    });

    // Events and Workshops Functionality
    document.querySelectorAll('.register-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const eventName = e.target.getAttribute('data-event');
        document.getElementById('registration-message').textContent = `You have registered for the ${eventName} event!`;
      });
    });

    // Gardening Challenges Functionality
    document.getElementById('join-challenge').addEventListener('click', () => {
      const challenge = document.getElementById('challenge-select').value;
      document.getElementById('challenge-message').textContent = `You have joined the ${challenge} challenge!`;
    });

});
