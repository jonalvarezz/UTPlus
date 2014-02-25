// Copyright (c) 2014 Sebastian Velasquez Orozco. All rights reserved.

var userId = document.getElementById("txtUrio");
var cancelBtn = document.getElementById("bt-cancelar");
var submitBtn = document.getElementById("enviar");

//Automaticamente el puntero se centra en el campo CODIGO para que el usuario pueda digitar su codigo
userId.focus();

//Remueve el boton SALIR del formulario, ya que el boton no tiene funcionalidad alguna
cancelBtn.remove();

//Habilita la tecla Enter para ingresar al Portal Estudiantil
window.addEventListener("keypress", function (e) {
									switch (e.keyCode){
										case 13:	submitBtn.click();
													break;}});