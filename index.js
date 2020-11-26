for (let i=1;i<17;i++) {
	$('#container').append(`<div class="boxContainer"></div>`)
}

$('.boxContainer').on('click', function() {
	$(this).toggleClass('boxContainerToggle');
});