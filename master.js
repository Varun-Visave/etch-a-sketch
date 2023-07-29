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
        // const newLine = document.createElement('br');
        // container.appendChild(newLine);
    }
}

makeGrid();