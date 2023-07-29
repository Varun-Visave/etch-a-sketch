// defining required constants
const container = document.querySelector("#container");
const getClearButton = document.querySelector('.Clear');
const getColorPicker = document.querySelector('.Color');
const blackHueRadio = document.getElementById("Black-Hues");
const rainbowRadio = document.getElementById("Rainbow"); 
const eraserRadio = document.getElementById("Eraser"); 
const resetRadio = document.getElementById("Normal");
let pixel = document.getElementsByClassName("pixels");
getColorPicker.value = '#00e0fa'

//  Generating grid
function makeGrid() 
{
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('pixels');
      container.appendChild(newDiv);
    }
  }
  draw();
}

//  Defining function which resets the grid
function clear() 
{
  for (let i = 0; i < (16 * 16); i++) 
  {
    pixel[i].style.backgroundColor = '';
  }
}
//   taking color from the color picker
function selectColor() 
{
  return getColorPicker.value;
}

//  Defining draw function which is reponsible for executing the any one option
function draw()
{
    for(let i = 0; i < pixel.length; i++)
    {
      pixel[i].addEventListener('mouseover', colorOption)
    }
  //  defining options which can be swtiched to
  function colorOption()
  {
    //  checks which radio button is selected (By default normal is checked)
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
//  adding listener to the clear button
getClearButton.addEventListener('click', clear);

//  function which returns random shade of black
function generateBlackShades()
  {
    const randomValue = Math.random();
    const shadeValue = Math.floor(randomValue * 225);
    const blackShade = `rgb(${shadeValue}, ${shadeValue}, ${shadeValue})`;
    return blackShade;
  }

//  function which returns random colors 
function generateRainbowShades()
  {
    const randomValue = () => Math.floor(Math.random() * 256);
    const redValue = randomValue();
    const greenValue = randomValue();
    const blueValue = randomValue();
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  }

makeGrid();