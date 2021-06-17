function bestEconomy(matches,deliveries){
    
    if (matches === undefined || deliveries === undefined) {
        throw new Error('Received data is undefined');
      }
      else if (matches === '' || deliveries === '') {
        throw new Error('Received data is null');
      }
      else {

        let totalRuns={}, overs={}, result
        const fifteenId = (matches.filter(i=>i.season==2015)).map(i=>parseInt(i.id))
        const ffDeliveries = deliveries.filter(i=> fifteenId.includes(parseInt(i['match_id'])))
        
        
        for(let i in ffDeliveries){
            const runs = ffDeliveries[i]['total_runs']
            const bowler = ffDeliveries[i].bowler
            if(totalRuns[bowler]){
                totalRuns[bowler]+=parseInt(runs)
                if(parseInt(ffDeliveries[i].ball)==6){
                    overs[bowler]+=1
                }
            }
            else{
                totalRuns[bowler]=parseInt(runs)
                overs[bowler]=0
            }
        }

        for(let i in totalRuns){
            totalRuns[i]=totalRuns[i]/overs[i]
        }
        result =(Object.entries(totalRuns).sort((a,b)=>a[1]-b[1])).slice(0, 10)
        
        return result;
    }
}

module.exports = bestEconomy;