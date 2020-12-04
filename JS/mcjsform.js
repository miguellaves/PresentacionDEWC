window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click',val,false);
}

function val(item) {
    if (valtxt(this) && valmail() && valtlf()) {
        alert ("Information send, Thanks!");
        //document.getElementById("envia2").innerHTML = "SEND!";
        return true;
    } else {
        item.preventDefault();
        return false;
    }
}

function valtxt(txt) {
    var box = txt.form;
    for (var i = 0; i < box.elements.length; i++) {
        box.elements[i].className = "";
        if (box.elements[i].type == "text" && box.elements[i].value == "") {
            box.elements[i].className = "error";
            box.elements[i].focus();
            document.getElementById("errores").innerHTML = "ERROR: "+box.elements[i].name.toUpperCase();
            return false;
        } 
    }
    return true;
}

function valmail() {
    var pattern = /^[\w+\.]{2,}@([\w+]{2,}\.)+([\w+]{2,4})$/;

    if (!pattern.test(document.getElementById("email").value)) {
        document.getElementById("errores").innerHTML = "ERROR: Write a valid mail.";
        document.getElementById("email").focus();
        document.getElementById("email").className = "error";       
        return false;  
    }
    document.getElementById("email").className = "";
    return true;
}

function valtlf() {
    var pattern = /^\d{9}$/;
    
    if (!pattern.test(document.getElementById("telefono").value)) {
        document.getElementById("errores").innerHTML = "ERROR: The number phone should have 9 digits.";
        document.getElementById("telefono").className = "error";
        document.getElementById("telefono").focus();
        return false;
    }
    document.getElementById("telefono").className = "";
    return true;
}