function addNewProductForm() {
    const formContainer = document.getElementById('form-container');

    // Crear un nuevo contenedor para el formulario
    const newForm = document.createElement('div');
    newForm.className = 'formulario';

    // Agregar el contenido del formulario
    newForm.innerHTML = `
        <h2 class="articulo-titulo">Título del Artículo</h2>
        <label for="imagen">Subir imagen del artículo:</label>
        <input type="file" name="imagen[]" accept="image/*" required onchange="previewImage(this)"><br><br>
        
        <label for="nombre">Nombre del artículo:</label>
        <input type="text" name="nombre[]" required oninput="updateTitle(this.value, this.closest('.formulario'))"><br><br>

        <label for="descripcion">Descripción del artículo:</label>
        <textarea name="descripcion[]" rows="4" required></textarea><br><br>

        <label for="tallas">Tallas disponibles:</label>
        <div class="tallas-container">
            <div class="input-group">
                <input type="text" name="tallas[]" placeholder="Ej: S" required>
                <button type="button" onclick="addSize(this)">+</button>
            </div>
        </div><br><br>

        <label for="cantidad">Cantidad de productos:</label>
        <input type="number" name="cantidad[]" min="1" required><br><br>

        <label for="valorSinIva">Valor sin IVA:</label>
        <input type="number" name="valorSinIva[]" step="0.01" required><br><br>

        <label for="valorConIva">Valor con IVA:</label>
        <input type="number" name="valorConIva[]" step="0.01" required><br><br>

        <label for="estado">Estado del producto:</label>
        <select name="estado[]">
            <option value="habilitado">Habilitado</option>
            <option value="deshabilitado">Deshabilitar</option>
        </select><br><br>

        <div class="button-container">
            <button type="button" class="btn-eliminar" onclick="removeForm(this)">Eliminar</button>
        </div>
    `;

    // Agregar el nuevo formulario al contenedor
    formContainer.appendChild(newForm);
}

// Función para eliminar el formulario
function removeForm(button) {
    const form = button.closest('.formulario');
    if (form) {
        form.remove(); // Eliminar el formulario del DOM
    }
}

// Función para actualizar el título dinámicamente
function updateTitle(nombre, form) {
    const titleElement = form.querySelector('.articulo-titulo');
    titleElement.textContent = nombre || 'Título del Artículo';
}

// Función de previsualización de la imagen
function previewImage(input) {
    const file = input.files[0];
    const previewImg = input.closest('.formulario').querySelector('.preview-img');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImg.src = e.target.result;
            previewImg.style.display = 'block'; // Mostrar la imagen al cargar
        };
        reader.readAsDataURL(file);
    } else {
        previewImg.src = '';
        previewImg.style.display = 'none';
    }
}

// Función para agregar nuevas tallas al formulario específico
function addSize(button) {
    // Encuentra el contenedor de tallas del formulario actual
    const inputGroup = button.closest('.input-group');
    const container = button.closest('.tallas-container');
    
    // Crea un nuevo campo de tamaño
    const newSizeInput = document.createElement('input');
    newSizeInput.type = 'text';
    newSizeInput.name = 'tallas[]';
    newSizeInput.placeholder = 'Ej: S';
    newSizeInput.required = true;
    
    // Inserta el nuevo campo antes del botón
    container.insertBefore(newSizeInput, inputGroup.querySelector('button'));
}
