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
			var playButton = document.getElementsByClassName('a');
			playButton.addEventListener('click', playAudioA, false);

			var playButton = document.getElementsByClassName('b');
			playButton.addEventListener('click', playAudioB, false);
			
			var playButton = document.getElementsByClassName('c');
			playButton.addEventListener('click', playAudioC, false);

			var playButton = document.getElementsByClassName('d');
			playButton.addEventListener('click', playAudioD, false);

			var playButton = document.getElementsByClassName('e');
			playButton.addEventListener('click', playAudioE, false);
			
			var playButton = document.getElementsByClassName('f');
			playButton.addEventListener('click', playAudioF, false);

			var playButton = document.getElementsByClassName('h');
			playButton.addEventListener('click', playAudioG, false);

			var playButton = document.getElementsByClassName('i');
			playButton.addEventListener('click', playAudioH, false);
			
			var playButton = document.getElementsByClassName('j');
			playButton.addEventListener('click', playAudioI, false);

			var playButton = document.getElementsByClassName('k');
			playButton.addEventListener('click', playAudioJ, false);
			console.log('init working');
		}//init end ***


// CAM
init();

	function playAudioA(){
		newAudioA.play()
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