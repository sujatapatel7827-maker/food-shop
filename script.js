function toggleMenu(){
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle i");

  menu.classList.toggle("active");

  if(menu.classList.contains("active")){
    toggle.classList.remove("fa-bars");
    toggle.classList.add("fa-xmark");
  } else {
    toggle.classList.remove("fa-xmark");
    toggle.classList.add("fa-bars");
  }
}