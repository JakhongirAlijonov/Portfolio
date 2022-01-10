const toggle = document.getElementById("toggle");
const projectList = document.querySelector(".project-list");
const brackdrop = document.querySelector(".brackdrop");
toggle.addEventListener("click", function () {
  projectList.classList.toggle("active");
  toggle.classList.toggle("active");
});
document.addEventListener("click", function (e) {
  if (e.target.id !== "project-list" && e.target.id !== "toggle") {
    projectList.classList.remove("active");
    toggle.classList.remove("active");
  }
});

document.addEventListener("scroll", function (e) {
    if (e.target.id !== "project-list" && e.target.id !== "toggle") {
      projectList.classList.remove("active");
      toggle.classList.remove("active");
    }
  });
