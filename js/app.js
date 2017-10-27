// LISA

init();

	var CreateAudio = function(){
		window.newAudioA = new Audio();
		newAudioA.src = 'wave/hihat-reso.wav';

		window.newAudioB = new Audio();
		newAudioB.src = 'wave/perc-808.wav';

		window.newAudioC = new Audio();
		newAudioC.src = 'wave/ride-acoustic02.wav';

		window.newAudioD = new Audio();
		newAudioD.src = 'wave/shaker-suckup.wav';

		window.newAudioE = new Audio();
		newAudioE.src = 'wave/tom-808.wav';

		window.newAudioF = new Audio();
		newAudioF.src = 'wave/kick-808.wav';

		window.newAudioG = new Audio();
		newAudioG.src = 'wave/clap-tape.wav';

		window.newAudioH = new Audio();
		newAudioH.src = 'wave/cowbell-808.wav';

		window.newAudioI = new Audio();
		newAudioI.src = 'wave/snare-vinyl02.wav';

		window.newAudioJ = new Audio();
		newAudioJ.src = 'wave/hihat-acoustic02.wav';


	}();

// JESSE
//Click Function Initialisation

function init(){
		var playButtonA = document.getElementById('a');
		playButtonA.addEventListener('click', playAudioA, false);

		var playButtonB = document.getElementById('b');
		playButtonB.addEventListener('click', playAudioB, false);
			
		var playButtonC = document.getElementById('c');
		playButtonC.addEventListener('click', playAudioC, false);

		var playButtonD = document.getElementById('d');
		playButtonD.addEventListener('click', playAudioD, false);

		var playButtonE = document.getElementById('e');
		playButtonE.addEventListener('click', playAudioE, false);
			
		var playButtonF = document.getElementById('f');
		playButtonF.addEventListener('click', playAudioF, false);

		var playButtonG = document.getElementById('g');
		playButtonG.addEventListener('click', playAudioG, false);

		var playButtonH = document.getElementById('h');
		playButtonH.addEventListener('click', playAudioH, false);
			
		var playButtonI = document.getElementById('i');
		playButtonI.addEventListener('click', playAudioI, false);

		var playButtonJ = document.getElementById('j');
		playButtonJ.addEventListener('click', playAudioJ, false);
		}//init end ***


// CAM

	function playAudioA(){
		console.log('color change here?');
		changeColor();
		newAudioA.play();
	}
	
	function playAudioB(){
		newAudioB.play()
	}

	function playAudioC(){
		newAudioC.play()
	}

	function playAudioD(){
		newAudioD.play()
	}

	function playAudioE(){
		newAudioE.play()
	}

	function playAudioF(){
		newAudioF.play()
	}

	function playAudioG(){
		newAudioG.play()
	}

	function playAudioH(){
		newAudioH.play()
	}
	
	function playAudioI(){
		newAudioI.play()
	}

	function playAudioJ(){
		newAudioJ.play()
	}



// FORREST

document.addEventListener("keypress", function(e) {
	var key = e.keyCode;

	switch (key) {
		// 's' key is pressed
		case 115:
			newAudioA.currentTime = 0;
			playAudioA();
			break;

		// 'd' key is pressed
		case 100:
			newAudioB.currentTime = 0;
			playAudioB();
			break;

		// 'f' key is pressed
		case 102:
			newAudioC.currentTime = 0;
			playAudioC();
			break;

		// 'g' key is pressed
		case 103:
			newAudioD.currentTime = 0;
			playAudioD();
			break;

		// 'h' key is pressed
		case 104:
			newAudioE.currentTime = 0;
			playAudioE();
			break;

		// 'x' key is pressed
		case 120:
			newAudioF.currentTime = 0;
			playAudioF();
			break;

		// 'c' key is pressed
		case 99:
			newAudioG.currentTime = 0;
			playAudioG();
			break;

		// 'v' key is pressed
		case 118:
			newAudioH.currentTime = 0;
			playAudioH();
			break;

		// 'b' key is pressed
		case 98:
			newAudioI.currentTime = 0;
			playAudioI();
			break;

		// 'h' key is pressed
		case 110:
			newAudioJ.currentTime = 0;
			playAudioJ();
			break;

		// Default case runs if the case doesn't match
		default:
			console.log("This key isn't registered");
			break;
	}
});


function changeColor() {
	console.log('b');
	var testIt = document.getElementsByClassName('divTwo');
	for (var i = testIt.length - 1; i >= 0; i--) {
		console.log('loop working');
		testIt[i].style.backgroundColor = '#5D6169';
	}
}


// switch (changeColor) {
// 	case 'playAudioA':
// 	console.log('changeA');
// 	break;
// }

















