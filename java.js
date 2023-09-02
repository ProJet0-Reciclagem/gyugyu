// Função para mostrar dicas de reciclagem
function showRecyclingTips() {
    const tipsContainer = document.getElementById("recycling-tips");
    tipsContainer.innerHTML = ""; // Limpar dicas anteriores

    const tips = [
        "Separe os resíduos em categorias: plástico, papel, vidro, etc.",
        "Use sacolas reutilizáveis ao fazer compras.",
        "Evite produtos com excesso de embalagens.",
        "Recicle eletrônicos em pontos de coleta apropriados.",
        "Composte resíduos orgânicos para adubo."
    ];

    tips.forEach((tip, index) => {
        const tipElement = document.createElement("p");
        tipElement.textContent = `${index + 1}. ${tip}`;
        tipsContainer.appendChild(tipElement);
    });
}

// Função para exibir a contagem de reciclagem simulada
function simulateRecycling() {
    let totalItems = 0;
    const itemInputs = document.querySelectorAll(".item-input");

    itemInputs.forEach(input => {
        totalItems += parseInt(input.value);
    });

    const resultContainer = document.getElementById("recycling-result");
    resultContainer.textContent = `Total de itens reciclados: ${totalItems}`;
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    const showTipsButton = document.getElementById("show-tips-button");
    showTipsButton.addEventListener("click", showRecyclingTips);

    const simulateButton = document.getElementById("simulate-button");
    simulateButton.addEventListener("click", simulateRecycling);
});



/* menu responsivo lateral */


