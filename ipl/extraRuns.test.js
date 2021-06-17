const matchesPlayed = require('./matchesPlayed');
const MATCHES = './archive/matches.csv';
const csv = require("csvtojson");
const extraRuns = require('./extraRuns');

let matchesData;

async function receiveData() {
  matchesData = await csv().fromFile(MATCHES);
}
beforeAll(receiveData);


test('Testing if matchesData defined or not', () => {
    expect(matchesData).toBeDefined();
});

// test('Testing extra runs given', () => {
//     expect(matchesPlayed(matchesData)).toEqual({
        
//     });
// });

test('Test if the matches-data is not null', () => {
    expect(matchesData).not.toBeNull();
});

test('Testing if the data sent is null', () =>{
    expect(() => {
        extraRuns();
    }).toThrow(Error);
});


test('Testing if the data sent is undefined', () =>{
    expect(() => {
        extraRuns(undefined);
    }).toThrow(Error);
});