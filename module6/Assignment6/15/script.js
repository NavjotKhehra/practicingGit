/********w************

	Do not alter this comment block. 
	Only fill out the information below.
	
	Competency 15
	Name: Navjot Kaur
	Date: March 26, 2023
	Description: In this file, 

********************/

document.addEventListener("DOMContentLoaded", load);

function tempData() {
	document.getElementById('fullName').value	="Brady";
	document.getElementById('hoursWorked').value="12.456";
	document.getElementById('hourlyRate').value	="999.989";
	return;
}

function load() {
	let calcButton = document.getElementById('calcButton');

	calcButton.addEventListener('click', calc);
	tempData();
}

function calc() {
	let name = document.getElementById('fullName').value;
	let hours = document.getElementById('hoursWorked').value;
	let rate = document.getElementById('hourlyRate').value;

	if (name == "" || hours == "" || rate == "") {
		clearFields();
		return;
	}

	let pay = calcPay(hours, rate);
	let taxes = getTax(pay);
	let net = pay - taxes;

	printRow(name, pay, taxes, net);
	clearFields();
}

function clearFields() { return;
	/*document.getElementById('fullName').value = "";
	document.getElementById('hoursWorked').value = "";
	document.getElementById('hourlyRate').value = "";
	document.getElementById('fullName').focus();*/
}

/*
	calcPay function
	receives hours and hourly rate values
	returns the calculated pay
*/
function calcPay(hours, rate) {
	let pay = 0;
	if (hours > 40) {
	let extrahours = hours - 40;
	let afterpay = rate + (0.5 * rate);
		pay = pay + (extrahours + afterpay);
		hours = hours - extrahours;
	}
	pay = pay + (hours * rate);
	return pay;
}

/*
	getTax function
	receives gross pay
	returns relative tax rate
*/
function getTax(funcGross) {
	let funcTax = 0;
	if (funcGross < 250) {
		funcTax = funcGross * .25;
	}
	else {
		if (funcGross < 500) {
			funcTax = funcGross * .3;
		}
		else {
			if (funcGross <= 750) {
				funcTax = funcGross * .4;
			}
			else {
				funcTax = funcGross * .5;
			}
		}
	}
	return funcTax;
}

/* 
	printRow function
	receives name, gross, taxes, and net pay
	formats currency
	prints a row in the table
*/
function printRow(fname, gr, tx, nt) {
	//Set values to 2 decimal places here//
	/*gross = parseFloat(gross).toFixed(2);
	taxes = parseFloat(taxes).toFixed(2);
	net = parseFloat(net).toFixed(2);*/

	let tbody = document.getElementsByTagName("tbody")[0];
	let tr = document.createElement("tr");
	let th = document.createElement("th");
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");
	let td3 = document.createElement("td");

	blah=gr.toFixed(2)
	th.innerHTML =	fname;
	td1.innerHTML = `$${blah}`;
	td2.innerHTML = `$${tx.toFixed(2)}`;
	td3.innerHTML = `$${nt.toFixed(2)}`;

	tr.appendChild(th);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);

	tbody.appendChild(tr);
}