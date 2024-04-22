function validarEmail(email) {
    const partes = email.split('@');

    if (partes.length !== 2) {
        return false;
    }

    const dominio = partes[1];

    const partesDeDominio = dominio.split('.');

    if (partesDeDominio.length < 2) {
        return false;
    }

    for (let i = 0; i < partesDeDominio.length; i++) {
        if (partesDeDominio[i].length === 0) {
            return false;
        }

        if (i === partesDeDominio.length - 2 && partesDeDominio[i + 1].length === 0) {
            return false;
        }
    }

    if (email.includes(' ')) {
        return false;
    }

    return true;
}

const emailDelUsuario = prompt("Por favor, ingrese su correo electrónico:");

if (validarEmail(emailDelUsuario)) {
    alert("Correo electrónico válido");
} else {
    alert("Formato de correo electrónico inválido");
}