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
   var name = document.getElementById('userName').title;
   console.log("users value is: " + name);
}