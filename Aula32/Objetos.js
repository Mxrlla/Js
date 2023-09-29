// const array = [1,2,3];
// array.push(4);
// array[0]='Luiz';
// array = 'Outra'; // Não pode mudar uma constante, n posso renomea-lá, apenas se fosse uma let 
// console.log(array);

// const nome01 = 'Luiz';
// const nome02 ='Miranda';
// const idade01=25;

// // [] => ARRAY // {}  => OBJETO
// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 21
// };
// const pessoa2 = {
//     nome: 'Marlla',
//     sobrenome: 'Miranda',
//     idade: 21
// };
// console.log(pessoa1.nome);
// console.log(pessoa2.nome);

// // aprimorando pra que o código com uma function enorme

// function criaUser(nome, sobrenome, idade){ // dentro da () => nos temos um parâmetro
//     return{
//          nome,
//         sobrenome,
//         idade
//     };
// }
//     const user1 = criaUser('Marlla', 'Rolemberg', 21);// dentro das ()=> temos argumentos, no caso o argumento será passado pra o parametro lá de cima
//     const user2 = criaUser('Sophia', 'Rolemberg', 13);
//     const user3 = criaUser('Maria', 'Rolemberg', 49);
//     const user4 = criaUser('Célia', 'Rolemberg', 72);
//     const user5 = criaUser('Ana', 'Rolemberg', 19 );
     
//         console.log(user1, user2, user3,user4,user5);

//com o usuário colando sua informações

const pessoa1 = {
    nome: 'Marlla',
    sobrenome: 'Rolemberg',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    }
   
};
        pessoa1.fala();