let cart = [];

// First three in menu
for(let i=1;i<4;i++){
    document.getElementById(`item${i}`).addEventListener('click',function(){
        content = [];
        document.querySelectorAll(`.item${i}`).forEach((n)=>{                
            content.push(n.textContent);
            console.log(content);
        });
        if(cart.includes(content[0])){
            id = cart.indexOf(content[0]) + 1;
            let update = document.querySelectorAll(`.cart-item${id}`);
            console.log(update);
            
            let quant = parseInt(update[2].textContent)+1;
            update[2].textContent = quant;
            let cost = quant *  parseInt(content[2].split('.')[1]);
            
            update[3].textContent = 'Rs.'+ cost;
        }
        else{
            cart.push(content[0]);
            let d3 = document.createElement('tr');
            d3.innerHTML = `
            <tr>
            <td class="cart-item${cart.length}"> ${cart.length} </td>
            <td class="cart-item${cart.length}">${content[1]}</td>
            <td class="cart-item${cart.length}">1</td>
            <td class="cart-item${cart.length} cost"> ${content[2]} </td>
            <td class="cart-item${cart.length}"> <button id="cart-item${cart.length}"> - </button> </td>
            </tr>
            `;
            d3.getElementById(`cart-item${cart.length}`).addEventListener('click',function (){
                let items = document.querySelectorAll(`.cart-item${cart.length}`);
                console.log(items);
            });
            document.querySelector('.total-bill').before(d3);
        }  
        let bill=0;
            document.querySelectorAll('.cost').forEach((n)=>{
                bill+=parseInt(n.textContent.split('.')[1]);
            });
            document.getElementById('totalCost').textContent='Rs.'+bill.toString().padStart(4,' ');

    });
}


// Add item in menu
document.getElementById('addItem').addEventListener('click',function(){
    let m = document.querySelector('.menu-table').querySelectorAll('tr').length;
    console.log(m);
    m--;
    let d= document.createElement('tr');
    d.innerHTML = `
                    <td class="item${m} ">${m}</td>
                    <td class="item${m} "> <input type='text' id='item-name${m}' placeholder='item name'> </td>
                    <td class="item${m} "> <input type='number' id='item-cost${m}' placeholder='cost'> </td>
                    <td><button id="add-item${m}"> Add </button></td>
                `
    document.querySelector('.addItem-row').before(d);
    // Add details and enter into the menu table
    document.querySelector(`#add-item${m}`).addEventListener('click',function () {
        let [itemName,itemCost] = [document.getElementById(`item-name${m}`).value,document.getElementById(`item-cost${m}`).value];
        console.log(itemName,itemCost);
        document.querySelector('.addItem-row').parentElement.removeChild(d);

        let d2= document.createElement('tr');
        d2.innerHTML = `
                    
                    <td class="item${m}">${m}</td>
                    <td class="item${m}">${itemName}</td>
                    <td class="item${m}">Rs.${itemCost}</td>
                    <td><button id="item${m}"> + </button></td>
        `;
        document.querySelector('.addItem-row').before(d2);

        // Adding to cart from menu
        let content = [];
        document.getElementById(`item${m}`).addEventListener('click',function(){
            content = [];
            document.querySelectorAll(`.item${m}`).forEach((n)=>{                
                content.push(n.textContent);
                console.log(content);
            });
            if(cart.includes(content[0])){
                id = cart.indexOf(content[0]) + 1;
                let update = document.querySelectorAll(`.cart-item${id}`);
                console.log(update);
                
                let quant = parseInt(update[2].textContent)+1;
                update[2].textContent = quant;
                let cost = content[2].split('.')[1]
                update[3].textContent = 'Rs.'+ quant * parseInt(cost);
            }
            else{
                cart.push(content[0]);
                let d3 = document.createElement('tr');
                d3.innerHTML = `
                <tr>
                <td class="cart-item${cart.length}"> ${cart.length} </td>
                <td class="cart-item${cart.length}">${content[1]}</td>
                <td class="cart-item${cart.length}">1</td>
                <td class="cart-item${cart.length} cost"> ${content[2]} </td>
                <td class="cart-item${cart.length}"> <button id="cart-item${cart.length}"> - </button> </td>
                </tr>
                `;

                document.querySelector('.total-bill').before(d3);
            }
            let bill=0;
            document.querySelectorAll('.cost').forEach((n)=>{
                bill+=parseInt(n.textContent.split('.')[1]);
            });
            document.getElementById('totalCost').textContent= 'Rs. '+  bill;
        });
        document.getElementById('addItem').disabled = false
    });
    this.disabled = true;    
});
