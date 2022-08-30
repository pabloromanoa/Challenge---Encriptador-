var input = document.querySelector(".mensaje");
input.focus();
var output = document.querySelector(".mensajeSalida");
var noEncontrado = document.querySelector(".noEncontrado");
var ingresa = document.querySelector(".ingresa");
var botonCopiar = document.querySelector(".copiar");


    //funcion para transformar un var array para var string
    function arrayToString(array){

        var frase = array.join("");
        return frase;
        
    }

    //funcion para detectar no minusculas
    function detectarNoMinusculas(array){
        var i = 0;
        while(i <= array.length){
            var pattern = new RegExp("^(?=.*[a-z])");
            if(pattern.test(array[i])){
                i++
            }else{
                return true;
                break;
            }
            return false;
        }
    }

    //funcion para encriptar
    function encriptando(){
        var letras = [];
        if(input.value != "" ){
            letras = Array.from(input.value);
            if(detectarNoMinusculas(letras)){
                alert("Existen mayúsculas, números o símbolos especiales en la frase.  Vuelva a ingresar otra.")
            }else{
                for(var i = 0; i <= letras.length; i++){
                    if(letras[i] == "a"){
                        letras[i] = "ai"
                        }else{
                            if(letras[i] == "e"){
                            letras[i] = "enter"
                            }else{
                                if(letras[i] == "i"){
                                letras[i] = "imes"
                                }else{
                                    if(letras[i] == "o"){
                                    letras[i] = "ober"
                                    }else{
                                        if(letras[i] == "u"){
                                        letras[i] = "ufat"
                                        }
                                    }
                                }
                            }
                        }
                    }
                    noEncontrado.style.display = "none";
                    ingresa.style.display = "none";
                    if (window.screen.width < 1050){
                    output.style.display = "block"
                    botonCopiar.style.display ="block"
                }
                    output.value = (arrayToString(letras));
                    output.focus();
                }
            }else{             
                   if (window.screen.width < 1050){
                    output.style.display = "none"
                    botonCopiar.style.display ="none"
                }
                noEncontrado.style.display = "block";
                ingresa.style.display = "block";
                output.value = "";
            }
            input.value = "";
		    input.focus();
        }

    //funcion para desencriptar
    function desencriptando(){
        var letras = [];
        var encriptada = 1;
        if(input.value != "" ){
            letras = Array.from(input.value);
            if(detectarNoMinusculas(letras)){
                alert("Existen mayúsculas, números o símbolos especiales en la frase.  Vuelva a ingresarla.")
            }else{
                for(var i = 0; i <= letras.length; i++){
                    if(letras[i] == "a"){
                        if(chequearEncriptacionA(letras,i)){
                            letras.splice(i+1,1);
                            }else{
                                alert("La frase no se encuentra debidamente encriptada. Chequeela y vuelva a ingresarla.");
                                encriptada = 0;
                                break;
                            }
                        
                        }else{
                            if(letras[i] == "e"){
                                if(chequearEncriptacionE(letras,i)){
                                    letras.splice(i+1,4);
                                }else{
                                    alert("La frase no se encuentra debidamente encriptada. Chequeela y vuelva a ingresarla.");
                                    encriptada = 0;
                                    break;
                                }
                            }else{
                                if(letras[i] == "i"){
                                    if(chequearEncriptacionI(letras,i)){
                                        letras.splice(i+1,3);
                                    }else{
                                        alert("La frase no se encuentra debidamente encriptada. Chequeela y vuelva a ingresarla.");
                                        encriptada = 0;
                                        break;
                                    }
                                }else{
                                    if(letras[i] == "o"){
                                        if(chequearEncriptacionO(letras,i)){
                                            letras.splice(i+1,3);
                                        }else{
                                            alert("La frase no se encuentra debidamente encriptada. Chequeela y vuelva a ingresarla.");
                                            encriptada = 0;
                                            break;
                                        }
                                    }else{
                                        if(letras[i] == "u"){
                                            if(chequearEncriptacionU(letras,i)){
                                                letras.splice(i+1,3);
                                            }else{
                                                alert("La frase no se encuentra debidamente encriptada. Chequeela y vuelva a ingresarla.");
                                                encriptada = 0;
                                                break; 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if(encriptada == 1){
                        noEncontrado.style.display = "none";
                        ingresa.style.display = "none";
                        if (window.screen.width < 1050){
                            output.style.display = "block"
                            botonCopiar.style.display ="block"
                        }
                        output.value = (arrayToString(letras));
                        output.focus();
                    }else{
                        if (window.screen.width < 1050){
                            output.style.display = "none"
                            botonCopiar.style.display ="none"
                        }
                        noEncontrado.style.display = "block";
                        ingresa.style.display = "block"
                        output.value = "";
                    }

                }
            }else{
                if (window.screen.width < 1050){
                    output.style.display = "none"
                    botonCopiar.style.display ="none"
                }
                noEncontrado.style.display = "block";
                ingresa.style.display = "block";
                output.value = "";
            }
            input.value = "";
		    input.focus();
        }
        
    //funcion para copiar texto de salida
    function copiar(){
        var mensajeCopiado = document.querySelector(".mensajeSalida");
        mensajeCopiado.select();
        mensajeCopiado.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(mensajeCopiado.value);
    }

    //chequeo resolucion menor a 480 para que el boton copiar y la salida no se vean al inicar
    function chequearResolucion(){
        if (window.screen.width < 1050){
                output.style.display = "none"
                botonCopiar.style.display ="none"
        }
    }

    window.onload = chequearResolucion();

    var botonEncriptar = document.querySelector(".encriptar");
    botonEncriptar.onclick = encriptando;

    var botonDesencriptar = document.querySelector(".desencriptar");
    botonDesencriptar.onclick = desencriptando;

    var botonCopiar = document.querySelector(".copiar");
    botonCopiar.onclick = copiar;