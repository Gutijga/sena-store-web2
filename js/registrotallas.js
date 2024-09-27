function addSize() {
    var container = document.getElementById('tallas-container');
    var inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';
    inputGroup.innerHTML = `
        <input type="text" name="tallas[]" placeholder="Ej: S" required>
        <button type="button" onclick="removeSize(this)">-</button>
    `;
    container.appendChild(inputGroup);
}

function removeSize(button) {
    var container = document.getElementById('tallas-container');
    container.removeChild(button.parentElement);
}