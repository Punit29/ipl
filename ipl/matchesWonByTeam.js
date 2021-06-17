function matchesWonByTeam(matches){
    if (matches === undefined) {
        throw new Error('Received data is undefined ');
      }
    else if (matches === '') {
    throw new Error('Received data is  null');
    }
    else {
        let result = {};
        for(let match=0; match<matches.length; match++)
        {
            const season = matches[match].season
            const winner = matches[match].winner
            if (result[season]){
                if(result[season][winner]){
                    result[season][winner]+=1
                }
                else{
                    result[season][winner]=1
                }
            }
            else{
                result[season] = {}
                result[season][winner]=1
            }
        }
        return result;
    }
}

module.exports = matchesWonByTeam;