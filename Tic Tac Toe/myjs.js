let fill = new Array(9);
let grid_fill = [0,0,0,0,0,0,0,0,0];
for(let i=0;i<9;i++)
    fill[i]=i;
let value = 'O',player1='X',player2='O';
let sum_fill = 0;
let player1Wins = 0, player2Wins=0;

function check(fill){
    for(let i=0;i<3;i++)  // top to bottom
        if(fill[i]==fill[i+3] && fill[i+3]==fill[i+6])
            return fill[i];
    for(let i=0;i<9;i+=3)  // left to right
        if(fill[i]==fill[i+1] &&fill[i+1]==fill[i+2])
            return fill[i];
    if(fill[0]==fill[4] && fill[4]==fill[8]) //diagnol from left to right
        return fill[0];
    if(fill[2]==fill[4] && fill[4]==fill[6]) //diagnol from right to left
        return fill[2];
    return 0;
}


let grid_btns=document.querySelectorAll('.r1');
console.log(grid_btns);
for(let i=0;i<9;i++){
    grid_btns[i].addEventListener('click',function (){
        if(grid_fill[i]==0){
            value = value=='O' ? value = 'X' : value = 'O';
            grid_btns[i].textContent = value;
            grid_fill[i]+=1;
            fill[i]=value;
            sum_fill += 1;
            winner = check(fill);
            if(winner){
                winner==player1 ? player1Wins++ : player2Wins++;

                winner = winner==player1 ? 'Player 1' : 'Player 2';
                winner+=' is <br> the winner';
                for(let j=0;j<9;j++)
                    grid_fill[j]+=1;
                document.querySelector('#winner').innerHTML= winner;
                document.querySelector('.game-over').style.display='block';
                document.getElementById('player1-score').textContent = player1Wins;
                document.getElementById('player2-score').textContent = player2Wins;

            }
            document.getElementById('player1').classList.toggle('player-active');
            document.getElementById('player2').classList.toggle('player-active');

        }
        if(sum_fill == 9){
            document.querySelector('.game-over').style.display='block';
            document.querySelector('#winner').innerHTML = 'Game Over <br> Draw <br>'
        }
        
    });
}



function restart(){
    fill = new Array(9);
    grid_fill = [0,0,0,0,0,0,0,0,0];
    for(let i=0;i<9;i++)
        fill[i]=i;
    value = 'O';
    sum_fill = 0;
    for(let i=0;i<9;i++)
        grid_btns[i].textContent = '';
    document.querySelector('.game-over').style.display='none';
    player1 = player1=='X' ? player1='O' : player1='X';
    player2 = player2=='X' ? player2='O' : player2='X';
    if(player1 =='X'){
        document.getElementById('player1').classList.add('player-active');
        document.getElementById('player2').classList.remove('player-active');
    }
    else{
        document.getElementById('player1').classList.remove('player-active');
        document.getElementById('player2').classList.add('player-active');

    }

    document.getElementById('player1-role').textContent = player1;
    document.getElementById('player2-role').textContent = player2;


}
