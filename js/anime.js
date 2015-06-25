window.onload = changeSlide
var images = ['img/Zankyou1.jpg',
'img/Zankyou2.jpg',
'img/Zankyou3.jpg',
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

