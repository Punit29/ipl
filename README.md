# Ipl-project
Downloaded the data from: https://www.kaggle.com/manasgarg/ipl

There should be 2 files:
- deliveries.csv
- matches.csv


## Problem
In this data assignment we were asked to transform raw data of IPL to calculate the following stats:

1. Number of matches played per year for all the years in IPL.
2. Number of matches won per team per year in IPL.
3. Extra runs conceded per team in the year 2016
4. Top 10 economical bowlers in the year 2015

## Project Structure

`archive` directory contains the csv file data.

`ipl` directory contains the functions for different problem statement.

`test` directory contains the test cases for every function in the 'ipl' folder.

`testData` directory contains the dummy data and result for every function present in 'ipl' folder.

`index.js` read the csv data and calls the functions then saves the results in `output.json`.