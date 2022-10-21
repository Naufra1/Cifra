const cod = document.getElementById("cifras")
let btnCod = document.getElementById("traduzir")
let inc = document.getElementById("incremento")
let incLabel = document.getElementById("inclabel")
let str = document.getElementById("codigo")


//Função para traduzir.
btnCod.addEventListener("click", () => {
    let txt = str.value
    let cod1 = str.value
    const res = document.getElementById("resultado")
    let codInp = document.querySelector('input[name = "tipocod"]:checked').value
    let somadorCesar = inc.value
    let crct
    let novoCrct
    let txtCodificado = ""

    //Codificar e Decodificar em Base64.
    if (cod.value === "Base64"){
        if(codInp === "codificar"){
        res.innerHTML = btoa(cod1)
    }else {
            res.innerHTML = atob(cod1)
        }
    } else {
        if (codInp === "codificar"){ //Codificar e Decodificar em Cesar.
            for (var i = 0; i < txt.length; i++){ //Transformar em caracteris.
                crct = txt.charCodeAt(i)

                if ((crct >= 65 && crct <= 90) || (crct >= 97 && crct <= 122)){
                    if(crct >= 65 && crct <= 90){ //Para maiusculas
                        novoCrct = crct + Number(somadorCesar)

                        if(novoCrct > 90){
                            novoCrct = 64 + novoCrct - 90
                            txtCodificado += String.fromCharCode(novoCrct)
                        } else{
                            txtCodificado += String.fromCharCode(novoCrct)
                        }
                    } else { //Para minúsculas
                        novoCrct = crct + Number(somadorCesar)
                        if(novoCrct > 122){
                            novoCrct = 96 + novoCrct - 122
                            txtCodificado += String.fromCharCode(novoCrct)
                        } else {
                            txtCodificado += String.fromCharCode(novoCrct)
                     }
                    }
                } else {
                    txtCodificado += txt.charAt(i)
                }
            }
            res.innerHTML = txtCodificado
        }else {

            for (var i = 0; i < txt.length; i++){ //Transformar em caracteris.
                crct = txt.charCodeAt(i)

                if ((crct >= 65 && crct <= 90) || (crct >= 97 && crct <= 122)){
                    if(crct >= 65 && crct <= 90){ //Para maiusculas
                        novoCrct = crct - Number(somadorCesar)

                        if(novoCrct < 65){
                            novoCrct = 90 - (64 - novoCrct)
                            txtCodificado += String.fromCharCode(novoCrct)
                        } else{
                            txtCodificado += String.fromCharCode(novoCrct)
                        }
                    } else { //Para minúsculas
                        novoCrct = crct - Number(somadorCesar)
                        if(novoCrct < 97){
                            novoCrct = 122 - (96 - novoCrct)
                            txtCodificado += String.fromCharCode(novoCrct)
                        } else {
                            txtCodificado += String.fromCharCode(novoCrct)
                     }
                    }
                } else {
                    txtCodificado += txt.charAt(i)
                }
            }
            res.innerHTML = txtCodificado
        }
    }
} )

cod.addEventListener("click", () =>{ //função para fazer o slider aparecer.
    if (cod.value === "Cesar"){
        inc.style.opacity = "1"
        incLabel.style.opacity = "1"
        inc.style.transition = "0.7s"
        incLabel.style.transition = "0.7s"
        inc.addEventListener("change", () => {
            incLabel.textContent = inc.value
        })
    } else{
        inc.style.opacity = "1"
        incLabel.style.opacity = "1"
    }
})

function codTxt(){ //Função para modificar o botão ao clicar no input "codificar".
    btnCod.innerHTML = "Codificar Mensagem!"
}
function decodTxt(){ //Função para modificar o botão ao clicar no input "decodificar".
    btnCod.innerHTML = "Decodificar Mensagem!"
}