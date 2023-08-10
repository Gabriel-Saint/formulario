document.getElementById('formulario').addEventListener('submit'), function(event) {
    event.preventDefault



}

const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const telefone = document.getElementById('telefone').value;
const texto = document.getElementById('texto').value;

document.getElementById('myForm').addEventListener('submit', function(event) {
    // Impede o envio do formulário para que possamos realizar a validação
    event.preventDefault();
  
    // Obter valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Realizar validação
    if (name === '' || email === '') {
      alert('Por favor, preencha todos os campos.');
    } else if (!isValidEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
    } else {
      // Se a validação passar, você pode enviar o formulário para o servidor
      document.getElementById('myForm').submit();
    }
  });
  
  function isValidEmail(email) {
    // Implementar uma lógica de validação de e-mail adequada aqui
    // Este é um exemplo simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }