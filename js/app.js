let amigos = [];

function adicionar() {

    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '' ) {
        alert('Informe o nome do amigo!');
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    if (amigo.value.trim() === '') return;

    let nomeMaiusculo = amigo.value.toUpperCase();
    amigos.push(nomeMaiusculo);

    if (lista.textContent === '') {
        lista.textContent = nomeMaiusculo;
    } else {
        lista.textContent += ', ' + nomeMaiusculo;
    }

    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let proximo = (i + 1) % amigos.length;
        sorteio.innerHTML += amigos[i] + ' --> ' + amigos[proximo] + '<br>';
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
