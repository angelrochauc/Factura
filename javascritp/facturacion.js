function limpiar() {
    document.getElementById('eliminar').reset();
}

function agregar() {
    try { 
        var  a=  parseInt( document.getElementById("valor1").value) || 0,
            c = parseInt(document.getElementById("valor3").value) || 0,
            b = parseInt(document.getElementById("valor2").value) || 0,
            aa = a * 500,
            bb = b * 2000,
            cc = c * 300,
            s = cc + aa + bb;

        document.getElementById("subtotal").value = s;
        document.getElementById("iva").value = (s) * 0.19;

        var d = parseInt(document.getElementById("valor4").value) || 0,
            e = parseInt(document.getElementById("valor5").value) || 0,
            f = parseInt(document.getElementById("valor6").value) || 0,
            dd = d * 1500,
            ee = e * 2500,
            ff = f * 2000,
            ss = dd + ee + ff;

        document.getElementById("subtotal2").value = ss;
        document.getElementById("iva2").value = (ss) * 0.19;
    } catch (e) {

    }
}

function calcular() {
    let subtotal = parseInt(document.getElementById("subtotal").value) + parseInt(document.getElementById("subtotal2").value);
    let iva = parseInt(document.getElementById("iva").value) + parseInt(document.getElementById("iva2").value);
    let total = subtotal + iva;

    document.getElementById("subtotal3").value = subtotal;
    document.getElementById("iva3").value = iva;
    document.getElementById("total").value = total;
}

