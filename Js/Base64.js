
function cripto(){
    let cod = document.getElementById("cifras")
    let cryptValue = cod.value

    let codificarInp = document.getElementById("codificar")
    let codBotao = codificarInp.value

    if (cryptValue === "Base64" && codBotao === "cod"){
        let str = document.getElementById("codigo")
        let cod1 = str.value
        let res = document.getElementById("resultado")
        res.innerHTML = btoa(cod1)
    }
}


let base64 = btoa(cod1)
let decoded = atob(base64)

console.log(`Original: ${cod1}`)
console.log(`Base64: ${base64}`)
console.log(`Decoded: ${decoded}`)