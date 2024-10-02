// Get the button element
const buttonOne = document.getElementById('buttonOne');

// Adding an event listener to the button to create a grid
buttonOne.addEventListener('click', function() {
    // Get the dimensions of the grid from the selector
    const dims = document.getElementById('dimensions').value;
    // Create a container for the grid
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('id', 'gridContainer');
    gridContainer.style.marginTop = "20px";
    document.body.appendChild(gridContainer);

    // Create the rows and columns of the grid
    for (var i = 0; i < dims; i++  ) {
        // Create a row for the grid
        var row = document.createElement('div');
        row.className = "grid-row";
        for(var x = 1; x < dims; x++) {
            var cell = document.createElement('div');
            cell.className = "grid-col";
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
});


// Add mouseover event to make cells change color when hovered
document.addEventListener('mouseover', function(event) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (event.target.classList.contains('grid-col')) {
        event.target.style.backgroundColor = '#' + randomColor;
    }
});


