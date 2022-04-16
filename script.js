var hour1 = document.querySelector("#hour1");
var save1 = document.querySelector("#save-btn1");
var plans = ["", "", "", "", "", "", "", ""];

function colorPlans() {

}

function renderPlans() {
    hour1.value = plans[0];
    
}

function init() { // make the page remember
    var storedPlans = JSON.parse(localStorage.getItem("plans"));

    if (storedPlans != null) {
        plans = storedPlans;

    }else{
        storedPlans = plans;
    }

    colorPlans();
    renderPlans();
}

function storePlans() {
    plans[0] = hour1.value;
    localStorage.setItem("plans", JSON.stringify(plans));
    console.log ("got here");
}

init();
save1.addEventListener("click", storePlans);