//alert("Bye");

/*
var varVariable = "this is a var variable";
let letVariable = "this is a let variable";

console.log(window.varVariable);
console.log(window.letVariable);
*/
/*

for(let i=0;i<10;i++){
	console.log(i); //i is visible thus is logged in the console as 0,1,2,....,9
}
console.log(i); //throws an error as "i is not defined" because i is not visible


let world = "Hello";
let fourteen = 7;
let days=["Monday","Tuesday","Wednesday","Thursday","Friday"];


console.log(world);
console.log(days);    // shows all from array
console.log(days[3]); // Thursday
console.log(days[5]); // undefined


console.log(div);

let blah=document.querySelector("#home");
console.log(blah);
*/
let cont=document.querySelector("body div#container");
cont.setAttribute("class","container");




let world = "<h2>hello</h2>";
let fourteen = 7;

//			0			1		2			3			4
let days=["Monday","Tuesday","Wednesday","Thursday","Friday"];

let section=document.getElementsByTagName("section");
//console.log(section[0].innerHTML);
//section[0].innerHTML = world;

let div=document.getElementById("home");

console.log(div);

console.log(days.length);

/*
for(let i=0; i<days.length; i++) {
	div.innerHTML += ptags(days[i]); // += is appending to existing HTML
	
	//div.innerHTML += "<p>"+days[i]+"</p>";
}

function ptags(day) {
	return `<p>${day}</p>`;
}


let para=document.getElementsByTagName("p");
for(let i=0; i<para.length; i++) {
	para[i].setAttribute("style","background-color: yellow"); // += is appending to existing HTML
}


function hi() {
	console.log("Hello Dave!!!");
}
hi();

function hello(name) {
	console.log(`Hello ${name}???`);
}
hello("Brad");

function favNum(number) {
	return number*42;
}

let rtnint=favNum(fourteen);
console.log(rtnint);
*/

document.addEventListener("DOMContentLoaded", load);
function load() {
	
	/*const but=document.getElementsByTagName("button");
	but[0].addEventListener("click", justSayHey);
	function justSayHey() {
		alert("Hey!!!");
	}*/
	if(localStorage.getItem("marksData")){
		document.getElementsByTagName("tbody")[0].innerHTML=localStorage.getItem("marksData");
	}
	
	const smt=document.getElementById("submit");
	smt.addEventListener("click", function(){
		
		let name=document.getElementById("name").value.trim();
		let mark=document.getElementById("mark").value.trim();
		
		document.getElementById("name").value=name;
		document.getElementById("mark").value=mark;
		
		
		document.getElementById("form_error").innerHTML="";
		
		mark=parseFloat(mark);
		if(name!="" && !isNaN(mark)) {
			displayData(name, mark);
		} else if(name=="") {
			document.getElementById("form_error").innerHTML="name is invalid";
			return false;
		} else {
			document.getElementById("form_error").innerHTML="mark is invalid";
			return false;
		}
		
		function displayData(name, mark) {
			let ttr0=document.createElement("tr");
			let ttd1=document.createElement("td");
			let ttd2=document.createElement("td");
			let ttd3=document.createElement("td");
			
			ttd1.innerHTML=name;
			ttd2.innerHTML=mark;
			ttd3.innerHTML=((mark>=50)?("PASS"):("FAIL"));
			
			ttr0.appendChild(ttd1);
			ttr0.appendChild(ttd2);
			ttr0.appendChild(ttd3);
			
			
			document.getElementsByTagName("tbody")[0].appendChild(ttr0);

			let list=document.getElementsByTagName("tbody")[0];
			localStorage.setItem("marksData", list.innerHTML);
			return false;
		}
		
		return false;
	});
	
	
	const clr=document.getElementById("clear");
	clr.addEventListener("click", function(){
		
		document.getElementById("form_error").innerHTML="";
		let tbody=document.getElementsByTagName("tbody")[0];
		while(tbody.firstChild) {
			tbody.removeChild(tbody.firstChild);
		}
		
	});
}
	
