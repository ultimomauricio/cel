const links = document.querySelectorAll("nav a");


links.forEach(link => {
link.addEventListener("click", event => {
event.preventDefault();
const section = document.querySelector(link.getAttribute("href"));


window.scrollTo({
top: section.offsetTop - 80,
behavior: "smooth"
});
});
});