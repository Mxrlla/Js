function meuEscopo() {
  const form = document.querySelector('.form');
  const result = document.querySelector('.result');
  const pessoas= []
 

  function recebeEvento(evento) {
      evento.preventDefault();
      const nome = form.querySelector('.nome');
      const peso = form.querySelector('.peso').value;
      const sobrenome = form.querySelector('.sobrenome').value;
      const altura = form.querySelector('.altura').value;

      pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
      });
      
      console.log(pessoas);
      
  }

  form.addEventListener('submit', recebeEvento);
}

meuEscopo();


//form.onsubmit = function(evento){
    //    evento.preventDefault();
      //  alert('Formulário enviado');
    //console.log('Foi enviado')
    //