//! ****** Form Validation ******/
//inputs
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const radioGenders = document.getElementsByName('gender');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');

//formulario
const form = document.getElementById('registerForm');
const formLogin = document.getElementById('loginForm');
//Validation colors
const green = '#4caf50';
const red = '#f44336';

// Prevencion de comportamiento default
form.addEventListener('submit', function (event) {
  event.preventDefault();
});
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
window.onload = checkIfLocalData();
//!ESTA VARIABLE CONTIENE EL USUARIO QUE SE HA LOGUEADO
const user = JSON.parse(localStorage.getItem('loguedUser'));

function init() {
  localStorage.setItem('data', JSON.stringify([{
    email: "admin@dev.com",
    password: "Admin1234"
  }]));
  setStatusFalse();
  console.log('Local storage iniciado!');
  console.log('Para acceder como administrador usar: Email: admin@dev.com Password: Admin1234');
  location.reload();
};
//esta funcioin comprueba que haya local storage, si no lo hay lo crea para que pueda funcionar el resto del codigo 
function checkIfLocalData() {
  if (localStorage.getItem('data') === null) {
    init()
    return
  }
};
//? ********** RECOGIDA DE DATOS *************

const btnSubmit = document.getElementById('btnSubmit');

//recogida de datos y variable para visualizar los datos del local storage
const localData = JSON.parse(localStorage.getItem('data')); //! Esta variable contiene todos los datos que tiene el local storage
const data = localData;


//*REGISTRO
//pulsamos boton Aceptar y Registrar
btnSubmit.addEventListener('click', function () {
  //comprobamos el genero 
  checkGender(radioGenders);
  //guardamos en variables los valores de los input
  let nameData = firstName.value;
  let lastNameData = lastName.value;
  let genderData = genderValue;
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
  setTimeout(function () {
    window.location.href = "gracias.html";
  }, 1000)

});
//*comprobacion de genero 
function checkGender(field) {
  for (let i = 0; i < field.length; i++) {
    if (field[i].checked) {
      genderValue = field[i].value;
    }
  }
};

//? ********* COMPROBACION DE DATOS ************
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

const btnLogin = document.getElementById('btnLogin');
const btnCerrarSesion = document.getElementById('btnCerrarSesion');
const btnCerrarSesionFooter = document.getElementById('btnCerrarSesionFooter');


//*LOGIN
//recorremos todo localData y comprobamos los datos
btnLogin.addEventListener('click', function () {
  let loginData = loginEmail.value;
  let loginPasswordData = loginPassword.value;

  for (let i = 0; i < localData.length; i++) {
    if (loginData === localData[i].email && loginPasswordData === localData[i].password) {
      console.log('funciona');
      setStatusTrue();
      setLoguedUser();
      setTimeout(function () {
        window.location.href = "indexLogued.html";
      }, 500)
      return;
    } else {
      console.log('error');

    }
  }
});

//*loguedUser
function setLoguedUser() {
  let loginData = loginEmail.value;
  let loginPasswordData = loginPassword.value;
  for (let i = 0; i < localData.length; i++) {
    if (loginData === localData[i].email && loginPasswordData === localData[i].password) {
      localStorage.setItem('loguedUser', JSON.stringify(localData[i]));
      return;
    } else {
      console.log('error');
    }
  }
};


//*CERRAR SESION
//al pulsar cerrar sesion, el status de logueo pasa a ser falso
btnCerrarSesion.addEventListener('click', function () {
  setTimeout(function () {
    window.location.href = "index.html";
  }, 500);
  setStatusFalse();
});
btnCerrarSesionFooter.addEventListener('click', function () {
  setTimeout(function () {
    window.location.href = "index.html";
  }, 500);
  setStatusFalse();
});



//*funciones status logueo
function setStatusTrue() {
  localStorage.setItem('logued', JSON.stringify(logued = true));
  localStorage.setItem('loguedUser', JSON.stringify([{}]));

};

function setStatusFalse() {
  localStorage.setItem('logued', JSON.stringify(logued = false));
  localStorage.setItem('loguedUser', JSON.stringify([]));

};