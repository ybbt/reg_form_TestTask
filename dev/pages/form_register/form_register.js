document.querySelector("._forMove").addEventListener("click", myFunction);
document.querySelector("._forBackMove").addEventListener("click", myFunctionBack);

function myFunction(e) {
	console.log("hello");
	document.querySelector("._move").classList.add("row-reg_icons__move");
}

function myFunctionBack(e) {
	console.log("hello2");
	document.querySelector("._move").classList.remove("row-reg_icons__move");
}

