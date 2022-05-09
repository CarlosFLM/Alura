const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function botonencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringEncriptar){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a", "ai"],["o", "ober"],["u","ufat"]]
    StringEncriptar = StringEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(StringEncriptar.includes(matrizCodigo[i][0])){
            StringEncriptar = StringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringEncriptar;
}

function botondesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function desencriptar(StringDesencriptar){
    let matrizCodigoD = [["enter", "e"],["imes","i"],["ai", "a"],["ober", "o"],["ufat","u"]]
    StringDesencriptar = StringDesencriptar.toLowerCase();
    for (let i= 0; i< matrizCodigoD.length; i++){
        if(StringDesencriptar.includes(matrizCodigoD[i][0])){
            StringDesencriptar = StringDesencriptar.replaceAll(matrizCodigoD[i][0],matrizCodigoD[i][1])
        }
    }
    return StringDesencriptar;
}

function botoncopiar(){
    var textcopia = document.querySelector(".input-text-area");
    textcopia.select();
    document.execCommand("copy");
}