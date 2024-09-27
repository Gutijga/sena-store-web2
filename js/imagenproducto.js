function previewImage() {
    const file = document.getElementById('imagen').files[0];
    const preview = document.getElementById('preview-img');
    const reader = new FileReader();
    
    if (file) {
        reader.readAsDataURL(file);
        
        reader.onload = function(e) {
            preview.src = e.target.result;
        };
    }
}

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