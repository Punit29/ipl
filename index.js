const fs = require("fs");
const csv = require("csvtojson");

const matchesPlayed = require("./ipl/matchesPlayed");
const matchesWonByTeam = require("./ipl/matchesWonByTeam");
const extraRuns = require("./ipl/extraRuns");
const bestEconomy = require("./ipl/bestEconomy");

const MATCHES = './archive/matches.csv';
const DELIVERIES = './archive/deliveries.csv';

async function main(){
    
    const matchesData = await csv().fromFile(MATCHES);
    const deliveriesData = await csv().fromFile(DELIVERIES);

    let matchesPlayedResult =  matchesPlayed(matchesData);
    let matchesWonByTeamResult =  matchesWonByTeam(matchesData);

    let extraRunsResult =  extraRuns(matchesData,deliveriesData);
    let bestEconomyResult =  bestEconomy(matchesData,deliveriesData);
    
    saveData(matchesPlayedResult,matchesWonByTeamResult,extraRunsResult,bestEconomyResult);

}



function saveData(matchesPlayedResult,matchesWonByTeamResult,extraRunsResult,bestEconomyResult){
    const jsonData = {
        matchesPlayed: matchesPlayedResult,
        matchesWonByTeam: matchesWonByTeamResult,
        extraRuns: extraRunsResult,
        bestEconomy: bestEconomyResult
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile("./output.json", jsonString, "utf8", err => {
        if(err){
            console.log(err);
        }
    });
}

main().catch((err) => console.log(err));