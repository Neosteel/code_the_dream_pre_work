var myHeaders = new Headers()
// appemding the api keuy to header 
myHeaders.append("x-apisports-key", "8e90189ed7ff8a0d0f1a40c0d5039abe");
// creating an object to hold api requests 

var requestOptions =  {
    method: 'GET',
    headers :   myHeaders,
    redirect : 'follow'
};

// fixtures fetching function 
function getFixtures(leagueId){
    
        return fetch(
            "https://v3.football.api-sports.io/fixtures?league=" + leagueId + "&season=2024",
            requestOptions
        ).then(function(response){ return response.json(); });
    }
// predictions function 
function getPredictions(fixtureId) {
    return fetch("https://v3.football.api-sports.io/predictions?fixture=" + fixtureId , requestOptions).then(function(response)
     { return response.json(); });
}

// players fetching function 
function getPlayers(leagueId, playerName) {
return fetch(
    "https://v3.football.api-sports.io/players?league=" + leagueId + "&season=2024&search=" + playerName,
    requestOptions
).then(function(response) { return response.json(); });
}

// player injury update function 
function getPlayerInjury(fixtureId) { return fetch(
    "https://v3.football.api-sports.io/injuries?fixture=" + fixtureId,
    requestOptions
).then(function(response) { return response.json(); }); }