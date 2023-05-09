/********w************

    Do not alter this comment block. 
    Only fill out the information below.

    Competency 17
    Name: Navjot Kaur
    Date: April 21, 2023
    Description: In this images are loads in JSON and with Javascript 
        loads in HTML

*********************/

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);

/*
    createZooland function
    This function will retrieve the data for the animal you created specifically
    You will then add the code required to meet the specifications
*/
function createZooland(zoolandData) {
    console.log(zoolandData);
    let content = document.querySelector("#content");

    zoolandData.forEach(animal=> {
        let name = document.createElement("h2");
        name.textContent=animal.common_name;
        content.appendChild(name);

        let scientific_name = document.createElement("h3");
        scientific_name.textContent=animal.scientificName;
        content.appendChild(scientific_name);

        let description = document.createElement("blockquote");
        description.textContent=animal.descriptions;
        content.appendChild(description);

        const images = animal.images.image;
        images.forEach(image=> {
            const img = document.createElement("img");
            img.src=image.url;
            content.appendChild(img);
            }
        ); 
    });
}
    



















/*
    load function
        loading the json file - run when the page loads
 */
function load() {
    fetch('zooland.json')
        .then(result => {
            return result.json()
        })
        .then(data => {
            createZooland(data);
        });
}



  
  






