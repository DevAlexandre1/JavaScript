function cadastrar(){
    var nome = window.document.getElementById('txtnome')
    var idade = window.document.getElementById('txtidade')
    var email = window.document.getElementById('txtemail')
    var senha = window.document.getElementById('txtsenha')
    var senha1 = window.document.getElementById('txtsenha1')
    var result = window.document.querySelector('div#res')

    if(senha === senha1){
        result.innerHTML = `Senha não correspondentes, verificara!` 
    }else if(nome != null && idade != null && email != null){
        result.innerHTML = `Cadastro realizado com sucesso!`
    }

    
}

