var aVal = false;
var eVal = false;
var pVal = false;
var cVal = false;

var ageMess = "You must be at least 18 year old";
var emptyMess = "This field can't be empty";
var invalidEmailMessage =  "Please include an '@' in the email address";

var $inputYear = $("._inputYear");

var now = new Date();
var nowYear = now.getFullYear();

for (var i = 1950; i<=nowYear; i++){
	var inStr = "<option>" + i + "</option>";
	$(inStr).appendTo($inputYear);
}

$inputYear.val(nowYear);
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
	} else if(event.target.classList.contains('_forBackMove') ){
		$(this).removeClass("row-reg_icons__move");
	}
});

var $formReg = $("._formReg");

$formReg.submit(function(){
	console.log("Form is valid!");
});

$formReg.on("focusout", "._inputValid", validation);
$formReg.on("focusin", "._inputValid", clearInvalidEffect);

// $formReg.on("focusout", function(){
// 	console.log(aVal);
// 	if (!aVal) {
// 		markInvalid($formReg.find("._inputYear"), "jhjg")
// 	}
// 	if (!eVal) {
// 		console.log("popal email");
// 		markInvalid($formReg.find("._inputEmail"), "jhghjg")
// 	}
// 	if (!pVal) {
// 		markInvalid($formReg.find("._inputPass"), "vhv")
// 	}
// 	if (!cVal) {
// 		markInvalid($formReg.find("._inputPostCode"), "vhgv")
// 	}
// });

$("._submitReg").on("click", function (){
	$inputs = $("._inputValid");
	console.log(aVal + eVal + pVal + cVal);
	if (aVal==false || eVal==false || pVal==false || cVal==false) {
		$inputs.each(validation);
	} else if (aVal && eVal && pVal && cVal) {
			console.log("SUBMIT");
			$formReg.submit();
		
	}
	
});

$("._questionReg").on("mouseenter", function() {
	$(this).siblings("._rowTooltip").slideDown(500);
});

$("._questionReg").on("mouseleave", function() {
	$(this).siblings("._rowTooltip").slideUp(500);
});

function clearInvalidEffect (){
	$(this).removeClass("row-reg_input__invalid");
}

function markInvalid ($elem, message){
	// console.log("popa mark " + $elem);
	$elem.addClass("row-reg_input__invalid")
	.siblings("._rowTooltip").queue(function (next) {
		$elem.siblings("._rowTooltip").find("._tooltipText").text(message);
		next();
	});
	$elem.siblings("._rowTooltip").fadeIn(1000);
}

function validation () {
	
	var flgValid = false;	

	$(this).siblings("._rowTooltip").fadeOut(200);

	if ($(this).hasClass("_inputYear")) {
		flgValid = ageValidation($(this));
		aVal = flgValid;
		revisionMark(aVal, $(this), ageMess);
		// if (!aVal) {
		// 	markInvalid($(this), ageMess);
		// }
	} else {

		var flgValid = emptyValidation($(this));

		if($(this).hasClass("_inputEmail") && flgValid) {
			flgValid = validationEmail($(this));
			eVal = flgValid;
			revisionMark(eVal, $(this), invalidEmailMessage);
			// if (!pVal) {
			// 	markInvalid($(this), invalidEmailMessage);
			// }
			
		} else if($(this).hasClass("_inputPass")){
			pVal = flgValid;
			revisionMark(pVal, $(this), emptyMess);
			// if (!pVal) {
			// 	markInvalid($(this), emptyMess);
			// }
		} else if($(this).hasClass("_inputPostCode")){
			cVal = flgValid;
			revisionMark(cVal, $(this), emptyMess);
			// if (!cVal) {
			// 	markInvalid($(this), emptyMess);
			// }
		} else if($(this).hasClass("_inputEmail")){
			eVal = flgValid;
			revisionMark(eVal, $(this), emptyMess);
			// if (!eVal) {
			// 	markInvalid($(this), emptyMess);
			// }
		} 
	}

	
}

function revisionMark (flagVal, $elem, message){
	if (!flagVal) {
		markInvalid($elem, message);
	}
}

function ageValidation ($elem) {
	
	var now = new Date();
	var nowYear = now.getFullYear();

	var inputYear = +$elem.val();
	
	if ((nowYear - inputYear) < 18) {
		
		return false;
	} else {
		return true;
	}
}


function emptyValidation($elem){
	
	if (!valExist($elem)) {
		
		return false;
	} else {
		return true;
	}
}

function validationEmail($elem){
	
	var str = $elem.val();
	var dogFlag = str.indexOf("@");
	console.log(dogFlag);
	if(dogFlag == -1) {
		
		return false;
	} else {
		return true;
	}
}

function valExist ($elem) {
	if ($elem.val() != "") {
		return true;
	}
	else return false;
}
