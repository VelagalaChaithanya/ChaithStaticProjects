let rps=[[-1,1,0],[0,-1,1],[1,0,-1]];
let playerScore = 0;
let computerScore = 0;

let outcomes = {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissors'
}
let scores=[0,0];

function f0(){
    let com = Math.trunc(Math.random()*3);
    clearTimeout(computerAction)
    document.getElementById('computer').src = 'imgs/'+com+'.jpeg';
    begin(0,com);
}

function f1(){
    let com = Math.trunc(Math.random()*3);
    clearTimeout(computerAction)
    document.getElementById('computer').src = 'imgs/'+com+'.jpeg';

    begin(1,com);
}

function f2(){
    let com = Math.trunc(Math.random()*3);
    clearTimeout(computerAction)
    document.getElementById('computer').src = 'imgs/'+com+'.jpeg';
    begin(2,com);
}

function begin(player,com){
    let result = rps[player][com];
    document.getElementById('selected').textContent = outcomes[player];
    document.getElementById('chosen').textContent = outcomes[com];
    document.getElementById('announcement').textContent = '';
    document.getElementById('announcement').textContent = '';
    if(result == 0){
        playerScore+=1;
    }
    else{
        if(result == 1){
            computerScore+=1;
        }
    }
    
    if(playerScore==5 || computerScore ==5){
        if(playerScore==5){
            document.getElementById('announcement').textContent = 'Player Won This Round';
            scores[0]+=1;

        }
        else{
            document.getElementById('announcement').textContent = 'Computer Won This Round';
            scores[1]+=1;
        }
        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore;
        document.getElementById('player-wins').textContent = scores[0];

        document.getElementById('computer-wins').textContent = scores[1];
        playerScore=0;
        computerScore=0;
    }
    else{
        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore;
        
    }
}

let m=0,i=0;
const computerAction = setInterval(function (){
    i=m%3;
    m++;
    document.getElementById('computer').src = 'imgs/'+i+'.jpeg';
},100);


