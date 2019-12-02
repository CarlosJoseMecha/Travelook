$(document).ready(function(){
	$('.js-edit, .js-save, .js-delete').on('click', function(){
		var $form = $(this).closest('form');
		$form.toggleClass('is-readonly is-editing');
		var isReadonly = $form.hasClass('is-readonly');
		$form.find('input,textarea,select').prop('disabled', isReadonly);
	});
});