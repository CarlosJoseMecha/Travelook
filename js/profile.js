// --------------------jquery
$(document).ready(function(){
	$('.js-edit, .js-save, .js-delete').on('click', function(){
		var $form = $(this).closest('form');
		$form.toggleClass('is-readonly is-editing');
		var isReadonly = $form.hasClass('is-readonly');
		$form.find('input,textarea,select').prop('disabled', isReadonly);
	});
});

function saveUserData() {
   var name = document.getElementById('firstName').value;
   document.getElementById('userName').innerHTML=name;
}

function discard() {
   var name = document.getElementById('userName').innerHTML;
   document.getElementById('firstName').value=name;
}

function saveMailData() {
   var email = document.getElementById('email').value;
   document.getElementById('userMail').innerHTML=email;
}

function discardMail() {
   var name = document.getElementById('userMail').innerHTML;
   document.getElementById('email').value=name;
}


// ---------------------------angular

angular.module("dataUser", []).controller("dataUserController", function($scope){
	$scope.namEdit = "María";
	$scope.age = 
	$scope.mail = "mariaruiz@gmail.com";
});

function calculateAge() {
   var birth = document.getElementById('birthday').value;
   var ageDifMs = Date.now() - birthday.getTime();
   var age = birth - 2019;
   // 2013-01-08
   // var ageDifMs = Date.now() - birthday.getTime();
   //  var ageDate = new Date(ageDifMs); // miliseconds from epoch
   //  return Math.abs(ageDate.getUTCFullYear() - 1970);
   document.getElementById('userAge').innerHTML=age;
}

// {{"2013-06-11" | date:'longDate'}}

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.getElementById('userAge').innerHTML=(calculate_age(new Date(document.getElementById('birthday').value))) + " años";

console.log(calculate_age(new Date(1962, 1, 1)));