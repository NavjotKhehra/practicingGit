/********w************

	Do not alter this comment block. 
	Only fill out the information below.

	Competency 13 Event Listeners
	Name: Navjot Kaur
	Date: March 26, 2023
	Description: In this file, .addEventListener is used to load(), button is added, 
		setting is done to display input

*********************/

//	Task 1: Event listener to trigger the load function upon DOM loading
document.addEventListener("DOMContentLoaded", load);

/*	
	Task 2
	Load function
	Event listeners to setup the page will go here
*/
function load() {
	let change= document.getElementsByTagName("button");
	change[0].addEventListener("click", clickMe);
}

/*
	Task 3
	Click Function
	This button will display the input if input is not displayed
*/
function clickMe() {
	let text = document.getElementById("popup");
	if (text.style.display == "none") {
		text.style.display = "block";
	} 
	else {
		text.style.display = "none";
	}
}

