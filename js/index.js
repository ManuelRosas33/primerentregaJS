

function calcularCuota() {
    
    const monto = parseFloat(document.getElementById('monto').value);
    const plazo = parseInt(document.getElementById('plazo').value);
    const tasa = parseFloat(document.getElementById('tasa').value);


    const tasaMensual = tasa / 100 / 12;
    const cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Cuota mensual: $${cuota.toFixed(2)}`;
}