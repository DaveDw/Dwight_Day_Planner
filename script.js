var today = moment();

//9am
var hour1 = document.querySelector("#hour1");
var save1 = document.querySelector("#save-btn1");
//10am
var hour2 = document.querySelector("#hour2");
var save2 = document.querySelector("#save-btn2");
//11am
var hour3 = document.querySelector("#hour3");
var save3 = document.querySelector("#save-btn3");
//12pm
var hour4 = document.querySelector("#hour4");
var save4 = document.querySelector("#save-btn4");
//1pm
var hour5 = document.querySelector("#hour5");
var save5 = document.querySelector("#save-btn5");
//2pm
var hour6 = document.querySelector("#hour6");
var save6 = document.querySelector("#save-btn6");
//3pm
var hour7 = document.querySelector("#hour7");
var save7 = document.querySelector("#save-btn7");
//4pm
var hour8 = document.querySelector("#hour8");
var save8 = document.querySelector("#save-btn8");
//5pm
var hour9 = document.querySelector("#hour9");
var save9 = document.querySelector("#save-btn9");

var plans = ["", "", "", "", "", "", "", "", ""];

$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

function colorPlans() {
    var today = new Date();
    // current = today.getHours() - 9;
    current = 5;

    //9am
    if (current < 0){
        hour1.classList.add("future");
    }else if (current == 0){
        hour1.classList.add("present");
    }else{
        hour1.classList.add("past");
    }

    //10am
    if (current < 1){
        hour2.classList.add("future");
    }else if (current == 1){
        hour2.classList.add("present");
    }else{
        hour2.classList.add("past");
    }

    //11am
    if (current < 2){
        hour3.classList.add("future");
    }else if (current == 2){
        hour3.classList.add("present");
    }else{
        hour3.classList.add("past");
    }

    //12pm
    if (current < 3){
        hour4.classList.add("future");
    }else if (current == 3){
        hour4.classList.add("present");
    }else{
        hour4.classList.add("past");
    }

    //1pm
    if (current < 4){
        hour5.classList.add("future");
    }else if (current == 4){
        hour5.classList.add("present");
    }else{
        hour5.classList.add("past");
    }

    //2pm
    if (current < 5){
        hour6.classList.add("future");
    }else if (current == 5){
        hour6.classList.add("present");
    }else{
        hour6.classList.add("past");
    }

    //3pm
    if (current < 6){
        hour7.classList.add("future");
    }else if (current == 6){
        hour7.classList.add("present");
    }else{
        hour7.classList.add("past");
    }

    //4pm
    if (current < 7){
        hour8.classList.add("future");
    }else if (current == 7){
        hour8.classList.add("present");
    }else{
        hour8.classList.add("past");
    }

    //5pm
    if (current < 8){
        hour9.classList.add("future");
    }else if (current == 8){
        hour9.classList.add("present");
    }else{
        hour9.classList.add("past");
    }

    console.log("painted");
}

function renderPlans() {
    //9am
    hour1.value = plans[0];
    //10am
    hour2.value = plans[1];
    //11am
    hour3.value = plans[2];
    //12pm
    hour4.value = plans[3];
    //1pm
    hour5.value = plans[4];
    //2pm
    hour6.value = plans[5];
    //3pm
    hour7.value = plans[6];
    //4pm
    hour8.value = plans[7];
    //5pm
    hour9.value = plans[8];

    console.log("rendered");
}

function init() { // make the page remember
    var storedPlans = JSON.parse(localStorage.getItem("plans"));

    if (storedPlans != null) {
        plans = storedPlans;

    } else {
        storedPlans = plans;
    }

    colorPlans();
    renderPlans();
}

function storePlans() {
    var today = new Date();
    // current = today.getHours() - 9;
    current = 5;

    //9am
    if (current <= 0) {
        console.log(current);
        plans[0] = hour1.value;
    }
    //10am
    if (current <= 1) {
        console.log(current);
        plans[1] = hour2.value;
    }
    //11am
    if (current <= 2) {
        console.log(current);
        plans[2] = hour3.value;
    }
    //12pm
    if (current <= 3) {
        console.log(current);
        plans[3] = hour4.value;
    }
    //1pm
    if (current <= 4) {
        console.log(current);
        plans[4] = hour5.value;
    }
    //2pm
    if (current <= 5) {
        console.log(current);
        plans[5] = hour6.value;
    }
    //3pm
    if (current <= 6) {
        console.log(current);
        plans[6] = hour7.value;
    }
    //4pm
    if (current <= 7) {
        console.log(current);
        plans[7] = hour8.value;
    }
    //5pm
    if (current <= 8) {
        console.log(current);
        plans[8] = hour9.value;
    }

    localStorage.setItem("plans", JSON.stringify(plans));
    console.log("updated");
}

init();
//repeat for all
save1.addEventListener("click", storePlans);
save2.addEventListener("click", storePlans);
save3.addEventListener("click", storePlans);
save4.addEventListener("click", storePlans);
save5.addEventListener("click", storePlans);
save6.addEventListener("click", storePlans);
save7.addEventListener("click", storePlans);
save8.addEventListener("click", storePlans);
save9.addEventListener("click", storePlans);