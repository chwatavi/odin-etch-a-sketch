let res = 16;
canvas = document.querySelector('.canvas');
for (let i = 0; i < res; i++){
  let pixelRow = document.createElement('div');
  pixelRow.classList.add('pixel-row');
  for (let j = 0; j < res; j++){
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelRow.appendChild(pixel);
  }
  canvas.appendChild(pixelRow);
}