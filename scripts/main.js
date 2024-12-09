document.addEventListener('DOMContentLoaded', () => {
    // Control de la reproducción de música de fondo
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) backgroundMusic.volume = 0.03;

    // Manejo del menú y las secciones
    const menuItems = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    menuItems.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();

            // Ocultar todas las secciones
            sections.forEach(section => section.classList.remove('visible'));

            // Mostrar la sección correspondiente al enlace clicado
            const targetId = item.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.classList.add('visible');
        });
    });

    // Funcionalidades de la sección Funcionalidades

    // Comparar números
    const compararBtn = document.getElementById('compararBtn');
    const resultado = document.getElementById('resultado');
    if (compararBtn && resultado) {
        compararBtn.addEventListener('click', () => {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            if (!isNaN(num1) && !isNaN(num2)) {
                if (num1 > num2) {
                    resultado.textContent = 'El primer número es mayor.';
                } else if (num1 < num2) {
                    resultado.textContent = 'El segundo número es mayor.';
                } else {
                    resultado.textContent = 'Los números son iguales.';
                }
            } else {
                resultado.textContent = 'Por favor, ingrese números válidos.';
            }
        });
    }

    // Mostrar mes del año
    const mesBtn = document.getElementById('mesBtn');
    const mesInput = document.getElementById('mesInput');
    if (mesBtn && mesInput) {
        mesBtn.addEventListener('click', () => {
            const mes = parseInt(mesInput.value);
            const meses = [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ];
            if (mes >= 1 && mes <= 12) {
                alert(`El mes es: ${meses[mes - 1]}`);
            } else {
                alert('Por favor, ingrese un número válido entre 1 y 12.');
            }
        });
    }

    // Gestión de nombres
    const agregarBtn = document.getElementById('agregarBtn');
    const listaNombres = document.getElementById('listaNombres');
    if (agregarBtn && listaNombres) {
        agregarBtn.addEventListener('click', () => {
            const nombreInput = document.getElementById('nombreInput').value;
            if (nombreInput) {
                const nuevoNombre = document.createElement('p');
                nuevoNombre.textContent = nombreInput;
                listaNombres.appendChild(nuevoNombre);
                document.getElementById('nombreInput').value = ''; // Limpiar el campo de texto
            } else {
                alert('Por favor, ingrese un nombre.');
            }
        });
    }

    // Registro de usuarios
    const registroForm = document.getElementById('registroForm');
    const tablaUsuarios = document.getElementById('tablaUsuarios');
    if (registroForm && tablaUsuarios) {
        registroForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const id = document.getElementById('id').value;
            const cedula = document.getElementById('cedula').value;
            const nombre = document.getElementById('nombre').value;
            const fecha = document.getElementById('fecha').value;
            const ciudad = document.getElementById('ciudad').value;

            // Validaciones
            if (!id || !cedula || !nombre || !fecha || !ciudad) {
                alert('Por favor, complete todos los campos.');
                return;
            }

            const usuario = {
                id: id,
                cedula: cedula,
                nombre: nombre,
                fecha: fecha,
                ciudad: ciudad
            };

            agregarUsuario(usuario);
            registroForm.reset(); // Limpiar el formulario
        });

        function agregarUsuario(usuario) {
            const row = tablaUsuarios.insertRow();
            row.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.cedula}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.fecha}</td>
                <td>${usuario.ciudad}</td>`;
        }
    }
});
