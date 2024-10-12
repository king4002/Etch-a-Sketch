// Select DOM elements
const container = document.getElementById('container');
const resizeButton = document.getElementById('resize-button');

// Function to create the grid
function createGrid(size) {
    console.log(`Creating a grid of size ${size}x${size}`);
    // Clear existing grid
    container.innerHTML = '';

    // Calculate square size based on the number of squares per side
    // Ensuring the container remains 960px wide
    const squareSize = 960 / size;

    // Update container height to match
    container.style.height = `${squareSize * size}px`;

    // Create grid squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        // Set the size explicitly to maintain square shape
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover event listener
        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
        });

        container.appendChild(square);
    }
}

// Function to prompt user for new grid size
function promptNewSize() {
    console.log('Resize button clicked');
    let newSize = prompt('Enter the number of squares per side (max 100):', 16);
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid number.');
        return;
    }

    if (newSize > 100) {
        alert('Maximum size is 100. Setting grid size to 100.');
        newSize = 100;
    }

    createGrid(newSize);
}

// Initial grid creation
createGrid(16);

// Event listener for the resize button
resizeButton.addEventListener('click', promptNewSize);
