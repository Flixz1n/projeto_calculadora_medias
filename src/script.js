const form = document.getElementById('form-contato')
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

   adicionaLinha();
   atualizaTabela();
   removeLinha();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (numero.includes(inputNumeroContato)) {
        alert(`O numero: ${inputNumeroContato.value} já foi registrado.`)
    } else {
    numero.push(inputNumeroContato.value);
    nome.push(parseFloat(inputNomeContato.value))
    

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function removeLinha() {
    var linha = document.getElementById('form-contato');
    linha.remove

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}
