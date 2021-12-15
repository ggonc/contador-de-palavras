function contador() {
    let inputFrase = document.getElementById("inputFrase").value;
    let resultado = document.getElementById("resultado");
    let cont = 0;
    
    if (inputFrase !== "") {
        let fraseDividida = inputFrase.split(" ");
        // Verificação para que os espaços adicionais não sejam contados como palavaras
        fraseDividida.forEach(element => {
            if (element === ""){
                cont++;
            }
        });
        resultado.innerHTML = "Quantidade de palavras: " + (fraseDividida.length - cont);
    } else {
        alert("Insira uma frase para calcular a quantidade de palavras.")
    }
}