function chequearEncriptacionA(frase,posicion){
    if(frase[posicion + 1] == "i"){
        return true;
    }else{
        return false;
    }
    
}

function chequearEncriptacionE(frase,posicion){
    if(frase[posicion + 1] == "n" && frase[posicion + 2] == "t" && frase[posicion + 3] == "e" && frase[posicion + 4] == "r"){
        return true;
    }else{
        return false;
    }
}

function chequearEncriptacionI(frase,posicion){
    if(frase[posicion + 1] == "m" && frase[posicion + 2] == "e" && frase[posicion + 3] == "s"){
        return true;
    }else{
        return false;
    }
}

function chequearEncriptacionO(frase,posicion){
    if(frase[posicion + 1] == "b" && frase[posicion + 2] == "e" && frase[posicion + 3] == "r"){
        return true;
    }else{
        return false;
    }
}

function chequearEncriptacionU(frase,posicion){
    if(frase[posicion + 1] == "f" && frase[posicion + 2] == "a" && frase[posicion + 3] == "t"){
        return true;
    }else{
        return false;
    }
}