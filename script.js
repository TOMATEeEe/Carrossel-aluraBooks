const clas='none'
const lista=document.querySelector('.lista')
const texto_abaixo=document.querySelector('.texto_baixo')
function gg(){
console.log('truyrtyu')
}
const botao=document.querySelector('#menu')
botao.addEventListener('click',()=>coloca_class(clas))

function coloca_class(classe){
    const take_class=lista.className
    console.log(take_class)
    let classes=take_class.split(" ")
    let pontuador
   for(var classi of classes){
    console.log(classi)
    if(classi == 'none'){
console.log('a classe já é obtida')
pontuador=0
    }else{pontuador=1 
    console.log('a classe não é obtida')}
   }
   console.log('valor do potuador'+pontuador)
   if(pontuador==1){
    adiciona_classes('none')
   }else{
    
    remove_classes('none')
   }
}

function remove_classes(classe_removida){
    lista.classList.remove(classe_removida)
    texto_abaixo.classList.add('despadrao')
    console.log('removida')
}

function adiciona_classes(classe_adicionada){
    lista.classList.add(classe_adicionada)
    texto_abaixo.classList.remove('despadrao')
    console.log('adicionada'+texto_abaixo.className)
}

/*Atisla*/
const atisla=document.querySelector(".atisla")
const botao_atisla=document.querySelector('.caategoria')
botao_atisla.addEventListener('click',()=>functi())
function functi(){
    console.log(botao_atisla)
    let atisla_nome=atisla.className
let atisla_nomes=atisla_nome.split(" ")
let verificante
for(var cla of atisla_nomes){
    if(cla=='none'){
        console.log('não havia sido clicado,esta desativado então')
        verificante=1
    }   else{
        console.log('havia sido clicado,estava ativo')
        verificante=0
    }
}
if(verificante==1){
atisla.classList.remove('none')
}else{
    atisla.classList.add('none')
    console.log('foi acresentado a classname none')
    console.log(atisla.className)
}
 
}
