(function () {
  'use strict';
  /**
   * 1 = ? 
   */

  /**
   * 2 = E
   */

  // function chalange2() {
  //   var i, j;
  //   for(i = 1; 1 <= 5;  i++) {
  //     for(j = 0; j <= 5; j++) {
  //       if(i <= j){
  //         console.log(' % ', j);
  //       }
  //     }
  //     console.log(' \ n ')
  //   }
  //   return 0;
  // }

  // chalange2();

  /**
   * 3 = E
   */

  // function chalenge3(text) {
  //   //questao muito facil
  //   var nome = text;
  //   nome.split('');
  //   var i;

  //   for (i = 0; i < nome.length; i++) {
  //     if(nome[i] == ' ') {
  //       break;
  //     }
  //   }
  //   i++;

  //   for(i ; i < nome.length; i++ ) {
  //     console.warn(" % c ", nome[i]);
  //   }
  //   return 0;
  // }

  // chalenge3('questao muito facil');

  /**
   * 4 = E
   */

  // function chalenge4() {
  //   var a;
  //   console.log(" % d % d ", a && !a, a || !a); 
  //   return 0;
  // }

  // chalenge4();

  /**
   * 5 = B
   */

  /**
   * 6 = B
   */

  // function chalange6() {
  //   var v = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
  //   var i, maior, s;

  //   maior = s = 0;

  //   for (i = 0; i < 10; i++) {
  //     s += v[i];
  //     if (v[i] > maior) {
  //       maior = v[i];
  //     }
  //   }
  //   console.log(" % d % d \ n ", maior, s);
  //   return 0;
  // }

  // chalange6();

  /**
   * 7 = Is Code
   */

  function chalange7(base, altura) {
    return "Área Total = " + base * altura;
  }

  console.log(chalange7(10, 10));


  /**
   * 8 = Abaixo
   */

  // Homem leva a galinha até a margem direita;
  // Homem Volta a margem esquerda;
  // Homem leva o Cachorro até a margem direita;
  // Homem Volta a margem esquerda levando a galinha;
  // Homem leva o Saco de Milho até a margem direita;
  // Homem Volta a margem esquerda;
  // Homem leva a galinha até a margem direita;


  /**
   * 9  = ? 
   */

  /**
   * 10 = D
   */

  // function chalange10() {
  //   var a, b;
  //   b = 5;
  //   a = 0;

  //   for (var i = 0; i <= b; i++) {
  //     b = b + 2;
  //     if (b > 10) {
  //       break;
  //     } else {
  //       a = a + b;
  //     }
  //   }

  //   console.log(a);
  // }

  // chalange10();

  /**
   * 11 = 
   */

  function chalange11(numero) {
    return numero * 2;
  }

  var test11 = chalange11(10) == 20;

  console.log("10) O dobro é " + chalange11(10));
  console.log("10) O resultado do test " + test11);

  /**
   * 12 = 
   */

  function chalange12(lado1, lado2) {
    return lado1 * lado2;
  }

  var test12 = chalange12(15, 11) == 165;
  console.log("12) Área quadrada é " + chalange12(15, 11));
  console.log("12) Resultado do teste " + test12);


  /**
   * 13 = 
   */

  function chalange13(valor1, valor2, valor3) {
    var total = valor1 + valor2 + valor3;
    return total / 3;
  }

  var result13 = chalange13(10, 10, 10);
  var test13 = result13 == 10;

  console.log("13) A média é " + result13);
  console.log("13) Resultado do teste " + test13);


  /**
   * 14 = 
   */

  function jurosSimples(capital, taxa, periodo) {
    return capital * taxa * periodo;
  }

  var result14 = jurosSimples(16000, 0.04, 4);
  var test14 = result14 == 2560;
  console.log('14) Resultado ' + result14);
  console.log('14) Resultado do test ' + test14);


  /**
   * 15 = 
   */

  function toCelsius(fahrenheit) {
    var result = (fahrenheit - 32) * 5 / 9;
    Math.round(result);
    return result;
  }

  function toFahrenheit(celsius) {
    var result = celsius * 9 / 5 + 32;
    Math.round(result);
    return result;
  }

  var resultToCelsius = toCelsius(212);
  var resultToFahrenheit = toFahrenheit(100);

  var test15C = resultToCelsius == 100;
  var test15F = resultToFahrenheit == 212;

  console.log("15) Fahrenheit para Celsius " + resultToCelsius);
  console.log("15) Teste Fahrenheit para Celsius " + test15C);

  console.log("15) Celsius para Fahrenheit " + resultToFahrenheit);
  console.log("15) Teste Celsius para Fahrenheit " + test15F);


  /**
   * 16
   */
  /*
    Se o gestor me der um prazo impossivel primeiramente tentaria fazer esse prazo se tornar possivel.

    1 - Tentaria entender qual seria o miníno necessário pra ser entrege nesse prazo.
    2 - Pediria mais recursos para ajudar na demanda.
    3 - Montaria um plano especial de entrega para essa demanada.
    4 - Faria rapidas análises diárias para ver se tudo estar de acordo o planejado.
    5 - Entrgaria a demanada ;) .

  */

  /**
   * 17
   */

  /**
   * Aprenderia PLSQL! Sem dúvida.
   */


  /**
   * 18
   */

  function numeroPrimo(numero) {
    if (numero && !isNaN(numero)) {
      if ((numero % 2) === 1) {
        return "Numero: " + numero + " é primo";
      } else {
        return "Numero: " + numero + " nao é primo";
      }
    }
  }

  numeroPrimo



})();