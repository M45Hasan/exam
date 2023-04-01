let age = document.querySelector("#age");
let submit = document.querySelector("#button");

let result = document.querySelector("h2");
let salary = document.querySelector("#salary");

 submit.addEventListener("click", function () {
  

  if (age.value >= "18") {
    
        result.innerHTML = "Adult";

    
    
  } else {
    result.innerHTML = "Pakna";
  }
});


