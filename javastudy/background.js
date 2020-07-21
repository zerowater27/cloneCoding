const body = document.querySelector("body");

const IMG_Number = 4;


function paintImage(imgNumber) {
	const image = new Image();
	image.src = `images/${imgNumber}.jpg`
	image.classList.add("bgImage");
	body.appendChild(image);
}

function genRandom() {
	const number = Math.ceil(Math.random() * IMG_Number);
	return number;
}


function init() {
	const randomNumber = genRandom();
	paintImage(randomNumber);
}
paintImage(Math.ceil(Math.random() * IMG_Number));

setInterval(init, 5000);
//init();
