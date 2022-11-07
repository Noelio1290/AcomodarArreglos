let grupoDeNumeros = [4,3,5,2,1]
let menorCinco = [9,7,10,5,8]
let negativos = [-1,-7,-3,4,-9]

function obtenerNumeroMenor(arreglo){
    let numeroMenor = arreglo[0]
	for(let i=1;i<arreglo.length;i++){
		if(arreglo[i]<numeroMenor){
		numeroMenor = arreglo[i]
    }
  }
	return numeroMenor
}

function guardar(numero,arreglo){
	arreglo.push(numero)
	return arreglo
}

function actualizarArreglo(numero,arreglo){
    let nIndex = arreglo.indexOf(numero)
        arreglo.splice(nIndex,1)
    return arreglo
}

function funcionPrincipal(arreglo){
	let nuevoArreglo = []
	while(arreglo.length>0){
		let numeroM = obtenerNumeroMenor(arreglo);
		guardar(numeroM,nuevoArreglo);
		actualizarArreglo(numeroM,arreglo);
	}
	return nuevoArreglo
}

console.log(obtenerNumeroMenor(grupoDeNumeros))
console.log(funcionPrincipal(grupoDeNumeros))
console.log(funcionPrincipal(menorCinco))
console.log(funcionPrincipal(negativos))