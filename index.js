const menu = document.querySelector('.mobile-menu')
const menushow = document.querySelector('.menu')
const lista = document.querySelector('.lista-mobile')
var windowWidth = window.innerWidth;


let i = 1

menu.addEventListener('click', function(){
    if(i%2!==0){
        // menushow.style.display = 'flex'
        // lista.style.display = 'block'
        menushow.classList.remove('nonee')
        menushow.classList.add('flexao')
        i++
    }else{
       menushow.classList.remove('flexao')
       menushow.classList.add('nonee')
        i++
    }
})
