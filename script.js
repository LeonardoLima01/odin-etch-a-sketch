let cells;

// re-size page
const createGrid = (grid_size) =>{
    const grid = document.querySelector('#grid');
    grid.style.boxSizing = 'border-box'
    width = 600 / grid_size;
    height = 700 / grid_size;
    for(let i = 0; i < grid_size; i++) {
        let row = document.createElement("div");

        for(let j = 0; j < grid_size; j++) {
            let cell = document.createElement("div");

            cell.style.boxSizing = 'border-box';
            cell.style.width = `${width}px`;
            cell.style.height = `${height}px`;
            cell.style.background = "white";
            cell.style.display = 'inline-block';
            cell.style.border = '1px solid black';
            cell.className = 'cell';

            row.appendChild(cell);
        }
        row.style.cssText = `height: ${height}px`;
        grid.appendChild(row);

        // fix 64x64 grid bug
        if(grid_size > 57){
            grid.style.marginTop = '-4px';
        }
        else{
            grid.style.marginTop = '0px';
        }
    }

    //detect mouse:over
    cells = document.querySelectorAll('.cell');
    for (i of cells){
        i.addEventListener('mouseover', function(){
            // if rgb
            if (color == 'rgb'){
                return this.style.background = '#' + Math.floor(Math.random()*16777215).toString(16)
            }
            // if not rgb
            else{
                return this.style.background = color;
            }
    })
}
}

createGrid(8);
let color = 'white';

const clear = () =>{
    clearButton = document.querySelector('#clear')

    clearButton.addEventListener('click', () => {
        for (i of cells){
            i.style.background = 'white';
        }
    })
}

const toggleGrid = () =>{
    toggleButton = document.querySelector('#toggle')

    toggleButton.addEventListener('click', () =>{
        for (i of cells){
            if (i.style.border == '1px solid black')
            {
                i.style.border = '0px solid black'
            }
            else{
                i.style.border = '1px solid black'
            }
        }
    })
}

const colorPicker = () =>{
    colorPickerButton = document.querySelector('#color_picker')

    colorPickerButton.addEventListener('input', (i) =>{
        color = i.target.value
    })
}

const changeGridSize = () =>{
    gridSizeSlider = document.querySelector('#grid_size_slider')
    gridSizeOutput = document.querySelector('#grid_size_output')

    gridSizeOutput.textContent = gridSizeSlider.value;

    gridSizeSlider.addEventListener('input', (i) =>{
        gridSizeOutput.textContent = i.target.value;

        document.querySelector('#grid').innerHTML = '';
        createGrid(i.target.value);   
    })
}

const detectRgbButton = () =>{
    rgbButton = document.querySelector('#rgb')

    rgbButton.addEventListener('click', () =>{
        color = 'rgb';
    })
}

detectRgbButton();
colorPicker();
changeGridSize();
clear();
toggleGrid();