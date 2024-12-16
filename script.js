document.addEventListener("DOMContentLoaded", () => { 
    const numberInput = document.getElementById("numberInput"); 
    const sendButton = document.getElementById("sendButton"); 
    const displayNumber = document.getElementById("displayNumber"); 
    const decrementButton = document.getElementById("decrement"); 
    const incrementButton = document.getElementById("increment"); 
    const colorBox = document.getElementById("colorBox"); 
    const colorPicker = document.getElementById("colorPicker"); 
   
    incrementButton.addEventListener("click", () => { 
      let currentValue = parseInt(displayNumber.textContent); 
      displayNumber.textContent = currentValue + 1; 
    }); 
   
    decrementButton.addEventListener("click", () => { 
      let currentValue = parseInt(displayNumber.textContent); 
      displayNumber.textContent = currentValue - 1; 
    }); 
   
    colorBox.addEventListener("click", () => { 
      colorPicker.click(); 
    }); 
   
    colorPicker.addEventListener("input", (event) => { 
      const selectedColor = event.target.value; 
      colorBox.style.backgroundColor = selectedColor; 
      displayNumber.style.color = selectedColor; 
    }); 
   
    sendButton.addEventListener("click", () => { 
      const inputValue = numberInput.value;  
      if (inputValue !== "") {  
        displayNumber.textContent = inputValue; //    
      } else { 
        alert("Please enter a number!"); 
      } 
    }); 
  });