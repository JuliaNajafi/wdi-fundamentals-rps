////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /* return Your Expression */

    if (move === "rock" || "paper" || "scissors")
    {
        return move;
    }
    else if (move != ("rock" || "paper" || "scissors"))
    {
        return getInput();
    }

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    /* return Your Expression */

    if (move === "rock" || "paper" || "scissors")
    {
        return move;
    }
    else if (move != ("rock" || "paper" || "scissors"))
    {
        return randomPlay();
    }

}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
    
   function getWinner(playerMove,computerMove) 
   {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove)
    {
        return "tie";
    }
    else if ( (playerMove === "rock") && (computerMove === "scissors"))
    {
        winner = "player";
    }
    else if ( (computerMove === "rock") && (playerMove === "scissors"))
    {
        winner = "computer";
    }
    else if ( (playerMove === "scissors") && (computerMove === "paper"))
    {
        winner = "player";
    }
    else if ( (computerMove === "scissors" ) && (playerMove === "paper"))
    {
        winner = "computer";
    }
    else if ( (playerMove === "paper") && (computerMove === "rock"))
    {
        winner = "player";
    }
    else if ( (computerMove === "paper") && (playerMove === "rock"))
    {
        winner = "computer";
    }

    return winner;
    
    }

    
    while ( (playerWins < 5) && (computerWins < 5))
    {
        var playerMove = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
        var computerMove = randomPlay();

        console.log('Player played ' + playerMove + ' while computer played ' + computerMove+ '.');
        console.log(winner=getWinner(playerMove, computerMove));

        if (winner ==="player")
        {
        playerWins++;
        }
        else if (winner ==="computer")
        {
        computerWins++;
        }

        console.log("player has " + playerWins + ". Computer has "+ computerWins + ".");

        return [playerWins, computerWins];
    }

    
}

