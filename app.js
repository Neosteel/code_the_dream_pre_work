
function showFixtures(data) {
    fixturesSection.innerHTML = "";

    data.response.forEach(function(fixture) {
        var homeTeam = fixture.teams.home.name;
        var awayTeam = fixture.teams.away.name;
        var matchDate = fixture.fixture.date;
        var matchId = fixture.fixture.id;

        var fixtureCard = document.createElement("div");
        fixtureCard.className = "fixture-card";

        fixtureCard.innerHTML =
            "<p>" + homeTeam + " vs " + awayTeam + "</p>" +
            "<p>Date: " + matchDate + "</p>" +
            "<button onclick='showPredictions(" + matchId + ")'>Predictions</button>";

        fixturesSection.appendChild(fixtureCard);
    });
}
//  writing a funtion for the predictions section display 
function showPredictions(matchId) {
    predictionsSection.style.display = "block";
    predictionsSection.innerHTML = "Loading predictions...";

    getPredictions(matchId).then(function(data) {
        var prediction = data.response[0].predictions;

        var predictedWinner = prediction.winner.name;
        var advice = prediction.advice;
        var homeWinPercent = prediction.percent.home;
        var drawPercent = prediction.percent.draw;
        var awayWinPercent = prediction.percent.away;

        predictionsSection.innerHTML =
            "<p>Predicted Winner: " + predictedWinner + "</p>" +
            "<p>Advice: " + advice + "</p>" +
            "<p>Home Win: " + homeWinPercent + "</p>" +
            "<p>Draw: " + drawPercent + "</p>" +
            "<p>Away Win: " + awayWinPercent + "</p>";
    });
}


// players scetion 
// players section - only runs on soccer_players page
var searchBtn = document.getElementById('search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        var playerName = document.getElementById('player-search').value;
        var playersSection = document.getElementById('players-section');

        if (playerName === '') {
            playersSection.innerHTML = '<p>Enter player name : </p>';
            return;
        }

        playersSection.innerHTML = 'The ballers are loading ... ';

        getPlayers(currentLeague, playerName).then(function(data) {
            showPlayers(data);
        });
    });
}

// display the players on the page 

function showPlayers(data) {
    var playersSection = document.getElementById("players-section");
    playersSection.innerHTML = "";

    if (data.response.length === 0) {
        playersSection.innerHTML = "<p>Player not found. Please try again.</p>";
        return;
    }

    data.response.forEach(function(playerData) {
        var playerName = playerData.player.name;
        var playerPhoto = playerData.player.photo;
        var playerAge = playerData.player.age;
        var playerNationality = playerData.player.nationality;

        var playerStats = playerData.statistics[0];

        var goals = playerStats.goals.total;
        var assists = playerStats.goals.assists;
        var yellowCards = playerStats.cards.yellow;
        var redCards = playerStats.cards.red;

        var playerCard = document.createElement("div");
        playerCard.className = "player-card";

        playerCard.innerHTML =
            '<img src="' + playerPhoto + '" alt="' + playerName + '" />' +
            "<p>" + playerName + "</p>" +
            "<p>Age: " + playerAge + "</p>" +
            "<p>Nationality: " + playerNationality + "</p>" +
            "<p>Goals: " + goals + "</p>" +
            "<p>Assists: " + assists + "</p>" +
            "<p>Yellow Cards: " + yellowCards + "</p>" +
            "<p>Red Cards: " + redCards + "</p>";

        playersSection.appendChild(playerCard);
    });
}
