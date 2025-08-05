/*Uma fruteira está vendendo frutas com a seguinte tabela de preços:
                          Até 5 Kg                 Acima de 5 Kg
    Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
    Maçã              R$ 1,80 por Kg          R$ 1,50 por Kg
    Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, 
    receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a 
    quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas
     e escreva o valor a ser pago pelo cliente.*/

function calculandoFrutas(ifelseform){
     ifelseform.preventDefault();
     var fruta1 = document.getElementById('morango').value;
     var fruta2 = document.getElementById('maca').value;
     var kilos = document.getElementById('kgs').value;
     
     if (fruta1.checked == true && kgs<=5){
          var resultado = (2.50* kilos);
          console.log(`O valor do kilo é  ${kilos}, e o resultado é ${resultado}`);
     } else if(fruta1.checked == true && kgs>= 5 && kgs<=8){
          var resultado =( 2.20* kilos);
          console.log(`O valor do kilo é  ${kilos}, e o resultado é ${resultado}`);
     } 
     if(fruta2.checked == true && kgs<=5){
          var resultado = (1.80* kilos);
          console.log(`O valor do kilo é  ${kilos}, e o resultado é ${resultado}`);
     } else if(fruta2.checked == true && kgs>= 5 && kgs<=8){
          var resultado = (1.50* kilos);
          console.log(`O valor do kilo é  ${kilos}, e o resultado é ${resultado}`);
     }
}
calculandoFrutas();