document.getElementById('main').addEventListener('keyup',function (){
    let content = document.getElementById('main').value;
    console.log(content.split(''));
    
    while(content.includes('  ')){
        content = content.replace('  ',' ');
        console.log(content);
    }
    content = content.trim();
    console.log(content);
    let words = content.length;
    let chars = content.split(' ').length;
    document.getElementById('character').textContent = chars;
    document.getElementById('words').textContent = words;


});