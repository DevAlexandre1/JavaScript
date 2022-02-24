function carregar(){ 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora < 12 && hora > 0){    
        img.src = 'dia.png'
        document.body.style.backgroundColor = "#ebdd66"
        }else if(hora > 12 && hora < 19){
            img.src = 'tarde.png'
            document.body.style.backgroundColor = "#cf9529"
        }else if(hora > 18 && hora < 24){
            img.src = 'noite.png'
            document.body.style.backgroundColor = "#3f3116"
        }else{
            window.alert('Horário inexistente!')
                        
        }
    
}

