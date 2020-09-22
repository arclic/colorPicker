

function getRGB(){
    let canvas = document.querySelector("#canvas_picker").getContext('2d');

    let img = new Image();
    img.src = "https://images.unsplash.com/photo-1548115184-bc6544d06a58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
    
    img.onload = function(){
        canvas.drawImage(img, 0, 0);
    };
}


function init(){
    getRGB();
}

init();