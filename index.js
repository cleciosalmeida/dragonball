// Optional JavaScript for future interactivity
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on ${card.querySelector('h2').innerText}!`);
    });
});
