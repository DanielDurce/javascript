function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || fano.value > ano) { 
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.src = "criançamenino.jpeg";
            } else if (idade >= 10 && idade < 20) {
                // Jovem
                img.src = "jovemmenino.jpeg";
            } else if (idade >= 20 && idade <= 50) {
                // Adulto
                img.src = "homemadulto.jpeg";
            } else if (idade >= 50 && idade <= 70) {
                // Idoso
                img.src = "idosohomem.jpeg";
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.src = "criançamenina.jpeg";
            } else if (idade >= 10 && idade < 20) {
                // Jovem
                img.src = "jovemmenina.jpeg";
            } else if (idade >= 20 && idade <= 50) {
                // Adulto
                img.src = "adultomulher.jpeg";
            } else if (idade >= 50 && idade <= 70) {
                // Idoso
                img.src = "idosamulher.jpeg";
            }
        }

        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}