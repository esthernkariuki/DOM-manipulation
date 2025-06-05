// Change document background color to silver
document.body.style.backgroundColor='silver';
document.body.style.margin='0';

const subtitle = document.getElementById('subtitle');
const categoryContainer = document.querySelectorAll('.fruitCategories');
const fruits = document.getElementById('fruList');
const vegetables = document.getElementById('vegList');
const h3Tags = document.querySelectorAll('h3')



// Change the font color for h1 title tag to
// green

let title=document.getElementById('title');
title.style.color = "green";
title.style.textAlign = "center";
title.style.letterSpacing = "2px";
title.style.fontSize = "3em";
title.textContent = title.textContent.toUpperCase();




// Change the font case for h3 title tags to
// uppercase
let fruitsh3=document.getElementsByTagName("h3")
        for (let i = 0; i < fruitsh3.length; i++) {
            fruitsh3[i].style.textTransform="uppercase";
            fruitsh3[i].style.color="green";
            fruitsh3[i].style.padding="20px";
            fruitsh3[i].style.backgroundColor="papayawhip";
            fruitsh3[i].style.margin="35px auto"; 
            fruitsh3[i].style.textAlign="center"; 
         }

title.style.fontSize = '3em';
subtitle.style.textAlign = 'center';
subtitle.style.fontSize = '2.0em';
subtitle.textContent = subtitle.textContent.toLowerCase();

//styling fruits and vegetables


const tomato = document.getElementById('tomato');
     tomato.style.width = '15em';
     tomato.style.height = '15em';
     tomato.style.borderRadius = '1em';
     tomato.style.border = '2px solid white';
   

const kales = document.getElementById('kales');
     kales.style.width = '15em';
     kales.style.height = '15em';
     kales.style.borderRadius = '1em';
     kales.style.border = '2px solid white';

const onion = document.getElementById('onion');
     onion.style.width = '15em';
     onion.style.height = '15em';
     onion.style.borderRadius = '1em';
     onion.style.border = '2px solid white';

const melon = document.getElementById('melon');
     melon.style.width = '15em';
     melon.style.height = '15em';
     melon.style.borderRadius = '1em';
     melon.style.border = '2px solid white';

const mango = document.getElementById('mango');
     mango.style.width = '15em';
     mango.style.height = '15em';
     mango.style.borderRadius = '1em';
     mango.style.border = '2px solid white';

const banana = document.getElementById('banana');
     banana.style.width = '15em';
     banana.style.height = '15em';
     banana.style.borderRadius = '1em';
     banana.style.border = '2px solid white';


// Add one more fruit to the fruits list: pineapples

const newFruitItem = document.createElement('li');

const pineappleFruit = document.createElement('p');
pineappleFruit.textContent = 'Pineapples';

const pineappleContainer = document.createElement('div');
pineappleContainer.className = 'categoryContainer';

   pineappleContainer.style.borderRadius = '0.5em';
   pineappleContainer.style.padding = '2.5em';
   pineappleContainer.style.height = '25em';
   pineappleContainer.style.color = 'black'
   pineappleContainer.style.marginTop='-2.9em';
   pineappleContainer.style.marginLeft='-2em'

 

const pineappleImg = new Image();
pineappleImg.src = 'https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg';
pineappleImg.style.width = '15em';
pineappleImg.style.height = '15em';
pineappleImg.style.borderRadius = '1em';



const pineapplePrice = document.createElement('div');
pineapplePrice.className = 'price';
pineapplePrice.innerHTML = '<p>Price</p><p>$2</p>';

const pineappleQty = document.createElement('div');
pineappleQty.className = 'price';
pineappleQty.innerHTML = '<p>Quantity</p><p>10kgs</p>';
pineappleQty.style.display = 'flex'
pineappleQty.style.justifyContent= 'space-between'

pineappleContainer.append( pineappleFruit,pineappleImg, pineapplePrice, pineappleQty);
newFruitItem.appendChild(pineappleContainer);
fruits.appendChild(newFruitItem);


// Add one more fruit to the vegetables list: carrots

const newVegItem = document.createElement('li');

const carrotFruit = document.createElement('p');
carrotFruit.textContent = 'Carrots';

const carrotContainer = document.createElement('div');
carrotContainer.className = 'categoryContainer';

   carrotContainer.style.borderRadius = '0.5em';
   carrotContainer.style.padding = '3em';
   carrotContainer.style.height = '25em';
   carrotContainer.style.color = 'black';
   carrotContainer.style.marginTop='-2.9em';


const carrotImg = new Image();
carrotImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpvXV8yAk_S1ZAWaquCgj-zx-U9wLeFvDDg&s';
carrotImg.style.width = '15em';
carrotImg.style.height = '15em';
carrotImg.style.borderRadius = '1em';
carrotImg.style.marginLeft='-2em'

const carrotPrice = document.createElement('div');
carrotPrice.className = 'price';
carrotPrice.innerHTML = '<p>Price</p><p>$3</p>';
carrotPrice.style.display = 'flex'
carrotPrice.style.justifyContent= 'space-between'




const carrotQty = document.createElement('div');
carrotQty.className = 'price';
carrotQty.innerHTML = '<p>Quantity</p><p>16kgs</p>';
carrotQty.style.display = 'flex'

carrotQty.style.justifyContent= 'space-between'


carrotContainer.append(carrotFruit, carrotImg, carrotPrice, carrotQty);
newVegItem.appendChild(carrotContainer);
vegetables.appendChild(newVegItem)

//button to add to cart
const clickButton=document.getElementById('myBtn')
clickButton.addEventListener('click', ()=>{
    alert('Added to cart');
});
clickButton.style.backgroundColor='green'
clickButton.style.float='left'
clickButton.style.height='3em'
clickButton.style.borderRadius='3em'
clickButton.style.marginLeft='58em'
clickButton.style.marginTop='-2em'
clickButton.style.color='white'
clickButton.style.width='8%'

const clickbtn=document.getElementById('btn')
clickbtn.addEventListener('click', ()=>{
    alert('Added to cart');
});
clickbtn.style.backgroundColor='green'
clickbtn.style.float='left'
clickbtn.style.height='3em'
clickbtn.style.borderRadius='3em'
clickbtn.style.marginLeft='58em'
clickbtn.style.marginTop='-2em'
clickbtn.style.color='white'
clickbtn.style.width='8%'


































