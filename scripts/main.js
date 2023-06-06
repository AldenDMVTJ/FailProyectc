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



// const fora = document.getElementById('form')
// fora.addEventListener('submit', validarFormulario)
const form = "hola"

function asdsad (e){
    // e.preventDefaylt();

    // let nombre = document.getElementById("nombre").value
    // let mensaje = document.getElementById("mensaje").value

    let hola = form
    console.log(hola);
}

asdsad()

console.log("adios");