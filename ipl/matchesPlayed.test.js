const matchesPlayed = require("./matchesPlayed")
const MATCHES = './archive/matches.csv'
const csv = require("csvtojson")

let matchesData

async function receiveData() {
  matchesData = await csv().fromFile(MATCHES);
}
beforeAll(receiveData);


test('Testing if matchesData defined or not', () => {
    expect(matchesData).toBeDefined();
});

test('Testing matches played in a year', () => {
    expect(matchesPlayed(matchesData)).toEqual({
        2008: 58,
        2009: 57,
        2010: 60,
        2011: 73,
        2012: 74,
        2013: 76,
        2014: 60,
        2015: 59,
        2016: 60,
        2017: 59,
    });
});

test('Test if the matches-data is not null', () => {
    expect(matchesData).not.toBeNull();
});

test('Testing if the data sent is null', () =>{
    expect(() => {
        matchesPlayed();
    }).toThrow(Error);
});


test('Testing if the data sent is undefined', () =>{
    expect(() => {
        matchesPlayed(undefined);
    }).toThrow(Error);
});

// @ponicode
describe("matchesPlayed", () => {
    test("0", () => {
        let callFunction = () => {
            matchesPlayed("Maurice Purdy")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            matchesPlayed("Ronald Keeling")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            matchesPlayed("Becky Bednar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            matchesPlayed("Gail Hoppe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            matchesPlayed("Janet Homenick")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            matchesPlayed(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
