function calculateAverage() {
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);

    if (isNaN(grade1) || isNaN(grade2)) {
        document.getElementById('result').textContent = 'Por favor, ingresar dos calificaciones válidas.';
        return;
    }

    const average = (grade1 + grade2) / 2;
    document.getElementById('result').textContent = 'El promedio es: ' + average.toFixed(2);
}