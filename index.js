let boardsize = 16;
let isMouseDown = false;  // Track the mouse down status

// Function to check if the mouse is pressed or released
function checkClickMouse(event) {
    if (event.type == 'mousedown') {
        isMouseDown = true;  // Mouse is pressed
    } else if (event.type == 'mouseup') {
        isMouseDown = false; // Mouse is released
    }
}

// Add event listeners for mouse down and up
document.addEventListener('mousedown', checkClickMouse);
document.addEventListener('mouseup', checkClickMouse);

const hoverEffect = function() {
    this.style.backgroundColor = 'black';
};

// Function to create the board based on the size
function createBoard(size) {
    let board = document.querySelector('.board');
    board.innerHTML = '';  // Clear the existing board

    // Set the grid template columns and rows based on the size
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create the squares
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);

        // Add event listener based on mouse status
        square.addEventListener('mouseover', function() {
            if (isMouseDown) { // Only change color when mouse is down
                square.style.backgroundColor = 'black';
            }
        });

        square.addEventListener('click', function() {
            square.style.backgroundColor = 'black'; // Change color on click
        });
    }
}

// Function to handle changing the board size based on user input
function changeSize(value) {
    let size = parseInt(value);
    if (isNaN(size) || size < 1 || size > 512) {
        alert("Please enter a valid number between 1 and 512");
    } else {
        createBoard(size); // Call the createBoard function with the new size
    }
}

// Set the default board size to 16 when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createBoard(16); // Create an initial 16x16 board
});

// Start button to display the board grid
document.getElementById('start').addEventListener('click', function() {
    let board = document.querySelector('.board');
    board.style.display = 'grid';  // Show the hidden div
});
