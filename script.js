//Import elements
let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let startButton = document.getElementById('start');

//Set image paths
let botDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

//Global variables
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

//Check if opened is Bot
const isBot = door => door.src === botDoorPath;

//Prevent over-click same door
const isClicked = door => {
	door.src === closedDoorPath ? false : true;
};

//Define game-winning condition
const winCondition = door => {
	numClosedDoors--;
	numClosedDoors === 0 ? gameOver('win') : isBot(door) ? gameOver() : undefined;
};

//Random generator
const randomChoreDoorGenerator = () => {
	let choreDoor = Math.floor(Math.random() * numClosedDoors);
	switch (choreDoor) {
		case 0:
			openDoor1 = botDoorPath;
			openDoor2 = beachDoorPath;
			openDoor3 = spaceDoorPath;
			break;
		case 1:
			openDoor2 = botDoorPath;
			openDoor1 = spaceDoorPath;
			openDoor3 = beachDoorPath;
			break;
		default:
			openDoor3 = botDoorPath;
			openDoor1 = beachDoorPath;
			openDoor2 = spaceDoorPath;
			break;
	}
};

//On clicking door, open
door1.onclick = () => {
	if (currentlyPlaying && !isClicked(door1)) {
		door1.src = openDoor1;
		winCondition(door1);
	}
};
door2.onclick = () => {
	if (currentlyPlaying && !isClicked(door2)) {
		door2.src = openDoor2;
		winCondition(door2);
	}
};
door3.onclick = () => {
	if (currentlyPlaying && !isClicked(door3)) {
		door3.src = openDoor3;
		winCondition(door3);
	}
};

//On clicking button, restart round
startButton.onclick = () => {
	if (!currentlyPlaying) {
		startRound();
	}
};

//Reset values for game restart
const startRound = () => {
	door1.src = closedDoorPath;
	door2.src = closedDoorPath;
	door3.src = closedDoorPath;
	numClosedDoors = 3;
	startButton.innerHTML = 'Good Luck!';
	currentlyPlaying = true;
	randomChoreDoorGenerator();
};

//Define game over function
const gameOver = status => {
	if (status === 'win') {
		startButton.innerHTML = 'You win! Play again?';
	} else {
		startButton.innerHTML = 'Game over! Play again?';
	}
	currentlyPlaying = false;
};

//Start new round
startRound();
