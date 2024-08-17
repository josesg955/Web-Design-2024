function animar() {
    let elem = document.getElementById("anima");
    let stepValue = 0;
    let id = setInterval(resultado, 500);

    function resultado() {
        //valor total porcentual
        if (stepValue >= 100) {
            clearInterval(id);
            Swal.fire(
                'Estimado Usuario',
                'Reserva Confirmada',
                'warning'
            )

        } else {
            elem.style.width = (stepValue + 10) + "%";
            elem.innerHTML = (stepValue + 10) + "%";
            stepValue = (stepValue + 10);

        }
    }
}