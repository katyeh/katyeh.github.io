const list = document.querySelectorAll(".menu-link");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    const menuBtn = document.getElementById("menu-btn");
    menuBtn.checked = false;
  });
}
