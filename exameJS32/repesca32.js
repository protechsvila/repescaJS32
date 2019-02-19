function pregun (){

	respond = prompt("(1) Calcular sumas     (2)  Calcular multiplicaciones")

	//aquí pongo un prompt para que decida si calcular sumas o 
	//multiplicaciones,  si pone 1 , este decide calcular sumas y si pone 2 , va a multiplicar.


	switch(respond)
	{
		case '1':
		alert("Vamos a sumar 😁😁 ")
		suma();
		break;
		case '2':
		alert("Vamos a multiplicar 😁😁 ")
		multipli();
		break;

	};


//En el switch , el llamo a diferentes funciones y aparece una alerta según lo que 
//teclees en el prompt de arriba.


}

function suma (){


	//Aquí defino una función para sumar


	var num1 = Math.random()*10;

	var num1 = Math.round(num1);

	//Los números , tenían que ser generados aleatoriamente y ser de 0 
	//hasta 10, así que aqui los generé con math.random y los multiplico con 10 para no tener 
	//solo decimales , ya que si no los multilico , la mayoría de números son 0,000....
	//A continuación los redondeo con math.round para que no me den decimales


	var num2 = Math.random()*10;

	var num2 = Math.round(num2);



	var num3 = Math.random()*10;

	var num3 = Math.round(num3);



	var num4 = Math.random()*10;

	var num4 = Math.round(num4);



	var num5 = Math.random()*10;

	var num5 = Math.round(num5);



	var num6 = Math.random()*10;

	var num6 = Math.round(num6);



	result1 = prompt("Cuanto es "+num1+" + "+num2);

	//aquí defino la variable result1 que va a ser igual a la suma de num1 y num2


	if (result1 == num1+num2) {

		alert("Moi ben");

	}

	else {

		alert("NOON ,esa non e a resposta correcta");

	}


//en este if hago que si el resultado dado por el usuario es exactamente
//igual al de la suma de num1 y num2 , salte una 
//alerta y si se equivoca , salga otra alerta diferente.




result2 = prompt("Cuanto es "+num3+" + "+num4);
if (result2 == num3+num4) {

	alert("Moi ben");

}

else {

	alert("NOON ,esa non e a resposta correcta");

}





result3 = prompt("Cuanto es "+num5+" + "+num6);
if (result1 == num5+num6) {

	alert("Moi ben");

}

else {

	alert("NOON ,esa non e a resposta correcta");

}





respu2 = prompt("¿Quieres seguir jugando?")

while (respu2 == 'si') {

	alert("Vamos a ello enotonces 😊😊")
	suma();
}

if (respu2 == "no"){

	alert("Vale,vuelve pronto 😉😉 ");
}


//en este while, hago que si el usuario responde con un si a la pregunta, que aparezca una alerta 
// y se vuelva a ejecutar la función que había llamado previamente 
//al responder el prompt del principio.


}



function multipli (){

	var num1 = Math.random()*10;

	var num1 = Math.round(num1);

	var num2 = Math.random()*10;

	var num2 = Math.round(num2);



	var num3 = Math.random()*10;

	var num3 = Math.round(num3);



	var num4 = Math.random()*10;

	var num4 = Math.round(num4);



	var num5 = Math.random()*10;

	var num5 = Math.round(num5);



	var num6 = Math.random()*10;

	var num6 = Math.round(num6);





	result1 = prompt("Cuanto es "+num1+" * "+num2);


	if (result1 == num1*num2) {

		alert("Moi ben");

	}

	else {

		alert("NOON ,esa non e a resposta correcta");

	}



	result2 = prompt("Cuanto es "+num3+" * "+num4);


	if (result2 == num3*num4) {

		alert("Moi ben");

	}

	else {

		alert("NOON ,esa non e a resposta correcta");

	}


	result3 = prompt("Cuanto es "+num5+" * "+num6);


	if (result3 == num5*num6) {

		alert("Moi ben");

	}

	else {

		alert("NOON ,esa non e a resposta correcta");

	}



	respu3 = prompt("¿Quieres seguir jugando?")

	while (respu3 == 'si') {

		alert("Vamos a ello enotonces 😊😊")
		multipli();
	}

	if (respu3 == "no"){

		alert("Vale,vuelve pronto 😉😉 ");
	}
}