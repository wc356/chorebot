//import elements from HTML
let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let startButton = document.getElementById('start');

//import door path image
let closedDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let botDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

//global var.
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

//check if door is already clicked
let isClicked = door => {
	if (door.src === closedDoorPath) {
		return false;
	} else {
		return true;
	}
};

//update #of closed doors after each click
let playDoor = door => {
	numClosedDoors--;
	//if all doors are opened execute gameOver()
	if (numClosedDoors === 0) {
		gameOver('win');
	} else if (isBot(door)) {
		gameOver();
	}
};

//random door generator
randomChoreDoorGenerator = () => {
	const choreDoor = Math.floor(Math.random() * numClosedDoors);
	switch (choreDoor) {
		case 0:
			openDoor1 = botDoorPath;
			openDoor2 = beachDoorPath;
			openDoor3 = spaceDoorPath;
			break;
		case 1:
			openDoor2 = botDoorPath;
			openDoor3 = beachDoorPath;
			openDoor1 = spaceDoorPath;
			break;
		default:
			openDoor3 = botDoorPath;
			openDoor1 = beachDoorPath;
			openDoor2 = spaceDoorPath;
			break;
	}
};

//check if opened door is Bot
let isBot = door => {
	if (door.src === botDoorPath) {
		return true;
	} else {
		return false;
	}
};

//check if same door has not yet been opened, on click, change image and update numClosedDoors
door1.onclick = () => {
	if (currentlyPlaying && !isClicked(door1)) {
		door1.src = openDoor1;
		playDoor(door1);
	}
};
door2.onclick = () => {
	if (currentlyPlaying && !isClicked(door2)) {
		door2.src = openDoor2;
		playDoor(door2);
	}
};
door3.onclick = () => {
	if (currentlyPlaying && !isClicked(door3)) {
		door3.src = openDoor3;
		playDoor(door3);
	}
};

//click button to restart game
startButton.onclick = () => {
	if (!currentlyPlaying) {
		startRound();
	}
};

//start round function - reset all game values
const startRound = () => {
	door1.src = closedDoorPath;
	door2.src = closedDoorPath;
	door3.src = closedDoorPath;
	numClosedDoors = 3;
	startButton.innerHTML = 'Good luck!';
	currentlyPlaying = true;
	//call random door generator
	randomChoreDoorGenerator();
};

//game over
let gameOver = status => {
	if (status === 'win') {
		startButton.innerHTML = 'You win! Play again?';
	} else {
		startButton.innerHTML = 'Game over! Play again?';
	}
	currentlyPlaying = false;
};

//start round!
startRound();
