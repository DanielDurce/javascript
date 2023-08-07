function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;
        // Limpa o conteúdo anterior do <select>
        tab.innerHTML = "";
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            tab.appendChild(item);
            c++;
        }
    }
}

document.getElementById('txtn').addEventListener('keydown', function(event) {
    if (event.key === "Enter") { // Verifica se a tecla pressionada é "Enter"
        tabuada();
    }
});

document.getElementById('btnGerar').addEventListener('click', function() {
    tabuada();
});
