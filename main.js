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

