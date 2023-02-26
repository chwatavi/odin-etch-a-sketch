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

function resetCanvas(e){
  let UserInput = prompt('What is the number of squares per side?');

  if (isNaN(UserInput)){
    alert("Invalid Input.");
    return;
  }

  let res = parseInt(UserInput);

  if (res <= 0 || res > 100){
    alert ("Please enter a positive number no greater than 100.");
    return;
  }

  cleanCanvas();
  createCanvas(res);
}

resizeBtn = document.querySelector('.resize');
resizeBtn.addEventListener('click', resetCanvas);