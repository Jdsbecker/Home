let x = 0

function menuOpen() {
    if (x == 0) {
        document.getElementById("nav_links_btn").setAttribute("style", "transform: rotate(-90deg); transition: all 2s;");
        document.getElementById("nav_links").setAttribute("style", "transition: opacity 1.5s; opacity: 1; top: 20vh; right: 0px;");
        x += 1;
    }else {
        document.getElementById("nav_links_btn").setAttribute("style", "transform: rotate(0deg); transition: all 2s;");
        document.getElementById("nav_links").setAttribute("style", "transition: opacity 1.5s; opacity: 0;");
        setTimeout(() => {document.getElementById("nav_links").setAttribute("style", "top: -9999px; left: -9999px;");}, 1500)
        x = 0;
    }
}