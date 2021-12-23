const newGridBtn = document.getElementById('newgrid');
newGridBtn.addEventListener

const master = document.querySelector('.master');

function makeGrid(n) {
  master.innerHTML = ''
  let masterWidth = master.clientWidth/n;
  const gridSize = n;
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