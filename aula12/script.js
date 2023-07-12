function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += " Bom dia!";
        img.src = 'manha.jpg'
        document.body.style.background = '#FFFF00'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += " Boa tarde!";
        img.src = 'tarde.jpeg'
        document.body.style.background = '#964b00'
    } else {
        msg.innerHTML += " Boa noite!";
        img.src = 'noite.jpeg'
        document.body.style.background = '#c8a2c8'
    }
}