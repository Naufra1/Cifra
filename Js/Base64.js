let cod = document.getElementById("cifras")
let btnCod = document.getElementById("traduzir")

//Botão para Traduzir  
btnCod.addEventListener("click", (event) => {
    event.preventDefault()
    let str = document.getElementById("codigo")
    let cod1 = str.value
    let res = document.getElementById("resultado")
    let codInp = document.querySelector('input[name = "tipocod"]:checked').value
    //Codificação da Base64
    if (cod.value === "Base64"){
        if(codInp === "c"){
        res.innerHTML = btoa(cod1)
    }else if(codInp === "d"){
            res.innerHTML = atob(cod1)
        }
    } else{
        
    }
} )

function codTxt(){
    btnCod.innerHTML = "Codificar Mensagem!"
}

function decodTxt(){
    btnCod.innerHTML = "Decodificar Mensagem!"
}