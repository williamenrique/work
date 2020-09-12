const open = document.getElementsByClassName('fa-bar');
const close = document.getElementsByClassName('fa-times-circle');

$('.open').click(function () {
	var styles = {
		left: '0',
		transition: '0.8s all ease',
	};
	$('.cont-menu').css(styles);
});
$('.close').click(function () {
	var styles = {
		left: '-1000px',
		transition: '0.8s all ease',
	};
	$('.cont-menu').css(styles);
});
