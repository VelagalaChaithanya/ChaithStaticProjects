let keys = 'ABCDEFGHIJKLABCDEFGHIJKL'.split('')
let completed = new Array(24);
for(let i=0;i<24;i++)
    completed[i]=0;
console.log(keys);
let opened = [];
let gamekeys = []
let i;
while(keys.length > 0){
    i=Math.trunc(Math.random()*keys.length);
    i=keys.splice(i,1).join();
    gamekeys.push(i)
}
console.log(keys,gamekeys);

let id;
for(i=1;i<25;i++){
    id = 'c'+i;
    document.getElementById(id).textContent = gamekeys[i-1];
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

let game = document.querySelectorAll('.game-card');
for(let i=0;i<24;i++){
    game[i].addEventListener('click',function(){        
        if(!opened.includes(this)){
            this.textContent = gamekeys[parseInt(this.id.split('c')[1]) -1];
            opened.push(this);
            // console.log(gamekeys[parseInt(this.id.split('c')[1]) - 1],opened);
        }
        if(opened.length == 3){
            opened.shift().textContent = '?'
            opened.shift().textContent = '?'
        }
        

    });
}

