function toggleMenu(){
  const menu = document.getElementById("menu");
  const icon = document.querySelector(".menu-toggle i");

  menu.classList.toggle("active");

  if(menu.classList.contains("active")){
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}