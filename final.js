const fs = require("fs");
const client = require('./database/database');
const queries = require('./database/runQueries');

  async function main(){
    try{
      await queries();
      const matchesPlayed = await client.query(
        `
        select year, count(matches.season) as matches_played from matches,
        season where matches.season = season.season_id group by year order by year
        `
      );

      const matchesWonByTeam = await client.query(
        `
        select season.year, team.name, count(winner) as matches_won
        from season, matches, team
        where CAST(team.team_id AS varchar) = matches.winner group by season.year,team.name
        order by year
        `
      )

      const extraRuns = await client.query(
        `
        select t.name,sum(d.extra_runs) as extra_runs from deliveries d,team t 
        where (matchid>=577 and matchid<=636) 
        and (d.bowling_team=CAST(t.team_id AS VARCHAR))
        group by t.name;
        `
      )

      const bestEconomy = await client.query(
        `
      select bowler, sum(total_runs) as economy from deliveries
      where (matchid>518 and matchid<576) group by bowler 
      order by economy limit 10;
      `
      )

    const jsonData = {
        matchesPlayed: matchesPlayed.rows,
        matchesWonByTeam: matchesWonByTeam.rows,
        extraRuns: extraRuns.rows,
        bestEconomy: bestEconomy.rows,
    };

    const jsonString = JSON.stringify(jsonData);
    fs.writeFile("./public/output.json", jsonString, "utf8", err => {
        if(err){
            console.log(err);
        }
    });


    }
    catch(err){
      throw err;
    }
    finally{
      client.end();
    }
  }

main();