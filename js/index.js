function toggleActive(element) {
    element.classList.toggle('active');
}

function showNav(){
    const nav = document.getElementById("nav")
    toggleActive(nav);
}