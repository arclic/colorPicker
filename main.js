function onlineOffline(){

    const onlineLink = document.querySelector("#online-link");
    const offlineLink = document.querySelector("#offline-link");

    const onlineBox = document.querySelector("#online");
    const offlineBox = document.querySelector("#offline");

    onlineLink.addEventListener("click",function(event){
        onlineBox.classList.add('activeFlex');
        offlineBox.classList.remove('activeFlex');
    });

    offlineLink.addEventListener("click",function(event){
        offlineBox.classList.add('activeFlex');
        onlineBox.classList.remove('activeFlex');
    });
}

function toggleNavbar(){
    const toggleIcon = document.querySelector("#js-toggle-navbar");

    toggleIcon.addEventListener("click", function(event){
        const navlinks = document.querySelector(".nav-link");

        navlinks.classList.toggle("active");
    });
}

function init(){
    toggleNavbar();
    onlineOffline();
}

init();