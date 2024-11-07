
const btn_invernia = document.getElementById('btnIn')

btn_invernia.addEventListener('click',()=>{
    const cod = 4002
    const senha = document.getElementById('senha')

    if(senha.value == cod){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    }
})


