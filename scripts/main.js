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





function comentario(){
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    if(nombre == "" && mensaje == ""){

        alert("Es necesario que ingrese un nombre y un comentario")
        document.getElementById("nombre").focus();
    }

    else if(nombre == ""){

        alert("Es necesario que ingrese un nombre")
        document.getElementById("nombre").focus();
    }

    else if(mensaje == ""){

        alert("Es necesario que ingrese un comentario")
        document.getElementById("mensaje").focus();
    }
    
    else{

        console.log("su nombre es " + nombre + "y su comentario es " + mensaje);

    }
}