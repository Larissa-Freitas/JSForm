function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} Horas!`
    
    if(hora > 0 && hora <12){
        img.src = "manha.png"
        document.body.style.background = "#e2cd9f"
    }
    if(hora > 11 && hora < 18){
        img.src = "tarde.png"
        document.body.style.background = "#b9846f"
    }else if (hora >= 18 && hora <= 24){
        img.src ="noite.png"
        document.body.style.background = "#515154"
    }

}
function Validar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtAno')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!!')
    }else{
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
            window.document.body.style.background = 'Green'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','bebeHomem.png')
            }else if(idade < 21){
                img.setAttribute('src','jovemHomem.png')
            }else if(idade < 60){
                img.setAttribute('src','adultoHomem.png')
            }else {
                img.setAttribute('src','idosoHomem.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            window.document.body.style.background = 'Pink'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','bebeMulher.png')
            }else if(idade < 21){
                img.setAttribute('src','jovemMulher.png')
            }else if(idade < 60){
                img.setAttribute('src','adultoMulher.png')
            }else {
                img.setAttribute('src','idosaMulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}