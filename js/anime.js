window.onload = changeSlide
var images = ['img/zankyou1.jpg',
'img/zankyou2.jpg',
'img/zankyou3.jpg',
'img/Zankyou4.jpg'
] ;

var delay = 3000;  //milliseconds
var img = document.getElementById('slides');


var count = 2
function changeSlide(number) {
	if(count >= images.length - 1) {
		count = 0;
	} else{
		count++
	}
	img.src = images[count];
	setTimeout (changeSlide, delay);
}
