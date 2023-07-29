const container = document.getElementById("container");

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

const getDivs = document.querySelector('.pixels');

container.addEventListener('mouseover', e => {
    var target = e.target
  
    if (target !== container) {
      target.classList.add('hovered')
    }
  })


makeGrid();