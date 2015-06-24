var images = ['img/Westeros.jpg',
'img/Essos.jpg',
'img/Stark.jpg',
'img/Targaryen.jpg',
'img/Barateon.jpg'
] ;

var img = document.getElementById('Westeros');

function changeImage(path) {
	console.log(path);
	img.src = path;
}


var img2 = document.getElementById('Stark');

function changeImages(path) {
	console.log(path);
	img2.src = path;
}