const botao = document.getElementById('btnSimular');
const inputValor = document.getElementById('valorMensal');
const selectMeses = document.getElementById('tempoMeses');
const blocoResultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
    const valor = parseFloat(inputValor.value);
    const meses = parseInt(selectMeses.value);

    if (isNaN(valor) || valor <= 0) {
        alert('ei esqueceu de colocar o dinheiro ? digite um valor maior que zero');
        return;
    }


    const totalEconomizado = valor * meses;

    const valorFormatado = totalEconomizado.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    blocoResultado.innerHTML = `🎉 Parabens! Guardando R$ ${valor.toFixed(2)} por mes, em ${meses} meses você terá acumulado: ${valorFormatado}!`;

    blocoResultado.classList.remove('animar');
    void blocoResultado.offsetWidth; 
    blocoResultado.classList.add('animar');
});