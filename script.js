function appendToDisplay(value) {
document.getElementById("display").value += value;
   

}
function clearDisplay() {
   document.getElementById("display").value = "";  
}
function DeleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    
}
function wrapInBrackets() {
    const display = document.getElementById("display");
    const value = display.value;

    // আগের মান ব্র্যাকেটের ভিতরে রেখে নতুনভাবে সেট করলাম
    display.value = "(" + value + ")";
}

function calculateRasult() {
  try {
      let Result = eval(document.getElementById("display").value);
         document.getElementById("display").value = Result;
 
  }
  catch (error) {
     console.log(error);
  }
   

}