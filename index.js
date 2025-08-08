//Rating Component Project
// This file contains the interactivity for the interactive rating component//


const submitBtn = document.querySelector("#submit");
const numbers = document.querySelectorAll(".num");

const thankYouPage = document.querySelector(".thank-you");
const wrapper = document.getElementById("wrapper");
const p = document.querySelector(".selected");

thankYouPage.style.display = "none"; // 

let selectedValue = null;


numbers.forEach((num, index) => {
 
  num.addEventListener("mouseover", () => {
    num.classList.add("num-color");
  });
  num.addEventListener("mouseout", () => {
    num.classList.remove("num-color");
  });

 
  num.addEventListener("click", () => {
    selectedValue = index + 1;

  
    numbers.forEach(n => n.classList.remove("selected-num"));

    // Highlight clicked number
    num.classList.add("selected-num");
  });
});

// Submit button
submitBtn.addEventListener("click", () => {
  if (selectedValue === null) {
    alert("Please select a number before submitting.");
    return;
  }

  wrapper.style.display = "none";
  thankYouPage.style.display = "block";
  p.textContent = `You selected ${selectedValue} out of 5`;
});
