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
const homeclass = document.getElementsByClassName("homeclass");
const aboutmeclass = document.getElementsByClassName("aboutmeclass");
const skillsclass = document.getElementsByClassName("skillsclass");
const projectsclass = document.getElementsByClassName("projectsclass");
const home = document.getElementById("home");
const aboutme = document.getElementById("aboutme");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
Array.from(homeclass).forEach(link => {
  link.addEventListener('click', function(event) {
    home.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  });
});
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


let aboutmebtn = document.getElementById("AboutmeButton");
// About Me Button
aboutmebtn.addEventListener('click', function(event) {
  aboutme.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


// Nav bar shrinks when scrolling down
window.addEventListener('scroll', function(){
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 50);
})


// Highligth nav bar items when scrolling down to each section
const sections = document.getElementsByClassName("section");


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

  





