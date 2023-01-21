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
            cell.style.display = 'inline-block'
            cell.style.border = '1px solid black'

            row.appendChild(cell);
        }
        row.style.cssText = `height: ${height}px`
        grid.appendChild(row);
    }
}
createGrid(8)

const btns = document.querySelectorAll('#btns2 button')

for (i of btns) {
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