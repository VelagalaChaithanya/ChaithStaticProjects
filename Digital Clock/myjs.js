
days=['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
years = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
setInterval(function (){
    d = new Date();
    document.getElementById('hr').textContent = (d.getHours()+'').padStart(2,'0')+' ' ;
    document.getElementById('min').textContent = (d.getMinutes()+'').padStart(2,'0')+' ' ;
    document.getElementById('sec').textContent = (d.getSeconds()+'').padStart(2,'0')+' ' ;
    document.getElementById('day').textContent = days[d.getDay()]+' ' ;
    document.getElementById('date').textContent = d.getDate()+' ' ;
    document.getElementById('mon').textContent = years[d.getMonth()]+' ' ;
    document.getElementById('year').textContent = d.getFullYear()+' ' ;
    let v= -d.getTimezoneOffset();
    document.getElementById('timezone').textContent = 'UTC ' + (v>0 ? '+':'-') + Math.trunc(v/60)+ ':'+ (v%60);
    

},1000);

