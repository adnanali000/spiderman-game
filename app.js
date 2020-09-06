//detect keyboard keys]
/*
window.onkeypress = function(e){
    // console.log('hello world',e.keyCode)
    if(e.keyCode == 32){
        console.log('space')
    }
}
*/

let image = document.getElementById('image');
let count = 0;
window.onkeypress = function(e){
    if(e.keyCode == 68){
        count = count + 10;
        image.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif"
        image.style.marginLeft = count + "px";
    }
    if(e.keyCode == 65){
        count = count - 10;
        image.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif"
        image.style.marginLeft = count + "px";
    }
    if(e.keyCode == 83){
        image.src = "https://www.fightersgeneration.com/characters3/spidey-crouch.gif";
    }
    if(e.keyCode == 13){
        image.src = "https://www.fightersgeneration.com/characters3/spidet-webball.gif";
        setTimeout(() => {
            image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"
        }, 1000);
    }
    if(e.keyCode == 87){
        image.src = "https://www.fightersgeneration.com/characters3/spidey-block.gif";
        setTimeout(() => {
            image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"
        }, 1000);
    }
    if(e.keyCode == 32){
        image.src = "https://www.fightersgeneration.com/characters3/spider-sting.gif"
        setTimeout(() => {
            image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"
        }, 2500);

    }
    if(e.keyCode == 87 && e.keyCode == 65){
        image.src = "https://www.fightersgeneration.com/characters3/spidey-crouchingattacks.gif";
        setTimeout(() => {
            image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"
        }, 3000);
    }
}