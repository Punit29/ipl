const matchesPlayed = require('./matchesPlayed');
const MATCHES = './archive/matches.csv';
const DELIVERIES = './archive/deliveries.csv';
const csv = require("csvtojson");
const bestEconomy = require('./bestEconomy');

let matchesData;

async function receiveData() {
  matchesData = await csv().fromFile(MATCHES);
  deliveries = await csv().fromFile(DELIVERIES);
}
beforeAll(receiveData);


test('Testing if matchesData defined or not', () => {
    expect(matchesData).toBeDefined();
});

// test('Testing if most economical bowlers match', () => {
//     expect(bestEconomy(matchesData, deliveries)).toEqual({
        
//     });
// });

test('Test if the matches-data is not null', () => {
    expect(matchesData).not.toBeNull();
});

test('Testing if the data sent is null', () =>{
    expect(() => {
        bestEconomy();
    }).toThrow(Error);
});


test('Testing if the data sent is undefined', () =>{
    expect(() => {
        bestEconomy(undefined);
    }).toThrow(Error);
});