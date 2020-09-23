

function getElementPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function imageLoader(){
    const reader = new FileReader();
    const canvas = document.querySelector("#offline-canvas");
    const canvasContext = canvas.getContext('2d');

    reader.onload = function(event){
        const img = new Image();
        img.onload = function(){
            canvasContext.drawImage(img, 0, 0, 300, 300);
        }
        img.src = reader.result;

        canvas.onmousemove = function(event){
            const canvasPos = getElementPosition(canvas);
            const posX = event.x - canvasPos.x;
            const posY = event.y - canvasPos.y;

            const imageData = canvasContext.getImageData(posX, posY, 1, 1).data;
            const rgbValue = document.querySelector("#offline-rgb");

            rgbValue.innerText = `(R, G, B) = (${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
        }
    }

    reader.readAsDataURL(this.files[0]);
}

function onlineImageLoader(){
    const canvas = document.querySelector("#online-canvas");
    const canvasContext = canvas.getContext('2d');
    const imgUrl = this.value;
    const img = new Image();

    img.onload = function(){
        canvasContext.drawImage(img, 0, 0, 300, 300);
    }
    img.src = imgUrl;
    img.crossOrigin = "Anonymous";

    canvas.onmousemove = function(event){
        const canvasPos = getElementPosition(canvas);
        const posX = event.x - canvasPos.x;
        const posY = event.y - canvasPos.y;

        const imageData = canvasContext.getImageData(posX, posY, 1, 1).data;
        const rgbValue = document.querySelector("#online-rgb");

        rgbValue.innerText = `(R, G, B) = (${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
    }
}


function readFile(){
    document.querySelector("#fileInput").addEventListener('change', imageLoader, false);
}

function readUrl(){
    document.querySelector("#urlInput").addEventListener('change', onlineImageLoader, false);
}


function init(){
    readFile();
    readUrl();
}

init();