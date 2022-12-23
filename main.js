// Light and dark mode toggle
let checkbox = document.querySelector('.light-dark-mode');
let githubText = document.querySelector("#githubText");
let githubLogo = document.querySelector("#githubLogo");
let html = document.querySelector('html');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    html.setAttribute('data-theme', 'light');
    githubLogo.setAttribute('src','assets/images/github-mark.png');
    githubText.setAttribute('src','assets/images/GitHub_Logo.png');
  } else {
    html.setAttribute('data-theme', 'dark');
    githubLogo.setAttribute('src','assets/images/github-mark-white.png');
    githubText.setAttribute('src','assets/images/GitHub_Logo_White.png');
  }
});

// Hamburger menu
let hamburger = document.querySelector('#hamburgerclick');
let table = document.querySelector('#table');
hamburger.addEventListener('click', () => {
  if (hamburger.checked){
    table.classList.remove("hidden");
  } else {
  table.classList.add("hidden");
  }
  

});

// Scroll to top button
let topButton = document.querySelector("#scrollUpButton");
  // When the user scrolls down 200px from the top of the document, show the button
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      topButton.classList.remove("hidden");
    } else {
      topButton.classList.add("hidden");
    }
  }

topButton.addEventListener('click', scrollUp);
// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

