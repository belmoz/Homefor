import "./import/modules";

let icon_menu = document.querySelector('.icon-menu');
icon_menu.addEventListener("click", function (e) {
    this.classList.toggle('icon-menu_active');
    let menu_body = document.querySelector('.menu__body');
    menu_body.classList.toggle('menu__body_active')
});