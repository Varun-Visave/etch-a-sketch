const container = document.querySelector("#container");

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
const getDivs = container.querySelectorAll('.pixels');
const getClearButton = document.querySelector('.Clear');
const getParentContainer = document.querySelector('.Parent-Container');

function clear() {
  // getDivs.forEach(div => {
  //   div.style.backgroundColor = 'white';
  // });
  // console.log('check');
  let pixel = document.getElementsByClassName("pixels");
  for(let i = 0; i < (16*16); i++)
  {
    pixel[i].style.backgroundColor = '';
  }
}

container.addEventListener('mouseover', e => {
    let target = e.target
  
    if (target !== container) {
      target.style.backgroundColor = 'red';
    }
  })

getClearButton.addEventListener('click', clear);
makeGrid();