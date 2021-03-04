export const checkBar = () => {
    const $ = document.querySelector.bind(document);
    var widthScreen = window.innerWidth
    const bar = $(".bar")
    const nav = $("nav")
    if (bar && nav) {
        if (widthScreen <= 800) {
            nav.classList.add("menu--hident")
            bar.style.display = "flex";
        } else {
            nav.classList.remove("menu--hident")
            bar.style.display = "none";
        }
    }
}