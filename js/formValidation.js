//! ****** Form Validation ******/
//inputs
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const gender = document.getElementById('gender');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');

//formulario
const form = document.getElementById('registerForm');
const formLogin = document.getElementById('loginForm');
//Validation colors
const green = '#4caf50';
const red = '#f44336';

//Prevencion de comportamiento default
// form.addEventListener('submit', function (event) {
//   event.preventDefault();
// });
//Prevencion de comportamiento default
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

});


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
  //comprobar que esta vacio
  if (checkIfEmpty(password)) return;
  //comprobacion de longitud, podemos ajustarlo como queramos, longitud min  y longitud max
  if (!meetLength(password, 3, 20)) return;
  //code para expresiones regulares de comprobacion
  // 1- a
  // 2- a 1
  // 3- A a 1
  // 4- A a 1 @
  if (!containsCharacters(password, 3)) return;
  return true;
};

function validateConfirmPassword() {
  //comprueba si esta vacio
  if (checkIfEmpty(confirmPassword)) return;
  if (password.className !== 'form-control form-input-travelook valid') {
    setInvalid(confirmPassword, 'La contraseña debe ser valida');
    return;
  }
  //if they match
  if (password.value !== confirmPassword.value) {
    setInvalid(confirmPassword, 'La contraseña debe coincidir');
    return;
  } else {
    setValid(confirmPassword);
  }
  return true;
};
//Validar email
function validateEmail() {
  //comprobamos si esta vacio
  if (checkIfEmpty(email)) return;
  if (!containsCharacters(email, 5)) return;
  return true;
}
//  Login ------------------------------------------------------- 
//Validar email login
function validateLoginEmail() {
  //comprobamos si esta vacio
  if (checkIfEmpty(loginEmail)) return;
  if (!containsCharacters(loginEmail, 5)) return;
  return true;
}
//Validar login password
function validateLoginPassword() {
  //comprobar que esta vacio
  if (checkIfEmpty(loginPassword)) return;
  //comprobacion de longitud, podemos ajustarlo como queramos, longitud min  y longitud max
  if (!meetLength(loginPassword, 3, 20)) return;
  //code para expresiones regulares de comprobacion
  // 1- a
  // 2- a 1
  // 3- A a 1
  // 4- A a 1 @
  if (!containsCharacters(loginPassword, 3)) return;
  return true;
};
//?-------------------------------------Utilidades--------------------------------------------
//*checkIfEmpty
function checkIfEmpty(field) {
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
//*isEmpty
function isEmpty(value) {
  if (value === '') return true;
  return false;
};

//*setInvalid
function setInvalid(field, message) {
  field.className = 'form-control form-input-travelook invalid';
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
};
//*setValid
function setValid(field, message) {
  field.className = 'form-control form-input-travelook valid';
  field.nextElementSibling.innerHTML = '';
};

//*checkIfOnlyLetters
function checkIfOnlyLetters(field) {
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    return true;

  } else {
    setInvalid(field, `${field.name} solo puede contener letras`);
  }
};
//*meetLength
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
//*containsCharacters
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
};

//*comprobacion del regEx
function matchWithRegEx(regEx, field, message) {
  if (field.value.match(regEx)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, message);
    return false;
  }
};

//! ********************* LOCAL STORAGE ************************
//*para iniciar por primera vez el localStorage, usar: init()
function init() {
  location.reload();
  localStorage.setItem('data', JSON.stringify([{
    email: "admin@dev.com",
    password: "Admin1234"
  }]));
  console.log('Local storage iniciado!');
  console.log('Para acceder como administrador usar: Email: admin@dev.com Password: Admin1234');
};
//? ********** RECOGIDA DE DATOS *************

const btnSubmit = document.getElementById('btnSubmit');

//recogida de datos y variable para visualizar los datos del local storage
const localData = JSON.parse(localStorage.getItem('data')); //! Esta variable contiene todos los datos que tiene el local storage
const data = localData;


//pulsamos boton Aceptar y Registrar
btnSubmit.addEventListener('click', function () {
  //guardamos en variables los valores de los input
  let nameData = firstName.value;
  let lastNameData = lastName.value;
  let genderData = gender.value;
  let passwordData = password.value;
  let emailData = email.value;
  //guardamos en una varibale el objeto nuevo que vamos a pushear al array data
  let newData = {
    name: nameData,
    lastName: lastNameData,
    gender: genderData,
    password: passwordData,
    email: emailData
  }
  //pusheamos a data el nuevo objeto
  data.push(newData);
  //metemos los datos en el local storage
  localStorage.setItem('data', JSON.stringify(data));

});


//? ********* COMPROBACION DE DATOS ************
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

const btnLogin = document.getElementById('btnLogin');

//recorremos todo localData y comprobamos los datos
btnLogin.addEventListener('click', function () {
  let loginData = loginEmail.value;
  let loginPasswordData = loginPassword.value;

  for (let i = 0; i < localData.length; i++) {
    if (loginData === localData[i].email && loginPasswordData === localData[i].password) {
      console.log('funciona');
      setTimeout(function () {
        window.location.href = "indexLogued.html";
      }, 3000)
      return;
    } else {
      console.log('error');

    }
  }
});