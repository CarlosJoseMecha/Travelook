/****** Form Validation ******/

//inputs
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
//formulario
const form = document.getElementById('registerForm');
//Validation colors
const green = '#4caf50';
const red = '#f44336';

//Validaciones

//Validar Nombre
function validateFirstName() {
  //comprobamos si esta vacio
  if (checkIfEmpty(firstName)) return;
  //comprobamos si contiene solo letras
  if (!checkIfOnlyLetters(firstName)) return;
  return true;
};
//Validar apellido
function validateLastName() {
  //comprobamos si esta vacio
  if (checkIfEmpty(lastName)) return;
  //comprobamos si contine solo letras
  if (!checkIfOnlyLetters(lastName)) return;
  return true;
};
//Validar password
function validatePassword() {
  //comprobamos si esta vacio
  if (checkIfOnlyLetters(password)) return;
  //comprobamos longitud del password 
  if (!meetLength(password, 6, 20)) return;
  //comoprobamos con nuestros criterios
  //1.  a
  //2. a 1
  //3. A a 1
  //4. A a 1 @
  if (!containsCharacters(password, 1)) return;
  return true;
};
//Validar email
function validateEmail() {
  //comprobamos si esta vacio
  if (checkIfEmpty(email)) return;
  if (!containsCharacters(email, 5)) return;
  return true;
}

//Utilidades***************************
//checkIfEmpty
function checkIfEmpty() {
  if (isEmpty(field.value.trim())) {
    //decimos que es invalido
    setInvalid(field, `${field.name} no puede estar vacío`);
    return true;
  } else {
    //decimos que es valido
    setValid(field);
    return false;
  }
};
//isEmpty
function isEmpty(value) {
  if (value === ' ') return true;
  return false;
};

//setInvalid
function setInvalid(field, message) {
  field.className = 'invalid'
  document.getElementById('helper-text') = message;
  field.classList.add(red);
};
//setValid
function setValid(field, message) {
  field.className = 'valid';
  field.nextElementSibling.innerHTML = '';
};

//checkIfOnlyLetters
function checkIfOnlyLetters(field) {
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    return true;

  } else {
    setInvalid(field, `${field.name} solo puede contener letras`);
  }
};
//meetLength
function meetLength(field, minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length < maxLength) {
    setValid(field);
    return true;
  } else if (field.value.length < minLength) {
    setInvalid(field, `${field.name} debe tener al menos ${minLength} caracteres`);
    return false;
  } else {
    setInvalid(field, `${field.name} debe ser más corta que ${maxLength}`);
    return false;
  }
}
//containsCharacters
function containsCharacters(field, code) {
  let regEx;
  switch (code) {
    case 1:
      //solo letras
      regEx = /(?=.*[a-zA-Z])/;
      return matchWithRegEx(regEx, field, 'Debe contener por lo menos una letra');
    case 2:
      //letras y numeros
      regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
      return matchWithRegEx(regEx, field, 'Debe contener al menos una letra y un número');
    case 3:
      //letras Mayusculas, minusculas y numero
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      return matchWithRegEx(regEx, field, 'Debe contener al menos una letra mayúscula, una minúscula y un número');
    case 4:
      //mayuscula, minuscula, numero y caracter especial
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
      return matchWithRegEx(regEx, field, 'Debe contener al menos una letra mayúscula, una minúscula, un número y un caracter especial');
    case 5:
      //Email 
      regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return matchWithRegEx(regEx, field, 'Introduzca un email valido')
    default:
      return false;
  }
}