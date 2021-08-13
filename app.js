// import functions and grab DOM elements
const teamOneScoreEl = document.getElementById('team1-score');

const teamTwoScoreEl = document.getElementById('team2-score');

const teamOneButtonEl = document.getElementById('team1-btn');

const teamTwoButtonEl = document.getElementById('team2-btn');

// initialize state
let teamOneTotal = 0;
let teamTwoTotal = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

teamOneButtonEl.addEventListener('click', () => {
    teamOneTotal += 7;
    teamOneScoreEl.textContent = teamOneTotal;
});
teamTwoButtonEl.addEventListener('click', () => {
    teamTwoTotal += 7;
    teamTwoScoreEl.textContent = teamTwoTotal;
});
