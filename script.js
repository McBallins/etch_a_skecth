const newGridBtn = document.getElementById('newgrid');
const master = document.querySelector('.master');

newGridBtn.addEventListener('click', function makeNewGrid() {
  master.innerHTML = '';
  userSelection = prompt('How many squares would you like in the grid (1-100)x(1-100)?');
  if(userSelection > 100 || userSelection < 1) {
    master.textContent = "Must be a number between 1 and 100!";
  } else {
    makeGrid(userSelection);
  }
});

function makeGrid(userSelection) {
  const masterWidth = master.clientWidth/userSelection;
  const gridSize = Math.ceil(userSelection);
  for (r=0; gridSize>r; r++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.setAttribute('style', `display: flex; height: ${masterWidth}px`);
    for (s=0; gridSize>s; s++) {
      const newSquare = document.createElement('div');
      newSquare.classList.add('square');
      newSquare.setAttribute('style', `border: 1px solid black; box-sizing: border-box; width: ${masterWidth}px`);
      newRow.append(newSquare);
    }
    master.append(newRow);
  }
  addHoverEffect();
}

function addHoverEffect() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener("mouseover", function() {
      square.style.backgroundColor = 'red';
    });
    square.addEventListener("mouseout", function() {
      square.style.backgroundColor = 'white';
    });
  })
}