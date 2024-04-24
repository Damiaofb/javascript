function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
    } if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade < 16) {
           //criança
           img.setAttribute('src', 'imagens/menino.png')
        } else if (idade < 30){
            //jovem
            img.setAttribute('src', 'imagens/homem_jovem.png')
        } else if(idade < 60) {
            //adulto
            img.setAttribute('src', 'imagens/homem_30anos.png')
        } else {
            //idoso
            img.setAttribute('src', 'imagens/homem_idoso.png')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if ( idade >= 0 && idade <16) {
            //criança
            img.setAttribute('src', 'imagens/menina.png')
        } else if(idade < 30) {
            //jovem 
            img.setAttribute('src', 'imagens/mulherjovem.png')
        } else if ( idade < 60) {
            //adulta
            img.setAttribute('src', 'imagens/mulher_30anos.png')
        } else {
            //idoso
            img.setAttribute('src', 'imagens/mulher_idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

    }
