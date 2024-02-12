function handleCost(event){
if(event.key==='Enter')
calculateTotal();

}

function calculateTotal(){
  let inputElement =  document.querySelector('.js-cost');
  let cost =Number(inputElement.value);

  if(cost<40){
    cost=cost+10;
  }
  document.querySelector('.js-total-cost').innerHTML=`$${cost}`

}

function subscribe(){
  const buttonElement = document.querySelector('.js');
  if(buttonElement.innerText==='Subscribe'){
    buttonElement.innerHTML='Subscribed';
    buttonElement.classList.add('is-subscribed')
  }
  else{
    buttonElement.innerHTML='Subscribe';
    buttonElement.classList.remove('is-subscribed')
  }

    
}
