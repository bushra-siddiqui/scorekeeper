
let totalWinningScore = document.querySelector("#players");
let reset = document.querySelector("#reset");
let winningScore = Number((totalWinningScore.value));
let flag = true;

const player1Obj = {
    
    playerBtn: document.querySelector("#player1"),
    playerDisplay:document.querySelector("#p1"),
    playerScore: 0

}

const player2Obj = {
    playerBtn : document.querySelector("#player2"),
    playerDisplay : document.querySelector("#p2"),
    playerScore: 0

}


function updateScores(winner,loser){
    if(winner.playerScore !== winningScore && flag){    
        winner.playerScore+=1;
        if( winner.playerScore ===winningScore){
            flag = false;
    
            winner.playerDisplay.classList.add('winner');
            loser.playerDisplay.classList.add('loser');
            winner.playerBtn.disabled = true;
            loser.playerBtn.disabled = true;

        }

        winner.playerDisplay.innerText = winner.playerScore;
    }

}


//Updating score of player 2
player1Obj.playerBtn.addEventListener('click',function(){
    updateScores(player1Obj,player2Obj);
   
});

//Updating score of Player 2
player2Obj.playerBtn.addEventListener('click',function(){
   updateScores(player2Obj,player1Obj);
});

reset.addEventListener('click',resetAll);
totalWinningScore.addEventListener('change',resetAll);



function resetAll(){
    player1Obj.playerScore = 0;
    player2Obj.playerScore = 0;
    winningScore = Number(totalWinningScore.value);
    flag = true;
    player1Obj.playerDisplay.innerText = 0;
    player2Obj.playerDisplay.innerText = 0;
    player1Obj.playerDisplay.classList.remove('winner','loser');
    player2Obj.playerDisplay.classList.remove('winner','loser');
    player1Obj.playerBtn.disabled = false;
    player2Obj.playerBtn.disabled = false;

}

