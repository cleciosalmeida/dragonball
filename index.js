// Teste para futuras interações
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`Você clicou em ${card.querySelector('h2').innerText}!`);
    });
});
