function getColors(pixel){
  colorString = pixel.style.backgroundColor.slice(4,-1);
  colors = colorString.split(',').map((color)=>color.trim());
  colors = colors.map((color)=>parseInt(color));
  return colors;
}

function setRandomColor(pixel){
  if (pixel.style.backgroundColor == ""){
    newRGB = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
    pixel.setAttribute('pass', 0);
  }else{
    pass = parseInt(pixel.getAttribute('pass'));
    if (pass >= 10){
      return;
    }
    colors = getColors(pixel).map((color)=>color * (10-pass-1) / (10-pass));
    newRGB = `rgb(${colors.join(',')})`;
    pixel.setAttribute('pass', pass + 1);
  }
  pixel.style.backgroundColor = newRGB;
}

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
    setRandomColor(this);
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