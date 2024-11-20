document.getElementById('changeTextColorBtn').addEventListener('click', function() {
    const textElement = document.getElementById('text-element');
    textElement.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

// Resize Image
document.getElementById('resizeImageBtn').addEventListener('click', function() {
    const image = document.getElementById('sample-image');
    image.classList.toggle('enlarged');
});

// Remove Last Element
document.getElementById('removeElementBtn').addEventListener('click', function() {
    const outputSection = document.getElementById('output');
    const lastElement = outputSection.lastElementChild;
    if (lastElement) {
        outputSection.removeChild(lastElement);
    }
});

// Toggle Class on Div
document.getElementById('toggleClassBtn').addEventListener('click', function() {
    const divElement = document.getElementById('text-element');
    divElement.classList.toggle('highlight');
});

// Reset Page
document.getElementById('resetPageBtn').addEventListener('click', function() {
    // Reset text color, image size, and last element removal
    const textElement = document.getElementById('text-element');
    textElement.style.color = '#2d3436';
    
    const image = document.getElementById('sample-image');
    image.classList.remove('enlarged');

    const outputSection = document.getElementById('output');
    while (outputSection.lastElementChild) {
        outputSection.removeChild(outputSection.lastElementChild);
    }

    const newTextElement = document.createElement('div');
    newTextElement.id = 'text-element';
    newTextElement.textContent = "This is a sample text element.";
    outputSection.appendChild(newTextElement);
}
);