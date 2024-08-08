let span = document.querySelector(".up");
window.onscroll = function () {
    if (this.scrolly >= 20) {
        span.classList.add(".up")
    }
    else {
        span.classList.remove(".up")
    }
};


span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};