//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad ***isApproved*** a true o false en consecuencia.
//Una vez lo tengas compruébalo con un ***console.log***.
//Puedes usar este array para probar tu función:
const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
for (let resul of alumns) {
	if ((resul.T1 && resul.T2) || (resul.T1 && resul.T3) || (resul.T2 && resul.T3 )){
        resul.isApproved = true;
	}
	else {
		resul.isApproved = false;
	}
}
console.log(alumns);