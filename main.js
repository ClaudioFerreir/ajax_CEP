/* document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-buscar-cep').addEventListener('click', function() {
    const xhttp = new XMLHttpRequest();
    const cep = document.getElementById('cep').value;
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

    xhttp.open('GET', endpoint);
    xhttp.send();
  })
})
 */
//Metodo com JQuery
$(document).ready(function() {
  $('#cep').mask('00000-000');

  $('#btn-buscar-cep').click(function() {
    const cep = $('#cep').val();
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
    const button = $(this);
    
    $(button).find('i').addClass('d-none');
    $(button).find('span').removeClass('d-none');

    $.ajax(endpoint).done(function(data) {
      $.ajax(endpoint).done(function(data) {
        const logradouro = data.logradouro;
        const bairro = data.bairro;
        const cidade = data.localidade;
        const estado = data.uf;
        const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        $('#endereco').val(endereco);

        setTimeout(function() {
          $(button).find('i').removeClass('d-none');
          $(button).find('span').addClass('d-none');
        }, 1000)

      })
    })
  })
})