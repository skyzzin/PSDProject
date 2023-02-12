const F1 = document.querySelector('.F1')
const F2 = document.querySelector('.F2')
const F3 = document.querySelector('.F3')
const F4 = document.querySelector('.F4')
const F5 = document.querySelector('.F5')

const Close1 = document.querySelector('.x1')
const Close2 = document.querySelector('.x2')
const Close3 = document.querySelector('.x3')
const Close4 = document.querySelector('.x4')
const Close5 = document.querySelector('.x5')

Close1.addEventListener('click',()=>{F1.style.display='none'})
Close2.addEventListener('click',()=>{F2.style.display='none'})
Close3.addEventListener('click',()=>{F3.style.display='none'})
Close4.addEventListener('click',()=>{F4.style.display='none'})
Close5.addEventListener('click',()=>{F5.style.display='none'})

document.addEventListener('keydown',(e)=>{
    const button = e.key

    if(button == 'F1'){
        F1.style.display='flex'
       
    }
    else if(button == 'F2'){
        let acesso = prompt('Senha De Acesso')
        if(acesso == 'adm'){
            F2.style.display='flex'
        }
        else{
            alert('Senha Incorreta')
        }
    }
    else if(button == 'F3'){
        F3.style.display='flex'
    }
    else if(button == 'F4'){
        F4.style.display='flex'
    }
    else if(button == 'F5'){
        F5.style.display='flex'
    }
    else if(button == 'Escape'){
        F1.style.display='none'
        F2.style.display='none'
        F3.style.display='none'
        F4.style.display='none'
        F5.style.display='none'
    }
})