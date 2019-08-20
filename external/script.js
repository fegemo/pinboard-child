var inicializaFiltro = function() {
  var filtroEl = document.querySelector('#filtro');
  if (!filtroEl) {
    return;
  }
  var publicacoesEl = document.querySelectorAll('div.publicacao');

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
    var numeroDeResultados = publicacoesEl.length - publicacoesOcultasEl.length;
    var resultadoEl = document.getElementById('resultados');
    if (!!resultadoEl) {
      resultadoEl.innerHTML = numeroDeResultados + ' resultado(s)' ;
      resultadoEl.classList.toggle('oculto', textoDigitado.length === 0);      
    }
  }

  filtroEl.addEventListener('change', filtrar);
  filtroEl.addEventListener('input', filtrar);
};

document.addEventListener('DOMContentLoaded', inicializaFiltro);


alert('aaaaaaaaaaaaaaaa');