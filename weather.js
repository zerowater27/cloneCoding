const weather = document.querySelector(".js-weather");

const API_KEY = "699b2dc3a44dc9a3365c1625ac92d436";
const COORDS = 'coords';

function getWeather(lat, lng) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
	)
	.then(function (reponse) {
		return reponse.json();
	})
	.then(function (json) {
		const temperature = json.main.temp;
		const place = json.name;
		weather.innerText = `${temperature} @ ${place}`;
	});
}


function saveCoors(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGerSucces(position) {
	const latitude=position.coords.latitude;
	const longitude=position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};

	saveCoors(coordsObj);
	getWeather(latitude, longitude);
}

function handleGeoError() {
	console.log("Can\'t access geo location");
}


function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGerSucces, handleGeoError);
}


function loadCoords() {
	const loadedCoords = localStorage.getItem(COORDS);
	if (loadedCoords === null) {
		askForCoords();
		console.log("ggg");
	} else {
		const parsedCoords = JSON.parse(loadedCoords)	// 날시 가져오기
		getWeather(parsedCoords.latitude, parsedCoords.longitude);
	}
}


function init() {
	loadCoords();
}

init();