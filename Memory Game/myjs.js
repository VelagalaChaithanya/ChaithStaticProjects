let keys;
let completed
let score
let tries;
let opened = [];
let gamekeys = [];
let i;
let time;
let timeTaken;
function load(){
    keys = 'ABCDEFGHIJKLABCDEFGHIJKL'.split('')
    completed = new Array(24);
    score = new Array(24);
    tries=0;
    for(let i=0;i<24;i++){
        completed[i]=0;
        score[i]=0;
    }
    console.log(keys);
    opened = [];
    gamekeys = [];
    while(keys.length > 0){
        i=Math.trunc(Math.random()*keys.length);
        i=keys.splice(i,1).join();
        gamekeys.push(i)
    }
    console.log(keys,gamekeys);
    time=0;
    let game = document.querySelectorAll('.game-card');
    game.forEach((n)=>{
        n.classList.remove('correct-answer');
    });
    }
document.getElementById('startGame').addEventListener('click',function(){
    load();
    let id;
    for(i=1;i<25;i++){
        id = 'c'+i;
        document.getElementById(id).innerHTML = "<img src='imgs/" + gamekeys[i-1] + ".jpeg'>";
    }
    let ti=0;
    setInterval(function (){
        ti++;
        if(ti==2){
            for(i=1;i<25;i++){
                id = 'c'+i;
                document.getElementById(id).textContent = '?';
            }
            clearInterval()
        }

    },1000);
    time=0;
    timeTaken = setInterval(function (){
        time++;
        document.getElementById('timeUsed').textContent = Math.trunc(time/60).toString().padStart(2,'0')+':'+ (time%60).toString().padStart(2,'0');
    },1000)
    this.style.display = 'none';

    let game = document.querySelectorAll('.game-card');
    for(let i=0;i<24;i++){
        game[i].addEventListener('click',function(){        
            if(!opened.includes(this) && score[ parseInt(this.id.split('c')[1]) -1 ] == 0){
                this.textContent = gamekeys[parseInt(this.id.split('c')[1]) -1];
                this.innerHTML = "<img src='imgs/" + gamekeys[parseInt(this.id.split('c')[1]) -1] + ".jpeg'>";

                opened.push(this);
                // console.log(gamekeys[parseInt(this.id.split('c')[1]) - 1],opened);
            }
            if(opened.length == 3){
                opened.shift().textContent = '?'
                opened.shift().textContent = '?'
            }
            if(opened.length == 2){
                if(opened[0].innerHTML == opened[1].innerHTML){
                    opened[0].classList.add('correct-answer');
                    opened[1].classList.add('correct-answer');
                    
                    score[ parseInt(opened[0].id.split('c')[1]) - 1 ] = 1;
                    score[ parseInt(opened[1].id.split('c')[1]) - 1 ] = 1 ;
                    opened = [];
                    tries+=1;
                }
            }
            document.getElementById('tries').textContent = tries;
            if(tries == 12){
                clearInterval(timeTaken);
                document.getElementById('startGame').style.display = 'inline-block';
                let t1 = document.getElementById('bestTime').textContent;
                let [min,sec] = t1.split(':')
                t1 = min*60 + parseInt(sec);
                if(document.getElementById('bestTime').textContent == '00:00' || t1 > tries)
                    document.getElementById('bestTime').textContent = Math.trunc(time/60).toString().padStart(2,'0')+':'+ (time%60).toString().padStart(2,'0');
                load();
            }
        });
    }
});


