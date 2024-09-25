let challenge = -1;
let created=0;

let challenges = [
    [
        [0, 0, 0, 2, 6, 0, 7, 0, 1],
        [6, 8, 0, 0, 7, 0, 0, 9, 0],
        [1, 9, 0, 0, 0, 4, 5, 0, 0],
        [8, 2, 0, 1, 0, 0, 0, 4, 0],
        [0, 0, 4, 6, 0, 2, 9, 0, 0],
        [0, 5, 0, 0, 0, 3, 0, 2, 8],
        [0, 0, 9, 3, 0, 0, 0, 7, 4],
        [0, 4, 0, 0, 5, 0, 0, 3, 6],
        [7, 0, 3, 0, 1, 8, 0, 0, 0]
    ],
    [
        [ 1 , 0 , 0 , 4 , 8 , 9 , 0 , 0 , 6 ],
        [ 7 , 3 , 0 , 0 , 0 , 0 , 0 , 4 , 0 ],
        [ 0 , 0 , 0 , 0 , 0 , 1 , 2 , 9 , 5 ],
        [ 0 , 0 , 7 , 1 , 2 , 0 , 6 , 0 , 0 ],
        [ 5 , 0 , 0 , 7 , 0 , 3 , 0 , 0 , 8 ],
        [ 0 , 0 , 6 , 0 , 9 , 5 , 7 , 0 , 0 ],
        [ 9 , 1 , 4 , 6 , 0 , 0 , 0 , 0 , 0 ],
        [ 0 , 2 , 0 , 0 , 0 , 0 , 0 , 3 , 7 ],
        [ 8 , 0 , 0 , 5 , 1 , 2 , 0 , 0 , 4 ]
    ]
];
    
let solutions = [
    [
        [4, 3, 5, 2, 6, 9, 7, 8, 1],
        [6, 8, 2, 5, 7, 1, 4, 9, 3],
        [1, 9, 7, 8, 3, 4, 5, 6, 2],
        [8, 2, 6, 1, 9, 5, 3, 4, 7],
        [3, 7, 4, 6, 8, 2, 9, 1, 5],
        [9, 5, 1, 7, 4, 3, 6, 2, 8],
        [5, 1, 9, 3, 2, 6, 8, 7, 4],
        [2, 4, 8, 9, 5, 7, 1, 3, 6],
        [7, 6, 3, 4, 1, 8, 2, 5, 9]
    ],
    [
        [ 1 , 5 , 2 , 4 , 8 , 9 , 3 , 7 , 6 ],
        [ 7 , 3 , 9 , 2 , 5 , 6 , 8 , 4 , 1 ],
        [ 4 , 6 , 8 , 3 , 7 , 1 , 2 , 9 , 5 ],
        [ 3 , 8 , 7 , 1 , 2 , 4 , 6 , 5 , 9 ],
        [ 5 , 9 , 1 , 7 , 6 , 3 , 4 , 2 , 8 ],
        [ 2 , 4 , 6 , 8 , 9 , 5 , 7 , 1 , 3 ],
        [ 9 , 1 , 4 , 6 , 3 , 7 , 5 , 8 , 2 ],
        [ 6 , 2 , 5 , 9 , 4 , 8 , 1 , 3 , 7 ],
        [ 8 , 7 , 3 , 5 , 1 , 2 , 9 , 6 , 4 ]
    ]
];

function createTemplate(){
    let c=[],b=[];
    for(let i=0;i<9;i++){
        b=[]
        for(let j=0;j<9;j++){
            b.push(0);
        }
        c.push(b);
    }
    return c;
}


document.getElementById('submitAnswer').addEventListener('click',submitAnswer)

function submitAnswer(){
    console.log("Checking Answer",document.getElementById('createSudoku').style.display );
    let g = challenge;
    if(created){
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                cid='c'+i+j;
                if(document.getElementById(cid).value !=''){
                    solutions[g][i][j] = +document.getElementById(cid).value;
                }
            }
        }
        console.log(...solutions[g]);
    }
    else{
        console.log('Checking Challege');
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                cid='c'+i+j;
                if(challenges[g][i][j]==0){
                    if(document.getElementById(cid).value != solutions[g][i][j]){
                        document.getElementById(cid).value = solutions[g][i][j];
                        document.getElementById(cid).style.color = 'red';
                    }
                    else
                        document.getElementById(cid).style.color = 'green';

                }                
            }
        }
    }
}

function reColor(){
    let id;
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            id='c'+i+j;

            if((i+j)%2==0)
                document.getElementById(id).style.backgroundColor = 'lightgray';
            else
                document.getElementById(id).style.backgroundColor = 'white';


            document.getElementById(id).addEventListener('keyup', function (e){
                e.preventDefault();
                if(!(e.key >0 && e.key<10)){
                    this.value = '';
                }
                else{
                    this.value = e.key;
            
                }
            });
        }
    }
}

