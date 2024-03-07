// Função para adicionar um item à tabela
function adicionarIntem() {
    // Obter os valores dos campos de entrada
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;

    // Validar campos preenchidos
    if (!nome || !valor || !quantidade) {
        alert("Preencha todos os campos");
        return;
    }

    // Obter a referência da tabela e adicionar uma nova linha
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var newLine = tabela.insertRow(tabela.rows.length);

    // Inserir células na nova linha e atribuir os valores digitados
    var celulaNome = newLine.insertCell(0);
    var celulaValor = newLine.insertCell(1);
    var celulaQuantidade = newLine.insertCell(2);
    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;

    // Limpar campos de entrada após adicionar um item à tabela
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
}

// Função para remover um item da tabela
function RemoverItem() {
    // Obter o nome do item a ser removido
    var nomeParaRemover = document.getElementById("nomeRemover").value;
    if (!nomeParaRemover) {
        alert("Digite o nome existente na tabela");
        return;
    }

    // Obter a referência da tabela e suas linhas
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var linhas = tabela.getElementsByTagName("tr");

    // Percorrer todas as linhas da tabela
    for (var i = 0; i < linhas.length; i++) {
        // Obter a primeira célula (td) da linha atual
        var celulaNome = linhas[i].getElementsByTagName("td")[0];

        // Verificar se a célula nome existe e se o conteúdo é igual ao que quer ser removido
        if (celulaNome && celulaNome.innerHTML === nomeParaRemover) {
            // Remover a linha da tabela
            tabela.deleteRow(i);
            return;
        }
    }
    // Limpar o campo "Nome para remover" após a remoção
    document.getElementById("nomeRemover").value = "";
}

// Função para exportar a tabela para um arquivo Excel
function exportarParaExcel() {
    // Obter a referência da tabela e definir o nome do arquivo
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var nomeArquivo = "tabela_produtos.xlsx";

    // Converter a tabela para um livro de Excel e salvar o arquivo
    var wb = XLSX.utils.table_to_book(tabela, { sheet: "Tabela de produtos" });
    XLSX.writeFile(wb, nomeArquivo);
}
