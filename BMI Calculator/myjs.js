function compute(){
    let h = document.getElementById('height').value;
    h= h/100;
    let w = document.getElementById('weight').value;
    let bmi = w/(h*h);
    bmi = Math.round(bmi * 100) / 100
    document.getElementById('result').style.display = 'block';
    document.getElementById('ans').innerHTML= bmi;
    let m=0;
    if(bmi==''){
        m=-1
    }
    else{

    if(bmi < 18.5){
        m= bmi*(300/18);
    }
    else{
        if(bmi < 25){
            m=300 + (bmi-18)*(192/6.4);
        }
        else{
            if(bmi < 30){
                m=300+192+ (bmi-25)*(150/5);
            }
            else{
                if(bmi < 35){
                    m= 300+192+ 150 + (bmi-30)*(150/5);
                }
                else{
                    if(bmi<40){
                        m= 300+192+ 150 +150+ (bmi-40)*(150/5);
                    }
                    else
                    m=1200;
                }
            }
        }
    }
    }
    document.getElementById('bmi-color').style.display = 'block';
    document.getElementById('scale').style.marginLeft = m + 'px';
}

document.getElementById('feet').addEventListener('keyup',() => {
    document.getElementById('height').value = 30.48 * document.getElementById('feet').value;
});
document.getElementById('height').addEventListener('keyup',() => {
    document.getElementById('feet').value = Math.round(0.0328084 * document.getElementById('height').value *100)/100;
});