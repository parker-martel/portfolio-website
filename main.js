// Light and dark mode toggle
let checkbox = document.querySelector('.light-dark-mode');
let githubText = document.querySelector("#githubText");
let githubLogo = document.querySelector("#githubLogo");
let linkedin = document.querySelector("#linkedin");
let html = document.querySelector('html');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    html.setAttribute('data-theme', 'light');
    githubLogo.setAttribute('src','assets/images/github-mark.png');
    githubText.setAttribute('src','assets/images/GitHub_Logo.png');
    linkedin.classList.add("colored")
  } else {
    html.setAttribute('data-theme', 'dark');
    githubLogo.setAttribute('src','assets/images/github-mark-white.png');
    githubText.setAttribute('src','assets/images/GitHub_Logo_White.png');
    linkedin.classList.remove("colored")
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

// Nav bar links that scroll down page when clicked
const aboutmeclass = document.getElementsByClassName("aboutmeclass");
const skillsclass = document.getElementsByClassName("skillsclass");
const projectsclass = document.getElementsByClassName("projectsclass");
const aboutme = document.getElementById("aboutme");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
Array.from(aboutmeclass).forEach(link => {
    link.addEventListener('click', function(event) {
      aboutme.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
});
Array.from(skillsclass).forEach(link => {
  link.addEventListener('click', function(event) {
    skills.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  });
});
Array.from(projectsclass).forEach(link => {
  link.addEventListener('click', function(event) {
    projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  });
});


// Nav bar shrinks when scrolling down
window.addEventListener('scroll', function(){
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
})


// Highligth nav bar items when scrolling down to each section
const navitems = document.getElementsByClassName("navitems");
const sections = document.getElementsByClassName("section");

// Hamburger menu items
function activeMenu(){
  let length = sections.length;
  while (--length && window.scrollY + 200 < sections[length].offsetTop){}
    Array.from(navitems).forEach(element => { 
      element.classList.remove("active")
    });
    navitems[length].classList.add("active");
  }
  activeMenu();
  window.addEventListener("scroll", activeMenu);


const navitems2 = document.getElementsByClassName("navitems2");
const spanitems = document.getElementsByClassName("spanitems");


 // Large menu items
function activeMenu2(){
  let length = sections.length;
  while (--length && window.scrollY + 200 < sections[length].offsetTop){}
    Array.from(navitems2).forEach(element => { 
      element.classList.remove("active2")
    });
    navitems2[length].classList.add("active2");
    Array.from(spanitems).forEach(element => { 
      element.classList.remove("activespan")
    });
    spanitems[length].classList.add("activespan");
  }
  activeMenu2();
  window.addEventListener("scroll", activeMenu2);

  





