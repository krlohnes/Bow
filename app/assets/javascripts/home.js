$(document).ready(function(){
//Album Hover//
	$('#beYourBow').mouseover(function () {
		$('#beYourBowInner').fadeIn();
	});
	$('#beYourBow').mouseleave(function () {
		$('#beYourBowInner').fadeOut();
	});
	$('#lovesound').mouseover(function () {
		$('#lovesoundInner').fadeIn();
	});
	$('#lovesound').mouseleave(function () {
		$('#lovesoundInner').fadeOut();
	});
//Album Hover//
//Audio Controls//
	$('#trackOnePlay').click(function() {
		if ($('#trackTwo')[0].paused == false) {
			$('#trackTwo')[0].pause();
		}
		if ($('#trackOne')[0].paused == false) {
			$('#trackOne')[0].pause();
		} else {
			$('#trackOne')[0].play();
		}
	});
	$('#trackTwoPlay').click(function() {
		if ($('#trackOne')[0].paused == false) {
			$('#trackOne')[0].pause();
		}
		if ($('#trackTwo')[0].paused == false) {
			$('#trackTwo')[0].pause();
		} else {
			$('#trackTwo')[0].play();
		}
	});
});