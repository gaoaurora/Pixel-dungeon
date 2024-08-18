function difficult(diff,obj){
    switch(diff){
        case 1:
            switch (obj){
                case 1:
                    return 7 //ez mau quai 1~7
                case 2:
                    return 5 //binh mau 1~5
                case 3:
                    return 4 //kiem 1~7
            }
            break;
        case 2:
            switch (obj){
                case 1:
                    return 9 //ez mau quai 1~7
                case 2:
                    return 6 //binh mau 1~5
                case 3:
                    return 5 //kiem 1~7
            }
            break;
        case 3:
            switch (obj){
                case 1:
                    return 12 //ez mau quai 1~7
                case 2:
                    return 7 //binh mau 1~5
                case 3:
                    return 6 //kiem 1~7
            }
            break;
}
}
function randomObjWithIndex(x,y){
    let ranNumObj=Math.round(Math.random()*1000)
    if (ranNumObj<=400) {objInBlock[x][y]=1;}
    else if(ranNumObj>400&&ranNumObj<=700) {objInBlock[x][y]=2;} //hp
    else {objInBlock[x][y]=3;}
    switch (objInBlock[x][y]){
        case 1:
            indexInBlock[x][y]=Math.ceil(Math.random()*difficult(diffCheck,objInBlock[x][y]))
            break;
        case 2:
            indexInBlock[x][y]=Math.ceil(Math.random()*difficult(diffCheck,objInBlock[x][y]))
            break;
        case 3:
            indexInBlock[x][y]=Math.ceil(Math.random()*difficult(diffCheck,objInBlock[x][y]))
            break;
    }
}
function updateDataGameWhenPlayerMove(x,y){//di chuyển data khi player di chuyển đến ô [x][y]
    moveTimes++
    objInBlock[x][y]=4
    indexInBlock[x][y]=indexInBlock[coordinatesXPlayer][coordinatesYPlayer]
    if(coordinatesYPlayer==y){ //nice switch case // very noice
            switch(coordinatesXPlayer){
                case (x-1):
                    switch (x){
                        case 2:
                            indexInBlock[x-1][y]=indexInBlock[x-2][y]
                            objInBlock[x-1][y]=objInBlock[x-2][y]
                            randomObjWithIndex(0,y);
                        break;
                        case 1:
                            randomObjWithIndex(0,y);
                        break;//di quet nha
                    }
                break;
                case (x+1):
                    switch (x){
                        case 0:
                            indexInBlock[x+1][y]=indexInBlock[x+2][y]
                            objInBlock[x+1][y]=objInBlock[x+2][y]
                            randomObjWithIndex(2,y);
                        break;
                        case 1:
                            randomObjWithIndex(2,y);
                        break;
                    }
                break;
                }
            flipCardHorizontal(y)
    }
    else {
        switch(coordinatesYPlayer){
            case (y-1):
                switch (y){
                    case 2:
                        indexInBlock[x][y-1]=indexInBlock[x][y-2]
                        objInBlock[x][y-1]=objInBlock[x][y-2]
                        randomObjWithIndex(x,0);
                    break;
                    case 1:
                        randomObjWithIndex(x,0);
                    break;
                }
                break;
            case (y+1):
                switch (y){
                    case 0:
                        indexInBlock[x][y+1]=indexInBlock[x][y+2]
                        objInBlock[x][y+1]=objInBlock[x][y+2]
                        randomObjWithIndex(x,2);
                    break;
                    case 1:
                        randomObjWithIndex(x,2);
                    break;
                }
                break;
            }
            flipCardVertical(x)
        }
        coordinatesXPlayer=x
        coordinatesYPlayer=y  
}
function progressingPlayermoved(x,y){
    
        if(objInBlock[x][y]==1){
            if(indexInBlock[coordinatesXPlayer][coordinatesYPlayer]==0){
                playerHealth-=indexInBlock[x][y];
                indexInBlock[x][y]=0
                startSFX('noslashkill.mp3')
                updateDataGameWhenPlayerMove(x,y)
                if(playerHealth<=0){ 
                    playerHealth=0
                    playerDeathTimes++
                }}
            else{ //chem quai chet
                if(indexInBlock[coordinatesXPlayer][coordinatesYPlayer] >= indexInBlock[x][y]){
                        indexInBlock[coordinatesXPlayer][coordinatesYPlayer]-=indexInBlock[x][y]
                        damageDeal+=indexInBlock[x][y]
                        indexInBlock[x][y]=0
                        killMobWithSwordTimes++
                        startSFX('slash.mp3')
                        updateDataGameWhenPlayerMove(x,y)
                    }
                else{ //chem quai ko chet        
                        startSFX('slashnokill.mp3')
                        indexInBlock[x][y]-=indexInBlock[coordinatesXPlayer][coordinatesYPlayer]
                        damageDeal+=indexInBlock[coordinatesXPlayer][coordinatesYPlayer]
                        indexInBlock[coordinatesXPlayer][coordinatesYPlayer]=0
                            if(coordinatesYPlayer==y) flipCardHorizontal(y); 
                                else flipCardVertical(x)
                    }
                }
            }
                else if(objInBlock[x][y]==2){
                    drinkHpPotionTimes++
                    if(playerHealth > hpBarMax) playerMaxHealth=playerHealth
                    startSFX('heal.mp3')
                    playerHealth+=indexInBlock[x][y];
                    healHp+=indexInBlock[x][y]
                    indexInBlock[x][y]= indexInBlock[coordinatesXPlayer][coordinatesYPlayer]
                    updateDataGameWhenPlayerMove(x,y)
                }
                else{ //nhat kiem
                    startSFX('pickUp.mp3')
                    pickupTimes++;
                    indexInBlock[coordinatesXPlayer][coordinatesYPlayer]=indexInBlock[x][y]
                    updateDataGameWhenPlayerMove(x,y);
                }
                if(playerHealth<=0) alert("You lose, reset to coutinue!")
}
