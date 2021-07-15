// let num = 0;

// Pos-incremento
// num++; /*0+1=1*/
// num++;/*1+1=2*/
// num++;/*2+1=3*/
// console.log(`Incrementa una variable de a uno, num es 0, luego de ejecutar num++ 3 veces, num es `+num);
// En caso de querer incrementar mas de 1 se debe usar la adicion
// let incremento = 2;
// num = 0;
// num += incremento;
// num += incremento;
// console.log(`En caso de querer incrementar mas de uno, usamos adicion, num+= y el valor q queramos aumentar, num es 0 y aplicamos num+=2 dos veces, ahora num es ${num}`);
// Pre-incremento
// num = 0;
// ++num;
// ++num;
// ++num;
// console.log(`Incrementa la variable por uno pero la incrementa en la misma linea`)
// console.log(`Num es 0, colocamos ++num 3 veces, ahora num es ${num}`);
// Pos-decremento
// num = 0;
// num--;
// console.log(`Tambien hay Pos-Decremento q es lo mismo q el Pos incremento pero para disminuir, num es 0, colocamos num-- y la siguiente vez que llamemos num va a ser ${num}`);
// Pre-decremento
// num = 0;
// --num;
// console.log(`Lo mismo con Pre-decremento, num es 0 y con --num en esa misma instruction num ahora vale ${num}`);
// Negacion unaria
// num = 1;
//num = -num; /*ahora num es -1*/
//Nivel de jerarquia en los operadores aritmenticos
// ()Parentesis = Presidente 0
// / Division = 2
// % Modulo = 1
// * Multiplicacion = 3
// + Suma = 4
// - Resta = 5
// console.log(8-2*5+8%2/3);
        //    (8-2*5+8%0.66)
        //      (8-2*5+12)
        //       (8-10)
        //         (-2)
// console.log(`Perdir 2 datos por pantalla(prompt) y almacenar en dos variables diferentes(num1 & num2). Realizar todas las operaciones
// aritmeticas vistas en la clase.
// Mostrar en consola todos los posibles resultados.
// Extra: Por medio de una ventana emergente(alert)
// Dar la maxima informacion del desarrollador del aplicativo en cuestion`);
let num1 = prompt(`Ingrese el valor de la primer variable`);
let num2 = prompt(`Ingrese el valor de la segunda variable`);
num1=parseInt(num1);
num2=parseInt(num2);
console.log(`Operador de adicion: num1 + num2`);
console.log(num1+num2);
console.log(`Operador de sustraccion: num1 - num2`);
console.log(num1-num2);
console.log(`Operador de multiplicacion: num1 * num2`);
console.log(num1*num2);
console.log(`Operador de division: num1 / num2`);
console.log(num1/num2);
console.log(`Operador de resto o modulo: num1 % num2`);
console.log(num1%num2);
console.log(`Operador de exponenciacion: num1 ** num2`);
console.log(num1**num2);
console.log(`Operador de negacion unaria: -num1`);
console.log(-num1);
console.log(`Operador de unario positivo: +num2`);
console.log(+num2);
console.log(`Operador de incremento: ++num1 en este caso num1 es `+num1);
console.log(++num1);
console.log(`Operador de decremento: --num2 en este caso num2 es `+num2);
console.log(--num2);
let autor = `Jaime Lopez`;
let exp = 2.5;
let edad = 28;
let operadores = [`adicion`, `sustraccion`, `multiplicacion`, `division`,`resto`,`exponenciacion`,`incremento`,`decremento`];
alert(`Ejercicio desarrolado por ${autor} que tiene ${exp} meses de experiencia a sus ${edad} años en el cual se puede observador los siguiente operadores: ${operadores.join(" ")}.`);

