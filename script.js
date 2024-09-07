// Obtém os elementos
const modal = document.getElementById("modalPesquisa");
const btnAbrirModal = document.getElementById("btnAbrirModal");
const spanFechar = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão "Pesquisar", abre o modal
btnAbrirModal.onclick = function() {
    modal.style.display = "flex"; // Mostra o modal com flexbox
}

// Quando o usuário clica no "X", fecha o modal
spanFechar.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
