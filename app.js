// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// check I select the right elements
// console.log(btns);

// Here we run a foreach method to loop over each button and we will pass a callback function
btns.forEach(function (btn) {
  // check each btn in the console
  // console.log(btn);

  // add an event listener to each button and pass the callback function
  btn.addEventListener("click", function (e) {
    // check that my event listener is working and check the classList of buttons
    // console.log(e.currentTarget.classList);

    // assign this to a value called styles, eachtime I click on the button I save the classes in the variable
    const styles = e.currentTarget.classList;

    // if statement to check the classLists from the styles variable and we check if the classList contains decrease/increase/reset
    // depending on the class list, we want the value to increase/decrease/reset
    if(styles.contains("decrease")){
      count--;
    } else if(styles.contains("increase")){
      count++;
    } else{
      count = 0;
    }
    // change the color of the value depending on the count
    if(count > 0){
      value.style.color = "green";
    }
    if(count < 0){
      value.style.color = "red";
    }
    if(count === 0){
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
