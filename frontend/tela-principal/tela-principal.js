var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation-header');
var container = document.getElementById('container');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw'
        navigationHeader.style.animationName = 'showSidebar'
        container.style.filter = 'blur(5px)'
        
    }else{
        navigationHeader.style.marginLeft = '-100vw'
        navigationHeader.style.animationName = 'closeSidebar'
        container.style.filter = ''
    }
}

function closeSidebar() {
    if (showSidebar) {
       toggleSidebar(); 
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && showSidebar) {
        toggleSidebar();
    }
})