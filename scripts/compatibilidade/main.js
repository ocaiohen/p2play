const ordenarTabela = (ordem) => {
    tabela = document.querySelector("#tabela-compatibilidade");
    tbody = tabela.tBodies[0];
    linhas = Array.from(tbody.rows);
    index = 1; // Índice do título

    linhas.sort(function(a, b) {
        const textoA = a.cells[index].textContent.trim().toUpperCase(); 
        const textoB = b.cells[index].textContent.trim().toUpperCase(); 

        if (ordem === 'A-Z') {
            return textoA.localeCompare(textoB); // Ordenar A-Z
        } else if (ordem === 'Z-A') {
            return textoB.localeCompare(textoA); // Ordenar Z-A
        }
    });

    linhas.forEach(linha => tbody.appendChild(linha));

    // tabela.offsetHeight;
}

document.getElementById('filtro-jogos').addEventListener('change', function() {
    ordenarTabela(this.value);
});