// src/popup/popup.js

document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DO HTML ---
    const botaoDiagnostico = document.getElementById('iniciarDiagnostico');
    const statusGeralEl = document.getElementById('status-geral');
    const sistemas = {
        'Turbina 1': 'status-turbina-1',
        'Turbina 2': 'status-turbina-2',
        'Turbina 3': 'status-turbina-3',
        'Turbina 4': 'status-turbina-4',
        'Escudos': 'status-escudos',
        'Navegação': 'status-navegacao',
        'Suporte de Vida': 'status-suporte-vida',
        'Comunicações': 'status-comunicacoes'
    };

    // --- FUNÇÕES ---
    const sleep = ms => new Promise(res => setTimeout(res, ms));

    // Função para atualizar um status individual na lista
    function atualizarStatus(id, texto, classe) {
        const el = document.getElementById(id);
        el.textContent = texto;
        el.className = `status ${classe}`;
    }

    // Função para resetar o painel para o estado inicial
    function resetarPainel() {
        botaoDiagnostico.disabled = false;
        botaoDiagnostico.textContent = 'INICIAR DIAGNÓSTICO';
        
        statusGeralEl.textContent = 'Sistemas em espera. Aguardando comando.';
        statusGeralEl.className = 'alert alert-secondary mt-3';

        for (const id of Object.values(sistemas)) {
            atualizarStatus(id, 'Pendente', 'status-pending');
        }
    }

    // --- LÓGICA PRINCIPAL ---
    
    // Roda a função de resetar assim que o popup é aberto para garantir o estado inicial
    resetarPainel();

    // Adiciona o evento de clique ao botão
    botaoDiagnostico.addEventListener('click', async () => {
        botaoDiagnostico.disabled = true;
        botaoDiagnostico.textContent = 'DIAGNÓSTICO EM ANDAMENTO...';
        statusGeralEl.textContent = 'Iniciando varredura de sistemas...';
        statusGeralEl.className = 'alert alert-info mt-3';
        
        await sleep(500);

        for (const [nome, id] of Object.entries(sistemas)) {
            statusGeralEl.textContent = `Verificando ${nome}...`;
            atualizarStatus(id, 'Verificando...', 'status-checking');
            
            await sleep(350); // Simula o tempo de verificação

            atualizarStatus(id, 'ONLINE', 'status-online');
        }

        statusGeralEl.textContent = 'Diagnóstico completo. Todos os sistemas operacionais.';
        statusGeralEl.className = 'alert alert-success mt-3';
        botaoDiagnostico.disabled = false;
        botaoDiagnostico.textContent = 'REINICIAR DIAGNÓSTICO';
    });
});