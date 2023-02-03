const comida = document.querySelector('#comida')
const todos = document.querySelector('#todos')
const bebidas = document.querySelector('#bebidas')
const escolhas = document.querySelector('.escolhas')

escolhas.addEventListener('click',Click)

function Click(e){
    let opt = e.target.id;
    console.log(opt)

    if(opt == 'todos'){
        todos.classList.toggle('active')
        comida.classList.remove('active')
        bebidas.classList.remove('active')
    }
    if(opt == 'comida'){
        comida.classList.toggle('active')
        bebidas.classList.remove('active')
        todos.classList.remove('active')
    }
    if(opt == 'bebidas'){
        bebidas.classList.toggle('active')
        todos.classList.remove('active')
        comida.classList.remove('active')
    }
    

}