# Analysis Chart Front-End Challenge

## Description
The challenge is to implement an analytics dashboard like this one with the description below:

![design](https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/chart-design.jpg)

## Features: 
- analytics dashboard for school's lessons data.
- display an animated "loading..." message while the user waits for the data to load.
- the user has an option to filter the school's lessons by "Country" and "Camp".
- schools for the selected country camp will be listed in another selection input, so users can get up all school's lessons or select one of them.
- selected schools mapped on a line chart which shows a line for each school with its lessons per month
- user can click on any school line on the chart to give more details (will navigate to another page)
- the details page shows the school Lessons information like country, camp, school, lessons per month, and the total number of lessons.
- After returning from the details page, the user can get up the last filters.
- list of selected schools will preview on the side, containing the total lessons in this country-camp schools and each school's lessons. 
- the user has the option to toggle to show or hide the line chart of a particular school.
- user can switch between dark/light mode and will be preserved.

## Built With
`React` `mui/material` `RTk` `chart.js` `typescript` `jest` 

## Getting Started
To get a local copy up and running follow these simple example steps.

#### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
#### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/asmasaber/analytics-dashboard-react-challenge.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Start the application
   ```js
   yarn start
   ```

#### Available Scripts
- Build
   ```sh
   yarn build
   ```
- Test
   ```sh
   yarn test
   yarn test:coverage
   ```
- linting & formating code 
  ```sh
   yarn lint
   yarn lint:fix
   yarn format
   ```

## Backlog
- [x] A loading screen is expected while fetching the data.json from the server. You can use the raw file directly from Github or serve it from a local server.
- [x] The 3 drop-down lists at the top should filter the data. Select School should have the option to Show all.
- [x] A chart renders the data of the selected schools similar to the image above.
- [x] On the right of the screen, the total number of lessons is displayed for the selected Camp, School, and Country, followed by a list of the schools with how many lessons each offers.
- [x] The school's list from point 4 should include toggles to show or hide the line chart of a certain school.
- [x] Upon clicking on a point in the chart from point 3, the app should navigate to another page where all the details of that item are shown. No UX is provided, but use a simple layout that shows: like country, camp, school, month, and a number of lessons.
- [x] After coming back from the details page implemented in point 6, the last filtering state should be preserved
- [x] Implement a toggle to switch on/off dark mode.
- [ ] Multi-lingual support.
- [ ] E2E testing
- [x] Documentation