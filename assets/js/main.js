/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var	$window = $(window),
$body = $('body'),
$wrapper = $('#wrapper'),
$header = $('#header'),
$nav = $('#nav'),
$main = $('#main'),
$navPanelToggle, $navPanel, $navPanelInner;

// Breakpoints.
breakpoints({
	default:   ['1681px',   null       ],
	xlarge:    ['1281px',   '1680px'   ],
	large:     ['981px',    '1280px'   ],
	medium:    ['737px',    '980px'    ],
	small:     ['481px',    '736px'    ],
	xsmall:    ['361px',    '480px'    ],
	xxsmall:   [null,       '360px'    ]
});

/**
* Applies parallax scrolling to an element's background image.
* @return {jQuery} jQuery object.
*/
$.fn._parallax = function(intensity) {

var	$window = $(window),
	$this = $(this);

if (this.length == 0 || intensity === 0)
	return $this;

if (this.length > 1) {

	for (var i=0; i < this.length; i++)
		$(this[i])._parallax(intensity);

	return $this;

}

if (!intensity)
	intensity = 0.25;

$this.each(function() {

	var $t = $(this),
		$bg = $('<div class="bg"></div>').appendTo($t),
		on, off;

	on = function() {

		$bg
			.removeClass('fixed')
			.css('transform', 'matrix(1,0,0,1,0,0)');

		$window
			.on('scroll._parallax', function() {

				var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

				$bg.css('transform', 'matrix(1,0,0,1,0,' + (pos * intensity) + ')');

			});

	};

	off = function() {

		$bg
			.addClass('fixed')
			.css('transform', 'none');

		$window
			.off('scroll._parallax');

	};

	// Disable parallax on ..
		if (browser.name == 'ie'			// IE
		||	browser.name == 'edge'			// Edge
		||	window.devicePixelRatio > 1		// Retina/HiDPI (= poor performance)
		||	browser.mobile)					// Mobile devices
			off();

	// Enable everywhere else.
		else {

			breakpoints.on('>large', on);
			breakpoints.on('<=large', off);

		}

});

$window
	.off('load._parallax resize._parallax')
	.on('load._parallax resize._parallax', function() {
		$window.trigger('scroll');
	});

return $(this);

};

// Play initial animations on page load.
$window.on('load', function() {
	window.setTimeout(function() {
		$body.removeClass('is-preload');
	}, 100);
});

// Scrolly.
$('.scrolly').scrolly();

// Background.
$wrapper._parallax(0.925);

// Intro.
var $intro = $('#intro');

if ($intro.length > 0) {

	// Hack: Fix flex min-height on IE.
		if (browser.name == 'ie') {
			$window.on('resize.ie-intro-fix', function() {

				var h = $intro.height();

				if (h > $window.height())
					$intro.css('height', 'auto');
				else
					$intro.css('height', h);

			}).trigger('resize.ie-intro-fix');
		}
		/*
	// Hide intro on scroll (> small).
		breakpoints.on('>small', function() {

			$main.unscrollex();

			$main.scrollex({
				mode: 'bottom',
				top: '25vh',
				bottom: '-50vh',
				enter: function() {
					$intro.addClass('hidden');
				},
				leave: function() {
					$intro.removeClass('hidden');
				}
			});

		});

	// Hide intro on scroll (<= small).
		breakpoints.on('<=small', function() {

			$main.unscrollex();

			$main.scrollex({
				mode: 'middle',
				top: '15vh',
				bottom: '-15vh',
				enter: function() {
					$intro.addClass('hidden');
				},
				leave: function() {
					$intro.removeClass('hidden');
				}
			});

	});
	*/

}

// Slideshows

$(".slideshow").hover(
	function (event)
	{
		var arrows = document.getElementsByClassName("pagination");
		for (var i = 0; i < arrows.length; ++i)
		{
			arrows[i].style.opacity = 0.5;
		}
	},
	function(event)
	{
		var arrows = document.getElementsByClassName("pagination");
		for (var i = 0; i < arrows.length; ++i)
			arrows[i].style.opacity = 0.0;
	}
);


var slideshow1 = document.getElementById("slideshow1");
if (slideshow1)
{
	slideshow1.index = 0;
	SetSlide(0,slideshow1);
}

var slideshow2 = document.getElementById("slideshow2");
if (slideshow2)
{
	slideshow2.index = 0;
	SetSlide(0,slideshow2);
}

var slideshow3 = document.getElementById("slideshow3");
if (slideshow3)
{
	slideshow3.index = 0;
	SetSlide(0,slideshow3);
}

var slideshow4 = document.getElementById("slideshow4");
if (slideshow4)
{
	slideshow4.index = 0;
	SetSlide(0,slideshow4);
}

var slideshow5 = document.getElementById("slideshow5");
if (slideshow5)
{
	slideshow5.index = 0;
	SetSlide(0,slideshow5);
}

var slideshow6 = document.getElementById("slideshow6");
if (slideshow6)
{
	slideshow6.index = 0;
	SetSlide(0,slideshow6);
}


function AddSlide(n, SlideName)
{
	SetSlide(SlideName.index += n, SlideName);
}

function SetSlide(n, SlideName)
{
	var pictures = SlideName.getElementsByClassName("image fit");
	var size = pictures.length;

	for (var i = 0; i < size; ++i)
		pictures[i].style.display = "none";

	if (n >= size)
		SlideName.index = 0;
	else if (n < 0)
		SlideName.index = size-1;
	pictures[SlideName.index].style.display = "block";
}
(jQuery);