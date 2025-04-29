function atualizarTempoJuntas() {
    const agora = new Date();
    const dataInicio = new Date('2024-06-05T16:30:00'); // Data de referência
    const tempoJuntas = agora - dataInicio;

    const segundos = Math.floor((tempoJuntas / 1000) % 60);
    const minutos = Math.floor((tempoJuntas / (1000 * 60)) % 60);
    const horas = Math.floor((tempoJuntas / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(tempoJuntas / (1000 * 60 * 60 * 24));

    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);
    const diasRestantes = dias % 30;

    document.getElementById('tempoJuntas').innerHTML = 
        `${anos} anos, ${meses} meses, ${diasRestantes} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos.`;
}

// Atualiza a contagem a cada segundo
setInterval(atualizarTempoJuntas, 1000);