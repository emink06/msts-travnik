const bgblur = document.querySelector(".bgblur")

document.body.addEventListener("scroll", () => {
    if (document.body.scrollTop < window.innerHeight && document.body.scrollTop > 100) {
        bgblur.style.backdropFilter = "blur(" + document.body.scrollTop / 100 + "px)";
    }
});
