function fetchAndVisualizeData(){
    fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayed);
    visualizeMatchesWonByTeam(data.matchesWonByTeam);
    visualizeExtraRuns(data.extraRuns);
    visualizeBestEconomy(data.bestEconomy);

    return;
  }

  function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
      seriesData.push([year, matchesPlayedPerYear[year]]);
    }
  
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column",
      },
      title: {
        text: "Matches Played Per Year",
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches",
        },
      },
      series: [
        {
          name: "Years",
          data: seriesData,
        },
      ],
    });
  }


  function visualizeMatchesWonByTeam(data)
{
    const series = []
    let year = Object.keys(data)
    const team = []
    for(let i=0;i<year.length;i++)
    {    
      team.push(Object.keys(data[year[i]]))
    }
    const teams=[...new Set([].concat.apply([], team))]

    for(let i in teams)
    {
      let total=[]
      for(let j in year)
      {
        if(data[year[j]].hasOwnProperty(teams[i]))
        {
          total.push(data[year[j]][teams[i]])
        }
        else{
          total.push(0)
        }
      }
      series.push({name: teams[i], data: total})
    }

    Highcharts.chart('matches-won-by-each-team', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Number of matches won by each team over all the years of IPL'
      },
      subtitle: {
          text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
          categories: year,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Matches won'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: series
    });
}

function visualizeExtraRuns(data){
    const seriesData = [];
  for (let i in data) 
  {
    seriesData.push([i, data[i]]);
  }

  Highcharts.chart("extra-runs", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra runs by each team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra runs"
      }
    },
    series: [
      {
        name: "Runs",
        data: seriesData
      }
    ]
  });
}

function visualizeBestEconomy(data)
{
  Highcharts.chart("best-economy", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top 10 economical bowlers of 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Economy",
        data: data
      }
    ]
  });
}