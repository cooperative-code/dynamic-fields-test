$(function() {
  // contagem de campos adicionados, para servir de ID
  let count = 0;

  //   cria inputs, de acordo com a template string
  // name = nome do campo
  // type = tipo
  // parent = id de onde será inserido
  function createField(name, type, parent) {
    count++;
    let template = `
        <tr id="input-${count}">
           <td>
             <div class="form-group">
               <input type="${type}" class="form-control" name="${name}"/>
             </div>
           </td>
           <td>
             <button type="button" class="btn btn-danger remove" data-id="input-${count}">X</button>
           </td>
        </tr>    
    `;
    let container = document.querySelector(parent);
    container.insertAdjacentHTML('beforeend', template);
  }

  // destroi um campo e seu entorno
  // recebe o id do elemento parent e o evento de clique do botão que gerou a ação de exclusao
  function destroyField(parent, event) {
    const parentEl = document.querySelector(parent);
    const idToRemove = `#${event.target.getAttribute('data-id')}`;
    const elToRemove = parentEl.querySelector(idToRemove);
    parentEl.removeChild(elToRemove);
  }

  //   detecta evento de clique no botão responsavel por adicionar novos campos

  document.querySelector('#addField').addEventListener('click', function(e) {
    createField('custom', 'text', '#form');
  });

  // ############### IMPORTANTE LER ###############

  //   detecta cliques feitos dentro do container dos inputs, COMO OS ELEMENTOS SÃO ADICIONADOS DINAMICAMENTE
  //   OS EVENTOS NÃO SÃO ATRIBUIDOS(POIS EVENTOS SÃO ATRIBUIDOS NO LOADING DA PAGINA),
  //   POR ISSO É NECESSÁRIO TESTAR O TARGET E VER SE CORRESPONDE COM O BOTÃO DE REMOVER

  document.querySelector('#form').addEventListener('click', function(e) {
    if (e.target.classList.contains('remove')) {
      destroyField('#form', e);
    }
  });

  document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault();
  });
});
