/********w************

    Do not alter this comment block. 
    Only fill out the information below.

    Competency 14 
    Name: Navjot Kaur
    Date: March 26, 2023
    Description: In this created <p> tag, Inserted <h2> element before <p> tag 
        and footer is removed

*********************/

document.addEventListener("DOMContentLoaded", load);

/*	
    Load function
    Create, insert, and delete elements
*/

function load() {
    //create a new <p> tag//
    let newElement = document.createElement("p");
    newElement.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    let results = document.getElementById("results");
    results.appendChild(newElement);
    
    //Inserting <h2> element before the <p> element //
    let secondInsert = document.createElement("h2");
    secondInsert.innerHTML = 'Download the necessary starter files from Learn.';

    let inserth2 = document.querySelector("p");
    results.insertBefore(secondInsert, inserth2);

    //document.getElementById(1).innerHTML="";
    let ftr=document.getElementsByTagName("footer")[0];
    ftr.remove();
}