const input = document.querySelector(".dueDateTyped");
const dayText = document.querySelector(".day");
const hourText = document.querySelector(".hour");
const minText = document.querySelector(".minute");
const secText = document.querySelector(".second");

let dueDate = 1627298700000;

const timeUpdate = setInterval(function () {
	const now = new Date().getTime();
	let timegap = dueDate - now;

	// if timegap is not selected, don't show 'NaN'
	if (isNaN(timegap)) {
		timegap = "";
		dayText.textContent = " ";
		hourText.textContent = " ";
		minText.textContent = " ";
		secText.textContent = " ";
	}

	// converting time to milliseconds
	const sec = 1000;
	const min = sec * 60;
	const hr = min * 60;
	const day = hr * 24;

	// calculate days, hours, minutes & seconds from timegap

	const days = Math.floor(timegap / day);
	const hours = Math.floor((timegap % day) / hr);
	const minutes = Math.floor((timegap % hr) / min);
	const seconds = Math.floor((timegap % min) / sec);

	//display results
	dayText.textContent = days;
	hourText.textContent = hours;
	minText.textContent = minutes;
	secText.textContent = seconds;

	// launch successful screen
	if (timegap < 0) {
		clearInterval(timeUpdate);
		const mainscreen = document.querySelector(".main-wrapper");
		mainscreen.className = "launched";
		mainscreen.innerHTML = "<h1>Launch Successful!</h1>";
		const renew = document.createElement("button");
		renew.textContent = "Try Another Launch Date";
		mainscreen.appendChild(renew);

		const button = document.querySelector("button");
		// if (button) {
		// 	button.addEventListener("click", () => {
		// 		document.location.reload(
		// 			"https://codepen.io/katefordesign/pen/BaRKVZq",
		// 		);
		// 	});
		// }
	}
}, 1000);
