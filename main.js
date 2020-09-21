


function toggleNavbar(){
    const toggleIcon = document.querySelector("#js-toggle-navbar");

    toggleIcon.addEventListener("click", function(event){
        const navlinks = document.querySelector(".nav-link");

        navlinks.classList.toggle("active");
    });
}

function init(){
    toggleNavbar();
}

init();