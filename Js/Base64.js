let cod = document.getElementById("cifras")
let btnCod = document.getElementById("traduzir")
const $tipoCod=document.querySelector(codififar);

function codBtn(){
    btnCod.innerHTML = "Codificar Mensagem!"
    
    btnCod.addEventListener("click", () => {
if($tipoCod.value==="codificar"){
//pregunta codigo cesar ou base 64



}else{
//pregunta codigo cesar ou base 64


}

        let cryptValue = cod.value

        if (cryptValue === "Base64"){
            let str = document.getElementById("codigo")
            let cod1 = str.value
            let res = document.getElementById("resultado")
            res.innerHTML = btoa(cod1)
        }else {
            console.log("asdad")
        }
    } )
}

function decodBtn(){
    btnCod.innerHTML = "Decodificar Mensagem!"

    btnCod.addEventListener("click", () => {
        let cryptValue = cod.value
        
        if (cryptValue === "Base64"){
            let str = document.getElementById("codigo")
            let cod1 = str.value
            let res = document.getElementById("resultado")
            res.innerHTML = atob(cod1)
        }else {
             console.log("fasdad")
        }
    } )
}