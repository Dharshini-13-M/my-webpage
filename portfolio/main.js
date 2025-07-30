var typed = new Typed(".text", {
    strings:["Frontend Developer","Web Designer", "Creative Coder"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height){
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector("nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};
