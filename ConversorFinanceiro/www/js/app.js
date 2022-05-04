function ConverterRealDolar(){

    let api = 'https://economia.awesomeapi.com.br/last/USD'

    $.ajax({
        type: "GET",
        url:  api,
        success: (function(){
            console.log("deu certo")
        }),
        beforeSend:(function(){
            console.log("Processando")
        })
    })

    let reais = document.querySelector('#reais').value
    let dolar = 4.92
    valorConvertido = reais / dolar
    document.querySelector('#dolares').innerHTML =  valorConvertido
}

