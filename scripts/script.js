//var zone
var playerHealth=15
var hpBarMax=15
var coordinatesXPlayer=1
var coordinatesYPlayer=1
var isGameStart=false
var objInBlock=[[0,0,0],
                [0,0,0],
                [0,0,0]
            ] //1==monster 2==hp 3==sword 4==player
var indexInBlock=[[0,0,0],
                  [0,0,0],
                  [0,0,0]
                ]
var logCheck=true //true = show
var sfxCheck=false
var bgmCheck=false // true = unmute? ok
var diffCheck = 1 // 1,2,3,4 = ez, nm, hd, hc
var mobileCheck=false
var sfx=null
var isPlaying=false
var bgm=null
var isBGMPlaying=false
var color=['#001580','#86460E','#B71C1C'] //[ez,nm,hd]
////////

//Let him cook
function updateGameScreen(){//flip all 9 card, useful for setup
    for(let x = 0; x < 3; x++){
        for(let y = 0; y < 3; y++){
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
    }
    updateHPBar()
    renderAchievementsTable()
}
function updateHPBar(){
    if(playerHealth<10) document.getElementById("cell").style.color="red"
    else if (playerHealth>=10&&playerHealth<30) document.getElementById("cell").style.color="white"
    else if (playerHealth>=30&&playerHealth<50) document.getElementById("cell").style.color="lime"
    else if (playerHealth>=50&&playerHealth<70) document.getElementById("cell").style.color="orange"
    else document.getElementById("cell").style.color="purple"
    document.getElementById("cell").innerHTML="HP:"+playerHealth 
    document.getElementById("hpBar").style.transform='scale(' + Math.max(0,Math.min(1, (playerHealth / 30))) + ',1)'    
}
function randomAtStart(){
    for (let x = 0; x < 3; x++) { 
        for(let y = 0; y < 3; y++){
            randomObjWithIndex(x,y);
        }
    }
    objInBlock[1][1]=4
    indexInBlock[1][1]=0
}

function controlGame(x,y){//x, y o player chon
    if(playerHealth>0){
        if((coordinatesXPlayer==(x-1)&&coordinatesYPlayer==y)||(coordinatesXPlayer==(x+1)&&coordinatesYPlayer==y)||(coordinatesXPlayer==x&&coordinatesYPlayer==(y+1))|| (coordinatesXPlayer==x&&coordinatesYPlayer==(y-1))){ //nice if else statement
        progressingPlayermoved(x,y)
        checkAchievements()
    }
    }
    
}
//