// var myHeaders = new Headers();
// myHeaders.append("x-apisports-key", "8e90189ed7ff8a0d0f1a40c0d5039abe");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// function fetchLeague() {
//   return fetch(
//     "https://v3.football.api-sports.io/leagues?name=premier%20league",
//     requestOptions
//   ).then(function (response) { return response.json(); });
// }



// function fetchLeagueById() {
//     return fetch(
//       "https://v3.football.api-sports.io/leagues?id=140",
//       requestOptions
//     ).then(function (response) { return response.json(); });
//   }

var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "8e90189ed7ff8a0d0f1a40c0d5039abe");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const url = "https://v3.football.api-sports.io"

async function teaminfo() { 
    const urlteam = `${url}/teams?name=liverpool`
    const response = await fetch (urlteam, requestOptions)
    const data = await response.json()
    console.log(data)
}

teaminfo()

