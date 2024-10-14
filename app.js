const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const borderInput = document.getElementById('borderInput');
const textInput = document.getElementById('textInput');
const fontSelect = document.getElementById('fontSelect');
const rectangle = document.getElementById('rectangle');
const textInside = document.getElementById('textInside');

// Har bir input o'zgarganda to'rtburchakni yangilash
widthInput.addEventListener('input', updateRectangle);
heightInput.addEventListener('input', updateRectangle);
borderInput.addEventListener('input', updateRectangle);
textInput.addEventListener('input', updateText);


function updateRectangle() {
    const width = widthInput.value + 'px';
    const height = heightInput.value + 'px';
    const border = borderInput.value + 'px solid black';
    
    // To'rtburchakni o'lcham va borderini o'zgartirish
    rectangle.style.width = width;
    rectangle.style.height = height;
    rectangle.style.border = border;
}

function updateText() {
    // Yozilgan textni o'rtaga joylash
    textInside.textContent = textInput.value;
}
