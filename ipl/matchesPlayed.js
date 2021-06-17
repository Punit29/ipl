function matchesPlayed(matches){
  if(matches === undefined){
    throw new Error('undefined data not allowed');
  }
  else if(matches === ''){
    throw new Error('data empty');
  }
  else{
    let res = {};
    for (let match of matches) {
        const season = match.season;
        if (res[season]) {
          res[season] += 1;
        } else {
          res[season] = 1;
        }
      }
    return res;
  }
}

module.exports = matchesPlayed;