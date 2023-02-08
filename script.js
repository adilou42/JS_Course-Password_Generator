const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
 "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
 "{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let themeEl = document.getElementById("theme-button")

let isLightMode = true

function generatePasswords() {
	let password1 = randomPassword()
	let password2 = randomPassword()
	password1El.textContent = password1
	password2El.textContent = password2

	let div = document.getElementsByTagName('DIV')[0];

	let link = document.createElement('link');

	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = './CSS/light_mode_password.css';

	div.appendChild(link);

}

function changeTheme() {
	if (isLightMode) {
		themeEl.textContent = "Click to Light Theme"
		isLightMode = false
		document.getElementById("styleId").setAttribute('href', "./CSS/dark_mode.css")
	} else {
		themeEl.textContent = "Click to Dark Theme"
		isLightMode = true
		document.getElementById("styleId").setAttribute('href', "./CSS/light_mode.css")

	}

}

function randomPassword() {
	let password = []
	for (let i = 0; i < 15; i++) {
		let x = Math.floor(Math.random() * 91)
		password += characters[x]
	}
	return password
}

function copyPassword1() {
	
	let copyText = document.getElementById("password1-el").innerHTML
	navigator.clipboard.writeText(copyText)
	alert("copied")

}

function copyPassword2() {
	
	let copyText = document.getElementById("password2-el").innerHTML
	navigator.clipboard.writeText(copyText)
	alert("copied")

}