// $("._forMove").on("click", myFunction);
// $("._forBackMove").on("click", myFunctionBack);


// function myFunction(e) {
// 	// console.log("hello");
// 	$("._move").addClass("row-reg_icons__move");
// }

// function myFunctionBack(e) {
// 	// console.log("hello2");
// 	$("._move").removeClass("row-reg_icons__move");
// }

$("._move").on("click", function(){
	if(event.target.classList.contains('_forMove')) {
		$(this).addClass("row-reg_icons__move");
	}else if(event.target.classList.contains('_forBackMove') ){
		$(this).removeClass("row-reg_icons__move");
	}
});



// document.querySelector("._postCode").addEventListener("blur", postCodeValid);
// var emptyMess = "This field can't be empty";

// function postCodeValid(e) {
// 	console.log("post");
// 	if (valExist(this)) { // введено не число
// 		// показать ошибку
// 		//this.className = "error";
// 		console.log(emptyMess);
// 	}
// }

$("._formReg").on("blur", "._inputValid", emptyValidation);
$("._formReg").on("focus", "._inputValid", emptyValidation);

function emptyValidation(){
	var emptyMess = "This field can't be empty";
	if (!valExist($(this))) {
		console.log(emptyMess + " - " + $(this).attr('class'));
		
		$(this).addClass("row-reg_input__invalid")
				.siblings("._rowTooltip").removeClass("row-reg_tooltip__invis")
											.addClass("row-reg_tooltip__vis")
											.find("._tooltipText").html(emptyMess);
	} else {
		$(this).removeClass("row-reg_input__invalid").siblings("._rowTooltip").removeClass("row-reg_tooltip__vis").addClass("row-reg_tooltip__invis").find("._tooltipText").html("ok");
	}
}

// function validate() {
// 	var elemArr = null;

// 	var year = document.querySelector("._year");
// 	var email = document.querySelector("._email");
// 	var password = document.querySelector("._pass");
// 	var postCode = document.querySelector("._postCode");

// 	var emptyMess = "This field can't be empty";

// 	if (!valExist(email)) {
// 		console.log(emptyMess);
// 	}
// }

function valExist ($elem) {
	// console.log($elem.val());
	if ($elem.val() != "") {
		return true;
	}
	else return false;
}