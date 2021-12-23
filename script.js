const master = document.querySelector('.master');

function makeGrid(n) {
  master.innerHTML = ''
  let masterWidth = master.clientWidth/n;
  const gridSize = n;
  for (r=0; gridSize>r; r++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('style', `display: flex; height: ${masterWidth}px`);
    for (s=0; gridSize>s; s++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.setAttribute('style', `border: 1px solid black; margin; 0 -1 0 -1 box-sizing: border-box; width: ${masterWidth}px`);
      row.append(square);
    }
    master.append(row);
  }
}