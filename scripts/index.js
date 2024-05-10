"use strict"
console.log("Hello Human")

let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

//this is our windown.onload function that runs code once the page is loaded
window.onload = function () {

    initDropdown();

}

//where we are actually running a function to get the page to work
function initDropdown() {

    //get the dropdown from the html document and assign it to the variable
    let theDropdown = document.querySelector("#footballSelect")

    //get the total number of teams we have for use in the loop
    let numberOfTeams = teams.length

    //creating a loop over the teams, its like we have a hold of the list in the array
    for (let i = 0; i < numberOfTeams; i++) {

        //lets create a new option 
        let newOption = document.createElement("option");

        //set the textContext for our new option so it shows up on the pg
        newOption.textContent = teams[i].name

        //set the value for the option
        newOption.value = teams[i].code

        //add option to the dropdown menu
        theDropdown.appendChild(newOption);
    }

}