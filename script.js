function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function playVideo(String) {
    const video = String;
    window.open(video, '_blank');
    
}

document.getElementById('showAllBtn').addEventListener('click', function() {
    const hiddenProjects = document.querySelector('.hidden-projects');
    const contactSection = document.getElementById('contact');
    if (hiddenProjects.style.display === 'none'){
        hiddenProjects.style.display = 'flex'
        this.textContent = 'Show Less'
        contactSection.style.marginTop = '35rem';

    }
    else{
        hiddenProjects.style.display = 'none'
        this.textContent = 'Show All'
        contactSection.style.marginTop = '0rem';
    }

  });