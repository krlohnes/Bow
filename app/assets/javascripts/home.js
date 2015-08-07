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
	$('#lovesoundOpen').click(function() {
		$('#trackOne')[0].pause();
		$('#trackTwo')[0].pause();
	});
	$('#beYourBowInner').click(function() {
		if ($('#trackTwo')[0].paused == false) {
			$('#trackTwo')[0].pause();
		}
		if ($('#trackOne')[0].paused == false) {
			$('#trackOne')[0].pause();
		} else {
			$('#trackOne')[0].play();
		}
	});
	$('#lovesoundInner').click(function() {
		if ($('#trackOne')[0].paused == false) {
			$('#trackOne')[0].pause();
		}
		if ($('#trackTwo')[0].paused == false) {
			$('#trackTwo')[0].pause();
		} else {
			$('#trackTwo')[0].play();
		}
	});
	$('.albums__coverart-inner').click(function() { 
		if ($('#trackOne')[0].paused == false) {
			$('#trackOnePause').show();
			$('#trackOnePlay').hide();
			$('#trackTwoPause').hide();
			$('#trackTwoPlay').show();
		} else if ($('#trackTwo')[0].paused == false) {
			$('#trackOnePause').hide();
			$('#trackOnePlay').show();
			$('#trackTwoPause').show();
			$('#trackTwoPlay').hide();
		} else {
			$('#trackOnePause').hide();
			$('#trackOnePlay').show();
			$('#trackTwoPause').hide();
			$('#trackTwoPlay').show();
		}
	});
});
//Audio Controls//