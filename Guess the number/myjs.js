let prev = -1;
let tries = 0;
let bestscore = 0;
ans = Math.round(Math.random()*99)+1;
let ansArr = [];
let low = 'Your guess is Lower than the answer';
let high = 'Your guess is Higher than the answer';

console.log(ans);
document.getElementById('tries').textContent = tries;
document.getElementById('bestScore').textContent = bestscore;
function playAgain(){
    ans = Math.round(Math.random()*99)+1;
    document.getElementById('left').style.color = 'red';
    document.getElementById('low').innerHTML = ' ';
    document.getElementById('right').style.color = 'red';
    document.getElementById('high').innerHTML = ' ';

    document.getElementById('guessbtn').style.display = 'inline-block';
    document.getElementById('playAgain').style.display = 'none';
    tries=0;
    document.getElementById('tries').textContent = tries;
    ansArr = [];



}
function Guess(){
    let g = Number.parseInt(document.getElementById('guess').value);
    console.log(g);
    if(ansArr.includes(g)){
        tries-=1;
    }
    else{
        ansArr.push(g);
    }
    tries+=1;

    if(g<0 || g>99){
        document.getElementById('errorMsg').textContent = 'Enter a Valid number';
        return; 
    }
    if(g==ans){
        document.getElementById('left').style.color = 'green';
        document.getElementById('low').innerHTML = 'YOU';
        document.getElementById('errorMsg').textContent = ' ';


        document.getElementById('right').style.color = 'green';
        document.getElementById('high').innerHTML = 'WIN!!!';
        if(bestscore == 0){
            bestscore = tries;
        }
        else{
            bestscore = tries > bestscore ? bestscore : tries;
        }
        document.getElementById('bestScore').textContent = bestscore;

        document.getElementById('guessbtn').style.display = 'none';
        document.getElementById('playAgain').style.display = 'inline-block';


    }   
    else{ 
        if(g > ans ){
            document.getElementById('low').textContent = ' ';
            document.getElementById('high').textContent = high;
            document.getElementById('errorMsg').textContent = ' ';

            
        }
        else{
            if(g < ans){
                document.getElementById('low').textContent = low;
                document.getElementById('high').textContent = ' ';
                document.getElementById('errorMsg').textContent = ' ';


            }
            else{
                console.log('Error');
            }
        }
    }
    document.getElementById('tries').textContent = tries;

}