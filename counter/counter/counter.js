let counterElement = document.getElementById('counterValue')

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCountervalue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCountervalue;
    
   if (updatedCountervalue > 0) {
       counterElement.style.color = 'green'
   }
   else if (updatedCountervalue < 0) {
       counterElement.style.color = 'red'
   }
   else {
       counterElement.style.color = 'black'
   }

}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCountervalue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCountervalue;
    console.log(updatedCountervalue);
     if (updatedCountervalue > 0) {
       counterElement.style.color = 'green'
   }
   else if (updatedCountervalue < 0) {
       counterElement.style.color = 'red'
   }
   else {
       counterElement.style.color = 'black'
   }


}

function onReset() {
    let updatedCountervalue = 0;
    counterElement.textContent = updatedCountervalue;
    counterElement.style.color = 'black'

}