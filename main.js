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
  $('#btn-buscar-cep').click(function() {
    const cep = $('#cep').val();
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

    $.ajax(endpoint).done(function(data) {
      $.ajax(endpoint).done(function(data) {
        const logradouro = data.logradouro;
        const bairro = data.bairro;
        const cidade = data.localidade;
        const estado = data.uf;
        const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        $('#endereco').val(endereco);
      })
    })
  })
})