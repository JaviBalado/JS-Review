const salaryEsp = spain.map(
    function(persona) {
        return persona.salary;
    }
);
const salaryEspSort = salaryEsp.sort(
    function(salryA, salaryB) {
        return salryA-salaryB;
    }
);

function isPar(number) {
    return (number % 2 === 0);
}

function calculateMedian(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

function medianWages(list) {
    const middle = parseInt(list.length / 2)
    if (isPar(list.length)) {
        const middlePerson1 = list[middle - 1];
        const middlePerson2 = list[middle];
        median = calculateMedian([middlePerson1, middlePerson2]);
        return median;
    }else{
        const middlePerson = list[middle];
        return middlePerson;
    }
}

console.log(
    medianWages(salaryEspSort)
);