const proyectos = document.querySelectorAll('.proyecto');
const tarjetaFrontal = document.querySelector('.tarjeta-frontal');
const detalles = document.querySelector('.tarjeta-detalles');
const btnVolver = document.querySelector('.btn-volver');

var idProyecto;

proyectos.forEach(proyecto => {
    proyecto.addEventListener('click', () => {
        const id = proyecto.getAttribute('data-id');
        idProyecto = id;
        const detalles = document.getElementById(id);

        tarjetaFrontal.classList.add('oculto');
        detalles.classList.remove('oculto');
        btnVolver.classList.remove('oculto');
    });
});

btnVolver.addEventListener('click', () => {
    var proyecto = document.getElementById(idProyecto);

    tarjetaFrontal.classList.remove('oculto');
    proyecto.classList.add('oculto');
    btnVolver.classList.add('oculto');
});