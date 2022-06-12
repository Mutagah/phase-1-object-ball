function gameObject(){
return{
        home:{
            teamName:"Brooklyn Nets",
            colors:["Black","White"],
            players:{
                "Alan Anderson":{
                                "number":0,
                                "shoe":16,
                                "points":22,
                                "rebounds":12,
                                "assists":12,
                                "steals":3,
                                "blocks":1,
                                "slamDunks":1,
                                },
                "Reggie Evans":{
                                "number":30,
                                "shoe":14,
                                "points":12,
                                "rebounds":12,
                                "assists":12,
                                "steals":12,
                                "blocks":12,
                                "slamDunks":7,
                                },
                "Brook Lopez":{
                                "number":11,
                                "shoe":17,
                                "points":17,
                                "rebounds":19,
                                "assists":10,
                                "steals":3,
                                "blocks":1,
                                "slamDunks":15, 
                                },        
                "Mason Plumpee":{
                                "number":1,
                                "shoe":19,
                                "points":26,
                                "rebounds":12,
                                "assists":6,
                                "steals":3,
                                "blocks":8,
                                "slamDunks":5, 
                                },
                "Jason Terry":{
                                "number":31,
                                "shoe":15,
                                "points":19,
                                "rebounds":2,
                                "assists":2,
                                "steals":4,
                                "blocks":11,
                                "slamDunks":1,
         } }},

          away:{
                teamName:"Charlotte Hornets",
                colors:["Turquoise", "Purple"],
                players:{
                "Alan Anderson":{
                                "number":4,
                                "shoe":18,
                                "points":10,
                                "rebounds":1,
                                "assists":1,
                                "steals":2,
                                "blocks":7,
                                "slamDunks":2,
                                },
                "Bismak Biyombo":{
                                "number":0,
                                "shoe":16,
                                "points":12,
                                "rebounds":1,
                                "assists":1,
                                "steals":2,
                                "blocks":7,
                                "slamDunks":2,
                                },
                "DeSagna Diop":{
                                "number":2,
                                "shoe":14,
                                "points":24,
                                "rebounds":12,
                                "assists":12,
                                "steals":4,
                                "blocks":5,
                                "slamDunks":5, 
                                },        
                "Ben Gordon":{
                            "number":8,
                            "shoe":15,
                            "points":33,
                            "rebounds":3,
                            "assists":2,
                            "steals":1,
                            "blocks":1,
                            "slamDunks":0, 
                            },
                "Brendan Haywood":{
                            "number":33,
                            "shoe":15,
                            "points":6,
                            "rebounds":12,
                            "assists":12,
                            "steals":22,
                            "blocks":5,
                            "slamDunks":12,
                                    }
                }}
        }}
function numPointScored(playerInput){
    const game = gameObject()
    for (const gameKey in game){
            const teamHomeAway = game[gameKey]
                const playerObj = teamHomeAway.players
                    for(const playerDetails in playerObj ){
                        if (playerDetails === playerInput){
                            return playerObj[playerDetails].points
                        }
                }
         
    }
}
function shoeSize(playerInput){
    const game = gameObject()
    for (const gameKey in game){
            const teamHomeAway = game[gameKey]
                const playerObj = teamHomeAway.players
                    for(const playerDetails in playerObj ){
                        if (playerDetails === playerInput){
                            return playerObj[playerDetails].shoe
                        }
                }
         
    }
}
function teamColors(nameOfTeam){
    const game = gameObject()
    for (const gameKey in game){
            const teamHomeAway = game[gameKey]
                const teamObj = teamHomeAway.teamName
                const teamClrs = teamHomeAway.colors
                        if (nameOfTeam === teamObj){
                            return teamClrs
                        }     
    }
}
function teamNames(){
    const game = gameObject()
    for (const gameKey in game){
        debugger
            const teamHomeAway = game[gameKey]
            debugger
            for(const item in teamHomeAway){
                const nameofTeam = teamHomeAway.teamName
                let myArray = [];
                myArray.push(nameofTeam)
                console.log(myArray)
                

            }
        }
                       }
                   
function playNumbers(nameOfTeam){
    const game = gameObject()
    for (const gameKey in game){
            const teamHomeAway = game[gameKey]
                const theTeamName = teamHomeAway.teamName
                const theTeamPlayers = teamHomeAway.players
                if(nameOfTeam === theTeamName){
                    
                 for(const item in theTeamPlayers){
                    let myArray = []
                    myArray.push(theTeamPlayers[item].number)
                    console.log(myArray)
                    }
                }
            }
        }
console.log(numPointScored("DeSagna Diop"));
console.log(shoeSize("Reggie Evans"));
console.log(teamColors("Brooklyn Nets"))
teamNames()
console.log(playNumbers("Charlotte Hornets"))
