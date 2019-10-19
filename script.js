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

//check if door is already clicked
let isClicked = door => {
	if (door.src === closedDoorPath) {
		return false;
	} else {
		return true;
	}
};

//update #of closed doors after each click
let playDoor = () => {
	numClosedDoors--;
};

//if all doors are opened execute gameOver()
if (numClosedDoors === 0) {
	gameOver();
}

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

//if same door has not yet been opened, on click, change image and update var-numClosedDoors
if (!isClicked(door1)) {
	door1.onclick = () => {
		door1.src = openDoor1;
		playDoor();
	};
}
if (!isClicked(door2)) {
	door2.onclick = () => {
		door2.src = openDoor2;
		playDoor();
	};
}
if (!isClicked(door3)) {
	door3.onclick = () => {
		door3.src = openDoor3;
		playDoor();
	};
}

//game over
let gameOver = () => {};

//call random door generator
randomChoreDoorGenerator();
