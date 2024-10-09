
let charectors = [
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'abcdefghijklmnopqrstuvwxyz',
    '1234567890',
    '`~!@#$%^&*()-_=+[{}]\|,<.>/?'
]


document.getElementById('generate').addEventListener('click',function (){
    let v = document.getElementById('num').value;
    let password = '';
    if(isNaN(v) || v==0){
        document.getElementById('errMsg').textContent = 'Please Enter a Valid number';
        return
    }
    document.getElementById('errMsg').textContent = '';

    v=parseInt(v);
    for(let i=0;i<v;i++){
        i1= Math.trunc(Math.random()*4);
        i2= Math.trunc(Math.random()*(charectors[i1].length));
        password += charectors[i1][i2];

    }
    document.getElementById('generatedPassword').textContent = password;
    document.getElementById('copyPass').style.display = 'inline-block';

});

document.getElementById('copyPass').addEventListener('click' , function(){
    navigator.clipboard.writeText(document.getElementById('generatedPassword').textContent);

});