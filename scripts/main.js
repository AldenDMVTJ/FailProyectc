const menubtn = document.getElementById('menu-icon')
const menuDes = document.querySelector('#menuDesplegable')

menubtn.addEventListener('click' , ()=> {

    if( menuDes.classList.contains('show') == true ){
        menuDes.classList.remove('show')
    }
    else{
        menuDes.classList.add('show')
    }
})




    



