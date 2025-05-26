// Hannah Reis – JS atualizado com interatividade amigável

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        const nome = document.getElementById('nome').value.trim();
        const ingredientes = document.getElementById('ingredientes').value.trim();
        const tempo = document.getElementById('tempo').value.trim();

        if (!nome || !ingredientes || !tempo) {
            alert('⚠️ Por favor, preencha todos os campos.');
            e.preventDefault();
            return;
        }

        if (isNaN(tempo) || parseInt(tempo) <= 0) {
            alert('⚠️ O tempo deve ser um número maior que zero.');
            e.preventDefault();
            return;
        }

        const confirmar = confirm("Deseja cadastrar essa receita?");
        if (!confirmar) {
            e.preventDefault();
        } else {
            // Pode ser um modal ou mensagem na página no futuro
            alert("✅ Receita cadastrada com sucesso!");
        }

        // Hannah Reis – Animação suave no título ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('h1');
    titulo.style.opacity = 0;
    titulo.style.transform = 'translateY(-30px)';

    setTimeout(() => {
        titulo.style.transition = 'all 1s ease';
        titulo.style.opacity = 1;
        titulo.style.transform = 'translateY(0)';
    }, 100);
});

    });
});
