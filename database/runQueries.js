const {Client} = require('pg');
const client = require('./database');

const {matches,deliveries,
    parseMatches,parseDeliveries,
    season,city,venue,team,umpire,
    inCity,inSeason,inUmpire,inTeam,inVenue,
    normalizeDeliveries,norm1,norm2,norm3,norm4,norm5} = require('./queries');


const runQueries = async () =>{
    try{
        await client.query('BEGIN')

        await client.query(`DROP TABLE IF EXISTS matches, deliveries,
        parseMatches,parseDeliveries,season,city,venue,team,umpire`);
        await client.query(matches)
        await client.query(deliveries)
        await client.query(parseMatches)
        await client.query(parseDeliveries)
        await client.query(season)
        await client.query(city)
        await client.query(venue)
        await client.query(team)
        await client.query(umpire)

        client.query(inCity);
        client.query(inSeason);
        client.query(inUmpire);
        client.query(inVenue);
        client.query(inTeam);


        client.query(norm1);
        client.query(norm2);
        client.query(norm3);
        client.query(norm4);
        client.query(norm5);


        client.query(normalizeDeliveries);

        await client.query('COMMIT')
    }
    catch(err){
        throw err;
    }
}

module.exports = runQueries;