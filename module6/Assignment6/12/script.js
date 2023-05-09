/********w************

    Do not alter this comment block. 
    Only fill out the information below.
    
    Competency 12 Javascript Syntax
    Name: Navjot Kaur 
    Date: March 26, 2023
    Description: In this file, array with quotes created and <p> is used.

*********************/

/*Array with 5 quotes is created*/ 
const quotes = ["Silence is the key to succees"
                , "Happiness is an inside job"
                , "life is short and world is wide"
                , "Family gives you the roots to stand tall and strong"
                , "A sweet friendship refreshes the soul"];
console.log(quotes)

function ptags(val) {
    return `<p>${val}</p>`;
} 

bdy=document.getElementsByTagName("body"); // array returned, like quotes
//console.log(bdy);
for (let i=0; i<quotes.length; i++) {
	bdy[0].innerHTML += ptags(quotes[i]);    
}


