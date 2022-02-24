function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var inputano = document.getElementById('idadein')
  var result = document.querySelector('div#msg')

  if(inputano.value.length == 0 || Number(inputano.value) > ano) {
    window.alert('Erro, Verificar os dados e tentar novamente!')
  }else{
    var fsex = document.getElementsByName('sexo')
    var idade = ano - Number(inputano.value)
    var genero = ''
    var img =  document.createElement('img') //Criando uma TAG para img
    img.setAttribute('id', 'foto')//definindo um id para a tag imagme criada acima
    if(fsex[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src','8anosH.PNG')
        
      }else if(idade < 21){
        //Jovem
        img.setAttribute('src', '30anosH.PNG')
      }else if(idade < 50){
        //Adulto
        img.setAttribute('src','50anos.PNG')
      }else{
        //idoso
        img.setAttribute('src','70anosH.PNG')
      }       
      
    }else if(fsex[1].checked){
      genero = 'Mulher'
      if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src','8anosM.PNG')
      }else if(idade < 21){
        //Jovem
        img.setAttribute('src', '30anosM.PNG')
      }else if(idade < 50){
        //Adulto
        img.setAttribute('src','50anosM.PNG')
      }else{
        //idoso
        img.setAttribute('src','70anosM.PNG')
      }       
    }
    result.style.textAlign = 'Center'
    result.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
    result.appendChild(img)  //Colocar conteudo da variaável IMG abaixo utiliza este comando.
  }
    
    

}