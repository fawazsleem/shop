/*input_index*/
const burger_bt = document.getElementById(`burger`);
const donut_bt = document.getElementById(`donut`);
const pizza_bt = document.getElementById(`pizza`);
const total = document.getElementById(`total`);
const book = document.getElementById(`Order`);


/*input_buying*/
const order1 = document.getElementById(`list_item1`);
const order2 = document.getElementById(`list_item2`);
const order3 = document.getElementById(`list_item3`);
const order4 = document.getElementById(`list_item4`);


/*function,output*/
burger_bt.onclick = function(){
    if (order1 != ""){
        order1.textContent = "burger";
    }
    else{
        if (order2 != ""){
            order2.textContent = "burger";
        }
        else{
            if (order3 != ""){
                order3.textContent = "burger";
            }
            else{
                if (order4 != ""){
                    order4.textContent = "burger";
                }
                else{
                    window.prompt("you can't order mor than 4 items.")   
                }
            }
        }
    }
}

donut_bt.onclick = function(){
    order1.textContent = "dount";
    total.textContent = "$7";
}

pizza_bt.onclick = function(){
    order.textContent = "pizza";
    total.textContent = "$8";
}

book.onclick = function(){
    window.prompt(`your order is submited.`);
    order.textContent = ``;
    total.textContent = `$0`;
}
