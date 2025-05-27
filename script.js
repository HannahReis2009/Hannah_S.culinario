// Hannah Reis – JavaScript com LocalStorage + redirecionamento seguro

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-receita');

    // Animação suave no título
    const titulo = document.querySelector('h1');
    titulo.style.opacity = 0;
    titulo.style.transform = 'translateY(-30px)';
    setTimeout(() => {
        titulo.style.transition = 'all 1s ease';
        titulo.style.opacity = 1;
        titulo.style.transform = 'translateY(0)';
    }, 100);

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede envio tradicional

        const nome = document.getElementById('nome').value.trim();
        const ingredientes = document.getElementById('ingredientes').value.trim();
        const tempo = document.getElementById('tempo').value.trim();

        if (!nome || !ingredientes || !tempo) {
            alert('⚠️ Por favor, preencha todos os campos.');
            return;
        }

        if (isNaN(tempo) || parseInt(tempo) <= 0) {
            alert('⚠️ O tempo deve ser um número maior que zero.');
            return;
        }

        const confirmar = confirm("Deseja cadastrar essa receita?");
        if (!confirmar) return;

        // Salva a receita no localStorage
        const receitas = JSON.parse(localStorage.getItem('receitas') || '[]');
        receitas.push({ nome, ingredientes, tempo });
        localStorage.setItem('receitas', JSON.stringify(receitas));

        alert("✅ Receita cadastrada com sucesso!");

        // Redireciona para listagem
        window.location.href = 'listar_receitas.html';
    });
});
