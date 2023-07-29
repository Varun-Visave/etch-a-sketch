const container = document.querySelector("#container");
const getDivs = container.querySelectorAll('.pixels');
const getClearButton = document.querySelector('.Clear');
const getParentContainer = document.querySelector('.Parent-Container');
const getColorPicker = document.querySelector('.Color');

function makeGrid()
{
    for(let i = 0; i < 16; i++)
    {
        for(let j= 0; j < 16; j++)
        {
            const newDiv = document.createElement('div');
            newDiv.classList.add('pixels');
            container.appendChild(newDiv);
        }
    }
}

function clear() {
  let pixel = document.getElementsByClassName("pixels");
  for(let i = 0; i < (16*16); i++)
  {
    pixel[i].style.backgroundColor = '';
  }
}

container.addEventListener('mouseover', e => {
    let target = e.target
  
    if (target !== container) {
      target.style.backgroundColor = selectColor();
    }
  })
function selectColor()
{
  return getColorPicker.value;
}
getClearButton.addEventListener('click', clear);
makeGrid();