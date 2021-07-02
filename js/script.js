const text = "Did you like this? if so please follow me. <br> @ibn_yahyah.";
const main = document.querySelector("main");
let index = 0;

function writeText(){

    main.innerHTML = text.slice(0, index);

    index++;

    if (index > text.length -1){
        index = 0;
    }
}

setInterval(writeText, 100);