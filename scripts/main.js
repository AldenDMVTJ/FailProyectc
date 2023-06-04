const menubtn = document.getElementById('menu-icon')
const menu = document.querySelector('#menuDesplegable')

menubtn.addEventListener('click' , ()=> {
    //si la lista tiene la clase 'show' se la remueve
    // y si no la tiene se le agrega
    if( menu.classList.contains('show') == true ){
        menu.classList.remove('show')
    }
    else{
        menu.classList.add('show')
    }
})



