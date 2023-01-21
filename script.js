let cells;

// re-size page
const createGrid = (grid_size) =>{
    const grid = document.querySelector('#grid');
    width = 600 / grid_size
    height = 700 / grid_size
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
    }

    //detect mouse:over
    cells = document.querySelectorAll('.cell');
    for (i of cells){
        i.addEventListener('mouseover', function(){
            if (color != '#'){
                return this.style.background = color;
            }
            //if rgb
            else{
                return this.style.background = '#' + Math.floor(Math.random()*16777215).toString(16)
            }
        })
    }
}

createGrid(8);
let color = 'white';

// detect size buttons
const changeGridSize = () =>{
    const btns = document.querySelectorAll('#btns2 button')

    for (i of btns){
        i.addEventListener('click', function() {

        document.querySelector('#grid').innerHTML = '';
        if (this.textContent.length == 3){
            return createGrid(this.textContent.slice(0,1));
        }
        else{
            return createGrid(this.textContent.slice(0,2));
        }          
        });
    }
    
}
// detect color change buttons being pressed
const getColor = () =>{
    const colorButtons = document.querySelectorAll('#btns button')
    
    for (i of colorButtons){
        i.addEventListener('click', function(){
            btn = this.textContent
    
            if (btn == 'Black'){
                return color = 'black';
            }
            else if (btn == 'White'){
                return color = 'white';
            }
            else{
                return color = '#';
            }
        })
    }
}

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

changeGridSize();
getColor();
clear();
toggleGrid();