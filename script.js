
const btn_invernia = document.getElementById('btnIn')

btn_invernia.addEventListener('click',()=>{
    const cod = 'me'
    const senha = document.getElementById('senha')

    if(senha.value.toUpperCase() == cod.toUpperCase()){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    }else if(senha.value == ''){
        alert('Preencha os dados solicitados')
    } else{
        alert('Senha incorreta')
    }
})


