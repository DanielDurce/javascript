function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');
    let emojis = ["😃", "🚀", "🔥", "🌟", "🎉"];

    if (ini.value.trim() === "" || fim.value.trim() === "" || passo.value.trim() === "") {
        window.alert('[ERRO] Faltam dados');
        return;
    }

    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (isNaN(i) || isNaN(f) || isNaN(p)) {
        window.alert('[ERRO] Os valores devem ser números');
        return;
    }

    if (p === 0) {
        window.alert('[ERRO] O passo não pode ser zero');
        return;
    }

    res.innerHTML = 'Contando:';
    let direction = (i < f) ? 1 : -1;

    if (direction === 1) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} ${emojis[Math.floor(Math.random() * emojis.length)]}`;
        }
    } else {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} ${emojis[Math.floor(Math.random() * emojis.length)]}`;
        }
    }
    res.innerHTML += ` ${emojis[emojis.length - 1]}`;
}

function limpar() {
    document.getElementById('txti').value = "";
    document.getElementById('txtf').value = "";
    document.getElementById('txtp').value = "";
    document.getElementById('res').innerHTML = "Contando...";
}