"use strict";
// вар. 1. Счетчик км. // ОК

function countKm (){
	var k = 0;
	var arr = [];
	var res = 0;
	var time = 1;
	var speed = 1;
	
	
	arr[0] =  function (){
		k++;
		res +=  time * speed;
		return [res, k];
						
	}
	arr[1] = function setTime (t) {
		if(typeof t == "number"){
			time = t;
		}
	}
	arr[2] = function setSpeed (v) {
		if(typeof v == "number"){
			speed = v;
		}
	}
	return arr;
}
var  km1 = countKm();
km1[1](2);
km1[2](60);
console.log(km1[0]());//120
km1[1](1);
km1[2](50);
console.log(km1[0]());//170
km1[1](2);
km1[2](70);
console.log(km1[0]());//310

// Упрощенная версия. Работает
/*
function countKm (time, speed){
	//var k = 0;
	var res = 0;
	return function (){
		res +=  time * speed;
		return res;
						
	}
}
var  km1 = countKm(2, 60);
console.log(km1());//120
//km1 = countKm(1, 50);// обнуляет счетчик при измен. параметров!!! ????
console.log(km1());//240
*/