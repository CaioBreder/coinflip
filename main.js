let computerChoice
const userChoice = prompt("heads or tails?"); 
const randomNumber = Math.floor(Math.random()*2 )
if(randomNumber == 1) {
    computerChoice = "heads"
}
if(randomNumber == 0){
computerChoice = "tails"
}
if(userChoice == computerChoice){
    alert("You guessed right! The coin flip landed on heads");
}
if(userChoice !== computerChoice){
    alert("Sorry, the coin flip landed on");
}

const birthYear = prompt("When were you born?");
if(birthYear > 2001)
alert("Sorry, you are not old enough to drink in the US");
else if(birthYear < 2001)
alert("You are old enough to drink in the US");
else if(birthYear <= 2001);
alert("You are old enough to drink in the US");
