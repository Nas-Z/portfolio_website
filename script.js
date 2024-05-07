function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function playVideo() {
    const video = "./assets/JAWLAH.mp4";
    window.open(video, '_blank');
    
}