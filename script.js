document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.querySelector('.show-more-btn');
    const detalhesAdicionais = document.querySelector('.detalhes-adicionais');

    if (showMoreButton && detalhesAdicionais) {
        showMoreButton.addEventListener('click', function () {
            const isVisible = detalhesAdicionais.style.display === 'block';
            detalhesAdicionais.style.display = isVisible ? 'none' : 'block';
            showMoreButton.textContent = isVisible ? 'Mostrar Mais' : 'Mostrar Menos';
        });
    }
});