document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do envio do formulário

    // Defina as credenciais válidas (pode ser alterado conforme necessário)
    const validUsername = 'admin'; // Nome de usuário correto
    const validPassword = '12345'; // Senha correta

    // Obtém os valores do formulário
    const username = document.getElementById('login').value;
    const password = document.getElementById('senha').value;

    // Verifica se as credenciais inseridas estão corretas
    if (username === validUsername && password === validPassword) {
        // Login bem-sucedido - redireciona para outra página
        window.location.href = 'menu.html'; // Aqui redireciona para uma página protegida
    } else {
        // Mostra uma mensagem de erro caso as credenciais estejam incorretas
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    }
});

//validações

// Função para gerar chave primária automática (ID)
function gerarChavePrimaria() {
    const primaryKey = Date.now(); // Usa o timestamp atual como chave primária
    document.getElementById('primaryKey').value = primaryKey;
}

// Função para validar se é CPF ou CNPJ
function validarCpfCnpj() {
    const cpfCnpjInput = document.getElementById('cpfCnpj');
    const valor = cpfCnpjInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (valor.length === 11) {
        cpfCnpjInput.setCustomValidity(validarCPF(valor) ? "" : "CPF inválido");
    } else if (valor.length === 14) {
        cpfCnpjInput.setCustomValidity(validarCNPJ(valor) ? "" : "CNPJ inválido");
    } else {
        cpfCnpjInput.setCustomValidity("CPF ou CNPJ inválido");
    }
}

// Função para validar CPF
function validarCPF(cpf) {
    // Aqui vai o algoritmo de validação de CPF
    // Retorna true se o CPF for válido, false caso contrário
    return true; // Simplificação, adicionar a lógica do CPF aqui
}

// Função para validar CNPJ
function validarCNPJ(cnpj) {
    // Aqui vai o algoritmo de validação de CNPJ
    // Retorna true se o CNPJ for válido, false caso contrário
    return true; // Simplificação, adicionar a lógica do CNPJ aqui
}

// Adiciona o evento de geração de chave primária ao carregar o formulário
document.getElementById('formCadastro').addEventListener('submit', function (event) {
    gerarChavePrimaria();
});