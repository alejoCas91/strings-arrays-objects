// Reto-2: Validador de Contraseñas seguras

function containsNumber(password) {
    return /\d/.test(password);
}

function containsLetter(password) {
    return /[a-zA-Z]/.test(password);
}

function containsSpecialChar(password) {
    const specialChars = '!@#$%^&*()+=-{}[]:;"\'?<>,.|/\\~`_';
    for (let i = 0; i < password.length; i++) {
        if (specialChars.includes(password[i])) {
            return true;
        }
    }
    return false;
}

function validatePassword(password) {
    const lengthCondition = password.length >= 8;
    const numberCondition = containsNumber(password);
    const letterCondition = containsLetter(password);
    const specialCharCondition = containsSpecialChar(password);

    const notMetConditions = [];

    if (!lengthCondition) {
        notMetConditions.push('Al menos 8 caracteres');
    }
    if (!numberCondition) {
        notMetConditions.push('Al menos un número');
    }
    if (!letterCondition) {
        notMetConditions.push('Al menos una letra');
    }
    if (!specialCharCondition) {
        notMetConditions.push('Al menos un carácter especial');
    }

    if (notMetConditions.length > 0) {
        return {
            valid: false,
            message: 'Contraseña insegura. No cumple con las siguientes condiciones: ' + notMetConditions.join(', '),
        };
    } else {
        return {
            valid: true,
            message: 'Contraseña segura',
        };
    }
}

const password = prompt('Ingrese una contraseña');

const validationResult = validatePassword(password);

alert(validationResult.message);