var audio = new Audio('ringtone.mp3');


document.getElementById('stopAlarm').addEventListener('click', function (){
    audio.pause();
    document.getElementById('stopAlarm').style.display = 'none';
    document.getElementById('startTimer').style.display = 'inline-block';

})


document.getElementById('startTimer').addEventListener('click', function (){
    document.getElementById('msg').textContent = '';
    mins = parseInt(document.getElementById('mins').value) || 0;
    sec =  parseInt(document.getElementById('sec').value)|| 0;
    mins = isFinite(mins) ? parseInt(mins): 'q'; 
    while(sec >=60){
        mins++;
        sec-=60;
    }
    document.getElementById('mins').disabled = true;
    document.getElementById('sec').disabled = true;
    

    let timer=setInterval(function (){
        if(mins == 0 && sec == 0){
            clearInterval(timer);
            
            audio.play();
            document.getElementById('stopAlarm').style.display = true;
            document.getElementById('mins').disabled = false;
            document.getElementById('sec').disabled = false;
            document.getElementById('startTimer').style.display = 'none'
            document.getElementById('stopAlarm').style.display = 'inline-block'

            document.getElementById('msg').textContent = 'Time Up!';
        }    
        document.getElementById('mins').value = (mins+'').padStart(2,'0');
        document.getElementById('sec').value = (sec+'').padStart(2,'0');
        sec--;
        if(sec == -1){
            sec=59;
            mins--;
        }
        console.log(mins,sec,mins == 0 && sec == -1);    
            
    },1000);
    console.log('looped');
});