function onReady(){
    let bid, id;
    document.getElementById('submitAnswer').style.display = 'none';
    document.getElementById('get-answer').style.display = 'none';
    reColor();
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            id='c'+i+j;

            document.getElementById(id).addEventListener('focus', function (){
                reColor();
                for(k=0;k<9;k++){
                    kid = 'c' + i + k;
                    mid = 'c' + k + j;
                    document.getElementById(kid).style.backgroundColor = '#00FF0080'
                    document.getElementById(mid).style.backgroundColor = '#00FF0080';

                }

            });
            document.getElementById(id).addEventListener('blur', reColor);

        }
    }

    for(let i=3;i<9;i+=3){
        for(let j=0;j<9;j++){
            bid='c'+i+j;
            document.getElementById(bid).style.borderTop = '1px solid black';

        }
    }
    for(let i=3;i<9;i+=3){
        for(let j=0;j<9;j++){
            bid='c'+j+i;
            document.getElementById(bid).style.borderLeft = '1px solid black';

        }
    }

    // grid_naming
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            document.getElementById('c'+i+j).setAttribute('gridId', 'grid-1');
        }
        for(j=3;j<6;j++){
            document.getElementById('c'+i+j).setAttribute('gridId', 'grid-2');
        }
        for(j=6;j<9;j++){
            document.getElementById('c'+i+j).setAttribute('gridId', 'grid-3');
        }
    }
    for(i=3;i<6;i++){
        for(j=0;j<3;j++){
            document.getElementById('c'+i+j).setAttribute('gridId', 'grid-4');
        }
        for(j=3;j<6;j++){
            document.getElementById('c'+i+j).setAttribute('gridId', 'grid-5');
        }
        for(j=6;j<9;j++){
            document.getElementById('c'+i+j).setAttribute('gridId', 'grid-6');
        }
    }
    for(i=6;i<9;i++){
        for(j=0;j<3;j++){
            document.getElementById('c'+i+j).setAttribute('gridId', 'grid-7');
        }
        for(j=3;j<6;j++){
            document.getElementById('c'+i+j).setAttribute('gridId', 'grid-8');
        }
        for(j=6;j<9;j++){
            document.getElementById('c'+i+j).setAttribute('gridId', 'grid-9');
        }
    }

        // console.log(document.querySelectorAll("input[gridid= 'grid-3']"));
        // console.log(document.getElementById('c00').getAttribute('gridid'))

}

function clearSudoku(){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            cid='c'+i+j;
            document.getElementById(cid).value = '';
            document.getElementById(cid).style.color = 'black';
            document.getElementById(cid).disabled = false;


        }
    }
}

// Start Game
function startGame(){
    let challenge1;
    challenge = parseInt(document.getElementById('challenges').value.split('challenge')[1]) - 1;
    if(challenge < challenges.length){
        document.getElementById('submitAnswer').style.display = 'inline-block';
        document.getElementById('get-answer').style.display = 'inline-block';
        document.getElementById('createSudoku').style.display = 'none';
        challenge1 = challenges[challenge];
        let cid;
        clearSudoku();
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                cid = 'c'+i+j;
                if(challenge1[i][j]!=0){
                    document.getElementById(cid).value = challenge1[i][j];
                    document.getElementById(cid).style.color = 'gray';
                    document.getElementById(cid).disabled = true;
                }
            }
        }
    }
    else
    clearSudoku();
}
document.getElementById('startGame').addEventListener('click',startGame);

// 

document.getElementById('createSudoku').addEventListener('click',function (){
    let template = createTemplate(),cid;
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            cid='c'+i+j;
            if(document.getElementById(cid).value !=''){
                template[i][j] = +document.getElementById(cid).value;
            }
            else{
                template[i][j] = 0;
            }
        }
    }
    for(var i=0;i<9;i++)
        console.log('[', ...template[i].join(',') , ']');
    console.log('-----------------------');
    challenges.push(template);
    solutions.push(template);
    challenge= challenges.length -1;
    created=1;
    let c = 'challenge'+(challenge + 1);
    console.log(document.getElementById(c),c);
    document.getElementById(c).selected = true;
    document.getElementById('startGame').click();
});





document.getElementById('get-answer').addEventListener('click',function (){
    console.log(challenge);
    if(challenge < challenges.length && challenge>-1){
        let answer = solutions[challenge],v;
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                cid = 'c'+i+j;
                v=document.getElementById(cid).value ;
                if(v==''){
                    document.getElementById(cid).value = answer[i][j];
                    document.getElementById(cid).disabled = true;
                    document.getElementById(cid).style.color = 'green';
                }
                else{
                    if(v!=answer[i][j]){
                        document.getElementById(cid).style.color = 'red';
                        document.getElementById(cid).value = answer[i][j];
                    }
                }
            }
        }
    }
    else
    clearSudoku();
});