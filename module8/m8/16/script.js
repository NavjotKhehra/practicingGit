/********w************

    Do not alter this comment block. 
    Only fill out the information below.

    Competency 16
    Name: Navjot Kaur
    Date: April 21, 2023
    Description: In this File is added and elements created, in elements add data 
		come back to API call.

*********************/


/*
    Load function
    Using the fetch API, get your chosen dataset from the Dog API

 */


function load() {
    let dog='terrier';
    
    fetch('https://dog.ceo/api/breed/'+dog+'/list')
        .then(result => {
            return result.json();
        })
        .then(data => {
            fetchDogType(data,dog);
        });
}

/*
    createHTML function
    Using your chosen Dog dataset, create at least 2 HTML elements 
    and add them to the provided HTML
*/
function fetchDogType(data, dog) {
    let typ=data['message'][0];
    fetch('https://dog.ceo/api/breed/'+dog+'/'+typ+'/images')
    .then(result => {
        return result.json();
    })
    .then(data => {
        createHTML(data,dog,typ);
    });
}

function createHTML(data,dog,typ) {
    let img=data['message'][0];
    console.log(img);
}

let h1 = document.createElement("h1");
let h2 = document.createElement("h2");

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);

