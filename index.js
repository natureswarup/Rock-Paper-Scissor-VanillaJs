let pscore = document.getElementById('pscore')
let hscore = document.getElementById("hscore");
let results = document.getElementById("results");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissors");

pscore.value = 0;
hscore.value = 0;
pscore.innerHTML = pscore.value
hscore.innerHTML = hscore.value

let playerChoice = "";
let compChoice = "";

function Random (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function compPick() {
    let choices = ['rock', 'paper', 'scissor']
    return choices[Random(0,2)]
}

function getResults(playerChoice, compChoice) {
  let playerWinPhrase = `${playerChoice.toUpperCase()} beats ${compChoice.toUpperCase()}! Player Wins!`
  let compWinPhrase = `${compChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}! Computer Wins!`

  if (playerChoice === compChoice) {
    results.innerHTML = `Draw! You both picked ${playerChoice.toUpperCase()}!`
  }

  if (playerChoice === 'rock' && compChoice === 'scissor' || playerChoice === 'scissor' && compChoice === 'paper' || playerChoice === 'paper' && compChoice === 'rock') {
    results.innerHTML = playerWinPhrase
    pscore.innerHTML = pscore.value += 1
  }
  if (playerChoice === 'rock' && compChoice === 'paper' || playerChoice === 'scissor' && compChoice === 'rock' || playerChoice === 'paper' && compChoice === 'scissor') {
    results.innerHTML = compWinPhrase;
    hscore.innerHTML = hscore.value += 1;
  }

}

rock.addEventListener('click', ()=>{
  getResults('rock', compPick())
})
paper.addEventListener("click", ()=>{
  getResults('paper', compPick())
});
scissor.addEventListener("click", ()=>{
  getResults('scissor', compPick())
});

