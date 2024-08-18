function flipCard(target, image) {
    document.getElementById(target).style.animation = "flip 0.75s";
    setTimeout(function(){
        document.getElementById(target).style.animation = "";
    },751) // to prevent animation fuck up

    setTimeout(function() {
        document.getElementById(target).src='assets/pixel'+ image +'.png';
    }, 375);
}
function flipCardVertical(x){//doc 
    for(let y=0;y<3;y++){ 
        switch (objInBlock[x][y]){
            case 1:
                    flipCard('card'+x+y,'Enemy')
                    document.getElementById("index"+x+y).innerHTML="HP:"+indexInBlock[x][y]
                    break;
                case 2:
                    flipCard('card'+x+y,'Potion')
                    document.getElementById("index"+x+y).innerHTML="Reco:"+indexInBlock[x][y]
                    break;
                case 3:
                    flipCard('card'+x+y,'Sword')
                    document.getElementById("index"+x+y).innerHTML="Dura:"+indexInBlock[x][y]
                    break;
                case 4:
                    flipCard('card'+x+y,'Player')
                    document.getElementById("index"+x+y).innerHTML="Dura:"+indexInBlock[x][y]
                    break;
        }
    }
    updateHPBar()
}
function flipCardHorizontal(y){//ngang
    for(let x=0;x<3;x++){ 
        switch (objInBlock[x][y]){
            case 1:
                    flipCard('card'+x+y,'Enemy')
                    document.getElementById("index"+x+y).innerHTML="HP:"+indexInBlock[x][y]
                    break;
                case 2:
                    flipCard('card'+x+y,'Potion')
                    document.getElementById("index"+x+y).innerHTML="Reco:"+indexInBlock[x][y]
                    break;
                case 3:
                    flipCard('card'+x+y,'Sword')
                    document.getElementById("index"+x+y).innerHTML="Dura:"+indexInBlock[x][y]
                    break;
                case 4:
                    flipCard('card'+x+y,'Player')
                    document.getElementById("index"+x+y).innerHTML="Dura:"+indexInBlock[x][y]
                    break;
        }
    }
    updateHPBar()
}