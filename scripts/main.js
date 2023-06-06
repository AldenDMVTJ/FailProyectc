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





function comentarioCaja(){
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;
    const comentario = document.getElementById("coments")

    if(nombre == "" && mensaje == ""){
        //si no llena ningun espacio le aparece esta alerta
        alert("Es necesario que ingrese un nombre y un comentario")
        document.getElementById("nombre").focus();
    }

    else if(nombre == ""){
        //si no llena ningun espacio le aparece esta alerta
        alert("Es necesario que ingrese un nombre")
        document.getElementById("nombre").focus();
    }

    else if(mensaje == ""){
        //si no llena ningun espacio le aparece esta alerta
        alert("Es necesario que ingrese un comentario")
        document.getElementById("mensaje").focus();
    }
    
    else{
        //Si esta todo bien envia el comentario y se guarda para poder enviar otro comentario
        comentario.innerHTML += `
        <div class="border">
        <h4>${nombre}</h4>
        <p>${mensaje}</p>
        </div>`
        //Se vuelven los datos a la nada
        document.getElementById("nombre").value = ""
        document.getElementById("mensaje").value = ""
    }
}