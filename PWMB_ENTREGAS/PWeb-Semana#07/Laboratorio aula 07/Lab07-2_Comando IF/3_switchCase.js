/*-------------------------------------------------*
 *   SENAC- Anáslie e Desenvolvimento de Sistemas  *
 *                Programação Web                  *
 *   Prof. Veríssimo                   set/2023    *
 *-------------------------------------------------*
 *        Exemplos do uso de SWITCH CASE           *
 *-------------------------------------------------*/
let diaObtido = new Date().getDay();
//diaObtido = 0;
switch (diaObtido) {
    case 0:
        diaDaSemana = " Domingo ";
        break;
    case 1:
        diaDaSemana = " Segunda - Feira ";
        break;
    case 2:
        diaDaSemana = "Terca - Feira ";
        break;
    case 3:
        diaDaSemana = "Quarta - Feira ";
        break;
    case 4:
        diaDaSemana = "Quinta - Feira ";
        break;
    case 5:
        diaDaSemana = "Sexta - Feira ";
        break;
    case 6:
        diaDaSemana = " Sabado ";
        break;
    default:
        diaDaSemana = "Dia Invalido ";
        break;
}
console.log(" Hoje eh:" + diaDaSemana)