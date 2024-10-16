document.getElementById('ready').addEventListener('click',function (){
    document.querySelector('.login').style.display = 'none';
});
document.getElementById('clsBtn').addEventListener('click',function (){
    document.querySelector('.logout').style.display = 'none';
});

let questions = [
    'What is the Capital of India?',
    'What is the Capital of Telangana?',
    'What is the name of the Hero in the movie Bahubali?',
    'What comes after number 12',
    'What comes after number 6',
    'What is the name of the Hero in the movie Chandramukhi?',
    'First planet in the solar system is our solar system is Mercury.<br>True or False'

]

let answers = [
    'Delhi',
    'Hyderabad',
    'Prabhas',
    '13',
    '7',
    'Rajinikanth',
    'True'
]
let options =[
    ['Mumbai','Kolkata','Bangalore'],
    ['Warangal','Karimnagar','Khammam'],
    ['Rana','Satya raj','Sandeep Kushan'],
    ['11','16','21'],
    ['5','8','10'],
    ['Rana','Satya raj','Sandeep Kushan'],
    ['False']
]

function randomize(q,arr1,answ){
    let index = [0,1,2,3,4,5].splice(0,arr1.length + 1);
    let value = [0,1,2,3,4,5].splice(0,arr1.length + 1);

    let ans = Math.trunc(Math.random()*(arr1.length+1));
    value[ans] = answ;
    index.splice(ans,1);
    while(index.length != 0 ){
        let op = Math.trunc(Math.random()*index.length);
        value[index.splice(op,1)] = arr1.pop();
    }
    return [q,value,ans];
}

let qp=[];

while(questions.length != 0){
    let i=Math.trunc(Math.random()*questions.length);
    let [a,b,c] = [questions.splice(i,1), options.splice(i,1)[0] ,answers.splice(i,1)[0]];
    qp.push(randomize(a,b,c));
}

function closeMsg(){
    document.querySelector('.logout').style.display = 'block';
    let clsmsg = `Thank you for taking the test. <br><br>Your Score: ${Math.trunc((score*100)/answered)}%`
    document.getElementById('clsMsg').innerHTML = clsmsg;


}

// setting the questions

let examQuestions = [];
let optionBtns ='';
let questionNo = 0;
let score = 0;
let answered = 0;

for(let i=0;i<qp.length;i++){
    optionBtns='';
    let q= document.createElement('div')
    for(let j=0;j<qp[i][1].length;j++){
        if(j!=qp[i][2])
            optionBtns+=` <button class="answer wrong-answer" >${qp[i][1][j]}</button>`;
        else
            optionBtns+=` <button class="answer right-answer" >${qp[i][1][j]}</button>`;

    }
    q.classList.add('questionBody');
    q.innerHTML = 
    `
    <div class="left">
        <button id="prev">  < </button>
    </div>
    <div class="question">Q${i+1}. ${qp[i][0]}</div>
    <div class="optionsPart">
        
        <div class="options">
            ${optionBtns}
        </div>
    </div>
    <div class="right">
        <button id="next"> > </button>
    </div>
    <div class="msg"> <p id="msg"></p> </div>

    `;
    // setting attributes
    q.setAttribute('id',`Q${i}`);
    // answer click
    q.querySelectorAll('.wrong-answer').forEach((n)=>{
        n.addEventListener('click',function(e){
            e.target.classList.add('wrong-answer-yes');
            q.querySelector('.right-answer').classList.add('right-answer-yes');
            q.querySelectorAll('.answer').forEach((m)=>{
                m.setAttribute('disabled',true);
            });
            q.querySelector('#msg').textContent = 'Wrong Answer';
            q.querySelector('#msg').style.color = 'Red';
            answered++;
            if(answered == qp.length){
                closeMsg();
            }
            
        });
    });
    q.querySelector('.right-answer').addEventListener('click',function(){
        this.classList.add('right-answer-yes');
        this.setAttribute('disabled',true);
        q.querySelectorAll('.wrong-answer').forEach((m)=>{
            m.setAttribute('disabled',true);
        });
        score++;
        answered++;
        if(answered == qp.length){
            closeMsg();
        }
        q.querySelector('#msg').textContent = 'Correct Answer';
        q.querySelector('#msg').style.color = 'Green';
        document.getElementById('score').textContent = score;
    })

    // Next and previous Buttons
    q.querySelector('#prev').addEventListener('click',function () {
        document.querySelector(`#Q${i}`).style.display = 'none';
        document.querySelector(`#Q${i-1}`).style.display = 'block';
    });
    q.querySelector('#next').addEventListener('click',function(){
        document.querySelector(`#Q${i}`).style.display = 'none';
        document.querySelector(`#Q${i+1}`).style.display = 'block';

    });
    if(i==0){
        q.querySelector('#prev').setAttribute('disabled',true);
    }
    if(i==qp.length - 1){
        q.querySelector('#next').setAttribute('disabled',true);

    }
    q.style.display = 'none';
    examQuestions.push(q);
    document.querySelector('.body').appendChild(q);
}
document.querySelector('#Q0').style.display = 'block';
