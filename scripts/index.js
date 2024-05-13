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

    //grab our button of the html page
    let theForm = document.querySelector("#footballForm");

    //when our button is clicked call the function attached and run that girl
    theForm.addEventListener("submit", displayFootballTeam);

}
//function that will run when the button is clicked, details about the team
function displayFootballTeam(event) {

    //keep the form from reloading the page (when a submit is added)
    event.preventDefault()

    //get the drop down from the page to work with it
    let theDropdown = document.querySelector("#footballSelect");

    //get results div from the page to display text
    let resultParagraph = document.querySelector("#results");


    //get the index of the selected option in the dropdown
    let selectedIndex = theDropdown.selectedIndex-1;


    //if the default option was selected then the value will be ""
    //if its an empty string then clear the team info
    //otherwise display the team
    if(theDropdown.value === ""){

        resultParagraph.innerHTML = "";
    } else{
    
    //get the tems out of the teams array based on the index in the dropdown
    let selectedTeam = teams[selectedIndex];

    //put the info of the selected team in 
    resultParagraph.innerHTML = ` You selected the ${selectedTeam.name} (${selectedTeam.code}) who plays in ${selectedTeam.plays}`
    }



}

//where we are actually running a function to get the page to work
function initDropdown() {

    //get the dropdown from the html document and assign it to the variable
    let theDropdown = document.querySelector("#footballSelect");

    // create an HTML optiion element to serve as the deafult optopm for our team select
    let defaultOption = document.createElement("option");

    //set the text content of the option to be "selected a team"
    defaultOption.textContent = "Select a Team";

    // set the value of the option to an empty string("")
     defaultOption.value ="";

     //add this default option to the select

     theDropdown.appendChild(defaultOption);



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