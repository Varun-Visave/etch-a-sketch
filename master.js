const container = document.querySelector("#container");
const getClearButton = document.querySelector('.Clear');
const getColorPicker = document.querySelector('.Color');
const blackHueRadio = document.getElementById("Black-Hues");
const rainbowRadio = document.getElementById("Rainbow"); 
const eraserRadio = document.getElementById("Eraser"); 
const resetRadio = document.getElementById("Normal");
let pixel = document.getElementsByClassName("pixels");


function makeGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('pixels');
      container.appendChild(newDiv);
    }
  }
  draw();
}

function clear() {
  for (let i = 0; i < (16 * 16); i++) {
    pixel[i].style.backgroundColor = '';
  }
}

function selectColor() {
  return getColorPicker.value;
}

function draw()
{
  for(let i = 0; i < pixel.length; i++)
  {
    pixel[i].addEventListener('mouseover', colorOption)
  }

function colorOption(){
  if(blackHueRadio.checked)
  {
    this.style.backgroundColor = generateBlackShades();
  }
  if(rainbowRadio.checked)
  {
    this.style.backgroundColor = generateRainbowShades();
  }
  if(resetRadio.checked)
  {
    this.style.backgroundColor = selectColor();
  }
  if(eraserRadio.checked)
  {
    this.style.backgroundColor =  "";
  }
}
}

// Event listener for the "Clear" button
getClearButton.addEventListener('click', clear);

// Event listener for the "Black-Hues" radio button
function generateBlackShades()
    {
      const randomValue = Math.random();
      const shadeValue = Math.floor(randomValue * 225);
      const blackShade = `rgb(${shadeValue}, ${shadeValue}, ${shadeValue})`;
      return blackShade;
    }

// Event listener for the "Rainbow" radio button
function generateRainbowShades()
    {
      const randomValue = () => Math.floor(Math.random() * 256);
      const redValue = randomValue();
      const greenValue = randomValue();
      const blueValue = randomValue();
      return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    
    }

// Event listener for the "Eraser" radio button

// Functions to handle different color options
makeGrid();