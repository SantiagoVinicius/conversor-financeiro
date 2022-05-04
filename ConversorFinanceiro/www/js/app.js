function ConverterRealDolar(){
    let reais = document.querySelector('#reais').value
    let dolar = 4.92
    valorConvertido = reais / dolar
    document.querySelector('#dolares').innerHTML =  valorConvertido
}

