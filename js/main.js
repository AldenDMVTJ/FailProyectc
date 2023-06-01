const menubtn = document.getElementById('menu-icon')
const menu = document.querySelector('#menuDesplegable')

menubtn.addEventListener('click' , ()=> {

    if( menu.classList.contains('show') == true ){
        menu.classList.remove('show')
    }
    else{
        menu.classList.add('show')
    }
})




    



