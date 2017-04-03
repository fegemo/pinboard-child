var inicializaFiltro = function() {
  var filtroEl = document.querySelector('#filtro');
  if (!filtroEl) {
    return;
  }
  var publicacoesEl = document.querySelectorAll(‘div.publicacao’);

  function filtrar(evt) {
    var textoDigitado = evt.currentTarget.value;

    for (var i = 0; i < publicacoesEl.length; i++) {
      var publicacaoEl = publicacoesEl[i];
      publicacaoEl.classList.add('oculto');
      var textoPublicacao = publicacaoEl.textContent;

      if (textoPublicacao.toLowerCase().indexOf(textoDigitado.toLowerCase()) !== -1) {
        publicacaoEl.classList.remove('oculto');
      }
    }
    var publicacoesOcultasEl = document.querySelectorAll('div.publicacao.oculto');
    var numeroDeResultados = publicacoesEl.length – publicacoesOcultasEl.length;
    var resultadoEl = document.getElementById('resultados');
    resultadoEl.innerHTML = numeroDeResultados + ' resultado(s)' ;
    if(textoDigitado.length==0){
      resultadoEl.classList.add('oculto');
    }
  }

  filtroEl.addEventListener('change', filtrar);
  filtroEl.addEventListener('input', filtrar);
};

document.addEventListener('DOMContentLoaded', inicializaFiltro);
