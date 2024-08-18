
window.onload = (event) => {
	
    loadSettingFromStorage()
    updateOptionsGraphic()
    startBGM(null)
    startSFX(null)
    loadLifetimeAchievements()
    renderAchievementsTable()
};


function loadSettingFromStorage(){
    if(localStorage.getItem('difficult')==null){
        diffCheck=1
	saveOptions()
    }
    // Get the value from storage and convert it to a boolean
    sfxCheck = (localStorage.getItem('sfxCheck') === 'true');

    // Get the value from storage and convert it to a boolean
    bgmCheck = (localStorage.getItem('bgmCheck') === 'true');

    mobileCheck = (localStorage.getItem('mobileCheck') === 'true');
    

    // Get the value from storage and convert it to an integer 
    diffCheck = parseInt(localStorage.getItem('difficult'));//what this mean thua

    updateOptionsGraphic();
    //totally chatgpt
}
function saveOptions(){
    localStorage.setItem('sfxCheck',sfxCheck)
    localStorage.setItem('bgmCheck',bgmCheck)
    localStorage.setItem('difficult',diffCheck)
    localStorage.setItem('mobileCheck',mobileCheck)

}
function updateOptionsGraphic(){
    //sfx
    switch(sfxCheck){
        case false:
            document.getElementById("sfxToggle").innerHTML="Off";
            document.getElementById("sfxToggle").style.color="rgb(226, 67, 67)"
            document.querySelector(':root').style.setProperty('--sfx','#B71C1C')
        break;
        case true:
            document.getElementById("sfxToggle").innerHTML="On";
            document.getElementById("sfxToggle").style.color="rgb(67, 226, 67)"
            document.querySelector(':root').style.setProperty('--sfx','#1e6e33')
        break;
    }
    //bgm
    switch(bgmCheck){
        case false:
            document.getElementById("bgmToggle").innerHTML="Off";
            document.getElementById("bgmToggle").style.color="rgb(226, 67, 67)"
            document.querySelector(':root').style.setProperty('--bgm','#B71C1C')
        break;
        case true:
            document.getElementById("bgmToggle").innerHTML="On";
            document.getElementById("bgmToggle").style.color="rgb(67, 226, 67)"
            document.querySelector(':root').style.setProperty('--bgm','#1e6e33')
        break;
    }
    //diff
    switch(diffCheck){
        case 2://ez-nm
            document.getElementById("diffToggle").innerHTML="Normal";
            document.getElementById("diffToggle").style.color="rgb(168, 168, 0)"
            document.querySelector(':root').style.setProperty('--diff',color[diffCheck-1])
        break;
        case 3://nm-hd
            document.getElementById("diffToggle").innerHTML="Hard";
            document.getElementById("diffToggle").style.color="rgb(255, 0 , 0)" 
            document.querySelector(':root').style.setProperty('--diff',color[diffCheck-1])
        break;
        case 1://hd-ez
            document.getElementById("diffToggle").innerHTML="Easy";
            document.getElementById("diffToggle").style.color="rgb(0, 123, 255)"
            document.querySelector(':root').style.setProperty('--diff',color[diffCheck-1])
        break;
    }
    //mobile
    switch(mobileCheck){
        case false:
            document.getElementById("mobileToggle").innerHTML="Off";
            document.getElementById("mobileToggle").style.color="rgb(226, 67, 67)"
            document.querySelector(':root').style.setProperty('--mobile','#B71C1C')
        break;
        case true:
            document.getElementById("mobileToggle").innerHTML="On";
            document.getElementById("mobileToggle").style.color="rgb(67, 226, 67)"
            document.querySelector(':root').style.setProperty('--mobile','#1e6e33')
        break;
    }
}
function diffToggle(){
    document.getElementById("diffToggle").style.animation = "btnClicked 0.3s";
    setTimeout(function(){
        document.getElementById("diffToggle").style.animation = "";
    },301)
    console.log(diffCheck)
    switch(diffCheck){
        case 1://ez-nm
            diffCheck=2;
        break;
        case 2://nm-hd
            diffCheck=3;
        break;
        case 3://hd-ez
            diffCheck=1;
        break;
    }
    updateOptionsGraphic()
}
function sfxToggle(){
    document.getElementById("sfxToggle").style.animation = "btnClicked 0.25s";
    setTimeout(function(){
        document.getElementById("sfxToggle").style.animation = "";
    },501) // to prevent animation fuck up
    switch(sfxCheck){
        case false:
            sfxCheck=true;
        break;
        case true:
            sfxCheck=false;
        break;
    }
    updateOptionsGraphic()
}
function bgmToggle(){
    document.getElementById("bgmToggle").style.animation = "btnClicked 0.25s";
    setTimeout(function(){
        document.getElementById("bgmToggle").style.animation = "";
    },501) // to prevent animation fuck up
    switch(bgmCheck){
        case false:
            bgmCheck=true;
        break;
        case true:
            bgmCheck=false;
        break;
    }
    updateOptionsGraphic()
}
function mobileToggle(){
    document.getElementById("mobileToggle").style.animation = "btnClicked 0.25s";
    setTimeout(function(){
        document.getElementById("mobileToggle").style.animation = "";
    },501) // to prevent animation fuck up
    switch(mobileCheck){
        case false:
            mobileCheck=true;
        break;
        case true:
            mobileCheck=false;
        break;
    }
    updateOptionsGraphic()
}
function optionsScreen(){
    document.getElementById("optionsButton").style.animation = "btnClicked 0.5s";
    setTimeout(function(){
        document.getElementById("optionsButton").style.animation = "";
    },501) // to prevent animation fuck up
    
    document.getElementById("menu").style.display="none"
    document.getElementById("options").style.display=""

    //save settings
    localStorage.setItem('sfxCheck',sfxCheck)
    localStorage.setItem('bgmCheck',bgmCheck)
    localStorage.setItem('difficult',diffCheck)
}
function menuScreen(){
    document.getElementById("menu").style.display=""
    document.getElementById("options").style.display="none"
    document.getElementById("gameScreen").style.display="none"
    saveOptions()
    saveLifetimeAchievements()
    stopBGM()
}
function gameScreen(){
    document.getElementById("menu").style.display="none"
    document.getElementById("gameScreen").style.display="" 
    if(!isGameStart){
        //reset 1game achiv to 0
        playerHealth=15
        playerMaxHealth=15
        moveTimes=0
        pickupTimes=0
        maxHealth=0
        drinkHpPotionTimes=0
        killMobWithSwordTimes=0
        ///////////////////////
        isGameStart=true

        randomAtStart()
        setTimeout(function(){
            updateGameScreen()
        },750)
    }
    stopBGM()
    startBGM('chill.mp3')
}

function toggleLog(){
    document.getElementById("logToggle").style.animation = "btnClicked 0.25s";
    setTimeout(function(){
        document.getElementById("logToggle").style.animation = "";
    },501) // to prevent animation fuck up
    switch(logCheck){
        case false:
            logCheck=true;
        break;
        case true:
            logCheck=false;
        break;
    }
    updateOptionsGraphic()
}

function stopSFX(){
	if(isPlaying == true){
		sfx.pause();
	}	
}
function startSFX(filename){
		sfx = new Audio('sfx/'+filename);
		sfx.play();
		isPlaying = true;
        if(!sfxCheck){
            stopSFX()
        }
}

function stopBGM(){
	if(isBGMPlaying == true){
		bgm.pause();
	}	
}
function startBGM(filename){
		bgm = new Audio('bgm/'+filename);
		bgm.play();
		isBGMPlaying = true;
        if(!bgmCheck){
            stopBGM()
        }
        
	
}
