window.onload = footer();
function footer() {
  let divFooter = document.getElementById("footer");
  let htmlFooter = `<div class="items">
        <a class="item instagram" href="https://www.youtube.com/watch?v=aS6c1HED0Aw&ab_channel=ProgramandoSolu%C3%A7%C3%B5es" target="_blank">
            <img class="image" src="footerimages/youtube.png" />
        </a>
        <a class="item instagram" href="https://www.instagram.com/gabrielmartins_91/" target="_blank">
            <img class="image" src="footerimages/instagram.png" />
        </a>
    </div>`;
  divFooter.innerHTML = htmlFooter;
}
