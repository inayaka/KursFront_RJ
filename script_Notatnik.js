console.log("Hello JavaScript!")

const z = 5;
let x = 7;

//zmienną let wstawiamy poniżej czyli x = 2; - to 
//bierze do sumowania teę drugą wartość czyli suma jest 7 nie 12
x = 2;

// z = 1 - NIE MOŻNA NADPISAĆ STAŁEJ!!!!

console.log(x+z);

// STRING ciąg znaków - zawsze w cudzysłowiu

const string = "asd"

//OBIEKTY (elemnty w klamrach: klucz: wartość)
const project = {
    name : "Projekt 1",
    date : "24.11.2018",
}
//    id: 1,
//    child : {
//    name: "ChildProject"

console.log(project)

//tablice (zawsze w nawiasach [] )
const fibArray = [0, 1, 2, 3, 5, 8]

//wyświetla w konsoli
console.log(fibArray[3])

//funkcja jest blokiem kodu, który możemy wywołać gdzieś indziej

function test(arg){
    console.log("Jeden");
    console.log("Dwa");
    console.log(arg)
}

// wywołanie kodu - funkcji  test
test()
test()
// jeżeli podałam console.log(arg) - to przy wywołaniu pojawi się undefined
// mogę podać  argument przy wywołaniu kodu test("ARG1") to wtedy nie pojawi się undefined

//const conso = {
//   log: function (arg) {
//        console.log(arg)



//console.log("Projekt o nazwie " + project.name
//+ " został stworzony " + project.date)

//console.log(project.name)
//console.log(project.date)


//TABLICE (ARRAYS)

// const fibArray



