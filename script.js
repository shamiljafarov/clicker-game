let box = document.getElementById("box");
let timer = document.getElementById("timer");
let sprite = document.getElementById("sprite")

let count = 10;
let score = 0;

let game = setInterval(() => {
	let x = Math.random() * (window.innerWidth - 100);
	let y = Math.random() * (window.innerHeight - 100);
	box.style.left = x + 'px';
	box.style.top = y + 'px';
}, 1000)

box.addEventListener("click", () => {
	score++ 
	box.style.boxShadow = "0px 0px 20px 10px greenyellow";
	box.style.scale = "1.1";
	setTimeout(() => {
		box.style.boxShadow = "0px 0px 0px 0px"
		box.style.scale = "1";
	}, 100)

	console.log(score);
	if(count <= 0) {
		score = score
	}
})

let time = setInterval(() => {
	count--
	timer.innerHTML = "Time: " + count;

	if (count <= 0) {
		clearInterval(time);
		clearInterval(game)
		sprite.src = 'https://i.pinimg.com/originals/e9/55/5d/e9555dcf0bbad33e257406d79e079bff.gif'
		timer.innerHTML = "Score: " + score;
	}
}, 1000)

