function cleanCanvas(){
  pixelRows = document.querySelectorAll('.pixel-row');
  pixelRows.forEach((pixelRow)=>pixelRow.remove());
}

function createCanvas(res){
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

  pixels = document.querySelectorAll('.pixel');

  function pixelHover(e){
    this.style.backgroundColor = 'black';
  }

  pixels.forEach((pixel)=>{
    pixel.addEventListener('mouseover', pixelHover);
  });
}

createCanvas(16);