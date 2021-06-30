const matches = `CREATE TABLE matches (id integer PRIMARY KEY,
    season integer,
    city varchar,
    date date,
    team1 varchar, 
    team2 varchar, 
    toss_winner varchar, 
    toss_decision varchar, 
    result varchar, 
    dl_applied integer, 
    winner varchar, 
    win_by_runs integer, 
    win_by_wickets integer, 
    player_of_the_match varchar, 
    venue varchar, 
    umpire1 varchar, 
    umpire2 varchar, 
    umpire3 integer
  )
`;

const deliveries=`CREATE TABLE deliveries (
    matchid integer, 
    inning integer, 
    batting_team varchar, 
    bowling_team varchar, 
    over integer, 
    ball integer, 
    batsman varchar, 
    non_striker varchar, 
    bowler varchar, 
    is_super_over integer, 
    wide_runs integer, 
    bye_runs integer, 
    legbye_runs integer, 
    noball_runs integer, 
    penalty_runs integer, 
    batsman_runs integer, 
    extra_runs integer, 
    total_runs integer, 
    player_dismissed varchar, 
    dismissal_kind varchar, 
    fielder varchar
  )
`;
const parseMatches =`copy matches from '/home/punit/mountblue/mbc-js-16-1-ipl-sql-Punit29/archive/matches.csv' with (format 'csv', header true);`;
const parseDeliveries =`copy deliveries from '/home/punit/mountblue/mbc-js-16-1-ipl-sql-Punit29/archive/deliveries.csv' with (format 'csv', header true);`;

const season =`Create table season(
  season_id SERIAL primary key,
  year int
  )
`;

const city =`Create table city(
   city_id SERIAL primary key,
   name varchar unique
   )
`;

const venue =`Create table venue(
   venue_id SERIAL primary key,
   location varchar
   )
`;

const team =`Create table team(
   team_id SERIAL primary key,
   name varchar
   )
`;

const umpire =`Create table umpire(
   umpire_id SERIAL primary key,
   name varchar
   )
`;

const inSeason =`
INSERT INTO season(year) 
select distinct(season) from matches
`;

const inCity =`
INSERT INTO city(name)
select distinct(city) from matches
`;

const inTeam =`
INSERT INTO team(name)
select distinct(team1) from matches
`;

const inVenue=`
INSERT INTO venue(location)
select distinct(venue) from matches
`;

const inUmpire =`
INSERT INTO umpire(name)
select distinct(umpire1) from matches
`;

const norm1=`
update matches set season=season_id from season where matches.season=season.year;
`;
const norm2=`
update matches set city=city_id from city where matches.city=city.name;
`;

const norm3=`
update matches set team1=team_id from team where matches.team1=team.name;

update matches set toss_winner=team_id from team where matches.toss_winner=team.name;

update matches set winner=team_id from team where matches.winner=team.name;

update matches set team2=team_id from team where matches.team2=team.name;
`;

const norm4=`
update matches set venue=venue_id from venue where matches.venue=venue.location;
`;

const norm5=`
update matches set 
umpire1=umpire_id
from umpire where 
matches.umpire1=umpire.name;

update matches set 
umpire2=umpire_id
from umpire where 
matches.umpire2=umpire.name;
`;


const normalizeDeliveries =`
update deliveries set batting_team=team_id from team where deliveries.batting_team=team.name;
update deliveries set bowling_team=team_id from team where deliveries.bowling_team=team.name;
`;

module.exports = {matches,deliveries,parseMatches,parseDeliveries,season,city,venue,team,umpire,
inCity,inSeason,inUmpire,inTeam,inVenue,
normalizeDeliveries,norm1,norm2,norm3,norm4,norm5};