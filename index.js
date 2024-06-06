let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    //generate a random value from 0 to 2
    const randIdx = Math.floor(Math.random()*3);

    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin)
    {   
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const draw = ()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice)=>{
    //generate computer choice
    const compChoice = genComputerChoice();

    console.log("user - ", userChoice, "comp - ", compChoice);

    if(userChoice === compChoice)
    {
        draw();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {//comp -> paper or scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "scissors")
        {
            //comp -> paper or rock
            userWin = compChoice === "rock" ? false : true;
        }
        else
        {  //comp -> rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})