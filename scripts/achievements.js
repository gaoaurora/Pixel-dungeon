var moveTimes=0
var pickupTimes=0
var maxHealth=0
var drinkHpPotionTimes=0
var killMobWithSwordTimes=0

var playerDeathTimes=0
var damageDeal=0
var healHp=0
var achievementCompleted=0

var ifPlayerMove=false
var ifPlayerHoldingASword=false


var achievements = {
    "achievements": [
        {
            "name": "Maxout",
            "description": "Reach 30 HP", 
            "require": {"maxHealth": 30},
            "achieved": false, 
        },
            {"name": "Immortal",
            "description": "Reach 50 HP", 
            "require": {"maxHealth": 50},
            "achieved": false, 
        },
            {"name": "Potioned", 
            "description": "Drink 100 HP potion", 
            "require": {"drinkHpPotionTimes": 100},
            "achieved": false, 
        },
            {"name": "Mob Hunter",
            "description": "Kill 50 mobs", 
            "require": {"killMobWithSwordTimes": 50},
            "achieved": false, 
        },
            {"name": "Explorer", 
            "description": "Move 50 times", 
            "require": {"moveTimes": 50},
            "achieved": false, 
        },
            {"name": "When you die it",
            "description": "Die and try again", 
            "require": {"playerDeathTimes": 727},
            "achieved": false, 
        },
            {"name": "When you heal it", 
            "description": "M O R E H P", 
            "require": {"healHp": 727},
            "achieved": false, 
        },
            {"name": "When you deal it", 
            "description": "Kill or be killed",
            "require": {"damageDeal": 727},
            "achieved": false, 
        },
            {"name": "Get all achievement", 
            "description": "",
            "require": {"achievementCompleted":9}, //idk
            "achieved": false, 
        }
    ]
};
// trả về 5 mảng, gồm mảng tên, mô tả, nhiệm vụ () và đạt hay chưa
// đạt rồi thì chạy achievements.achievements[x].achieved
function extractAchievementDetails(achievements) {
    var names = [];
    var descriptions = [];
    var requireNames = [];
    var require = [];
    var achieved = [];

    achievements.achievements.forEach(achievement => {
        names.push(achievement.name);
        descriptions.push(achievement.description);
        achieved.push(achievement.achieved);

        const requireKey = Object.keys(achievement.require)[0];
        requireNames.push(requireKey);
        require.push(achievement.require[requireKey]);
    });

    return {
        names,
        descriptions,
        requireNames,
        require,
        achieved
    };
}

var { names, descriptions, requireNames, require, achieved } = extractAchievementDetails(achievements);
console.log(names);
console.log(descriptions);
console.log(requireNames);
console.log(require);
console.log(achieved);

//test something
function renderAchievementsTable(){
	var htmlTableString = "";
	
	for (var i = achievements.achievements.length - 1; i >= 0; i--){
        if(achieved[i] == true){
            htmlTableString += "<tr class='achieved' id='achievement" + (i+1) + "'>";
        }
        else{
            htmlTableString += "<tr class='unachieved' id='achievement" + (i+1) + "'>";
        }
        htmlTableString += "<td>" + names[i] + "</td>"

        switch(i){
            case 0:
                htmlTableString += "<td>" + descriptions[i] + ' ('+playerHealth+'/'+ require[i] + ")</td>"
                break;
            case 1:
                htmlTableString += "<td>" + descriptions[i] + ' ('+playerHealth + '/'+ require[i] + ")</td>"
                break;
            case 2:
                htmlTableString += "<td>" + descriptions[i] + ' ('+drinkHpPotionTimes+'/'+ require[i] + ")</td>"
                break;
            case 3:
                htmlTableString += "<td>" + descriptions[i] + ' ('+killMobWithSwordTimes+'/'+ require[i] + ")</td>"
                break;
            case 4:
                htmlTableString += "<td>" + descriptions[i] + ' ('+moveTimes+'/'+ require[i] + ")</td>"
                break;
            case 5:
                htmlTableString += "<td>" + descriptions[i] +"</td>"
                break;
            case 6:
                htmlTableString += "<td>" + descriptions[i] +"</td>"
                break;
            case 7:
                htmlTableString += "<td>" + descriptions[i] +"</td>"
                break;
            case 8:
                htmlTableString += "<td>" + descriptions[i] + ' ('+achievementCompleted+'/'+ require[i] + ")</td>"
                break;


        }
		htmlTableString += "</tr>"
    }
    document.getElementById('achievements').innerHTML=htmlTableString
}

function checkAchievements(){ //het cuu
    //maxout
    if(require[0] <= playerHealth && achieved[0]==false){
        achievements.achievements[0].achieved = true
        achieved[0]=true
        achievementCompleted++
    }
    //immortal
    if(require[1] <= playerHealth  && achieved[1]==false){
        achievements.achievements[1].achieved = true
        achieved[1]=true
        achievementCompleted++
    }
    //potioned
    if( require[2] <= drinkHpPotionTimes  && achieved[2]==false){
        achievements.achievements[2].achieved = true
        achieved[2]=true
        achievementCompleted++
    }
    // mob hunter
    if(require[3]<=killMobWithSwordTimes  && achieved[3]==false){
        achievements.achievements[3].achieved = true
        achieved[3]=true
        achievementCompleted++
    }
    //explorer
    if(require[4] <= moveTimes  && achieved[4]==false){
        achievements.achievements[4].achieved = true
        achieved[4]=true
        achievementCompleted++
    }
    //wysi1
    if(require[5] == playerDeathTimes  && achieved[5]==false){
        achievements.achievements[5].achieved = true
        achieved[5]=true
        achievementCompleted++
    }
    //wysi2
    if(require[6] == healHp  && achieved[6]==false){
        achievements.achievements[6].achieved = true
        achieved[6]=true
        achievementCompleted++
    }
    //wysi3
    if(require[7] == damageDeal && achieved[7]==false){
        achievements.achievements[7].achieved = true
        achieved[7]=true
        achievementCompleted++
    }
    if(require[8] == achievementCompleted  && achieved[8]==false){
        achievements.achievements[8].achieved = true
        achieved[8]=true
    }
    renderAchievementsTable()
}

function saveLifetimeAchievements(){
    localStorage.setItem('healHp',healHp)
    localStorage.setItem('damageDeal',damageDeal)
    localStorage.setItem('playerDeathTimes',playerDeathTimes)
}

function loadLifetimeAchievements(){
    healHp=parseInt(localStorage.getItem('healHp'))
    damageDeal=parseInt(localStorage.getItem('damageDeal'))
    playerDeathTimes=parseInt(localStorage.getItem('playerDeathTimes'))
}
