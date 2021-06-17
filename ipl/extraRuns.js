function extraRuns(matches,deliveries){
    if (matches === undefined || deliveries === undefined) {
        throw new Error('Received data is undefined');
      }
      else if (matches === '' || deliveries === '') {
        throw new Error('Received data is  null');
      }
      else {
        let result = {};
        const id = matches.filter(i => i.season==2016).map(i => parseInt(i.id));
        
        const extra = deliveries.filter(i=> id.includes(parseInt(i['match_id'])));
        
        for(let i in extra){
            const ex = extra[i]['extra_runs']
            const team = extra[i].bowling_team
            if(result[team]){
                result[team] += parseInt(ex);
            }
            else{
                result[team] = parseInt(ex);
            }
        }
        return result;
    }
}

module.exports = extraRuns;