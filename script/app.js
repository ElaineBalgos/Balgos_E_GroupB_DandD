(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
				dropZones = document.querySelectorAll('.drop-zone'),
				gameBoard = document.querySelector('.puzzle-board');
				//buttonHolder = document.querySelector('#buttonHolder');

	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomright",];

	function changeImageSet() {
	// change all the image elements on the page ->draggable image sources
	// change the image elements on the left to match the selcted puzzle
	pieceNames.forEach((piece, index) => {
		puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
		puzzlePieces[index].id = `${piece + this.dataset.puzzleref}`;
		});
	// and set the drop zone background image based on the puzzle the user selects
	gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
	//debugger;
}
	// function allowClick(event) {
	// console.log('started clickin an image');
	// }

	function allowDrag(event) {
		console.log('started draggin an image');
		event.dataTransfer.setData("text/plain", this.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragged over a drop zone');
	}

	function allowDrop(event) {
		// event.preventDefault();
		console.log('dropped draggin a drop zone');
		//go and get the dragged element's ID from the data transfer object
		let currentImage = event.dataTransfer.getData("text/plain");
		// add that image to whatever drop zones we're dropping our image on
		event.target.appendChild(document.querySelector(`#${currentImage}`));
	}

	function reset(event) {
		buttonHolder.reset();
		console.log('reset the drop zone');
	}

	//function allowDropById(event) {
		// event.preventDefault();
		//console.log('dropped by ID drop zone');
		//go and get the dragged element's ID from the data transfer object
		//let dropZones = document.getElementById(`#${gameBoard}`);
		// add that image to whatever drop zones we're dropping our image on
		//event.target.appendChild(document.getElementById(`#${currentImage}`));
		//dropZones.gameBoard.removeChild(dropZones);
	//}

// function reset('myForm') {
	//	myForm.reset();
	// console.log('reset the drop zone');


	//add event hanlding here -> how is the user going to use our app?
	// what triggers do we need?

	// click on the bottom to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	//buttonHolder.forEach(piece => piece.addEventListener('click', reset));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
		});




	// call the function and pass in the first nav button as a reference
	// research call, apply and bind -> look at MDN
	changeImageSet.call(puzzleButtons[3]);
})();
