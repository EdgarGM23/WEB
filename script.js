let menuVisible = false;
//Mostrar o ocultar menu
function mostrarOcultarMenu(){
    if(menuVisible){
    document.getElementById("nav").classList = "";
    menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
    menuVisible = true;
    }
}
function seleccionar(){
    //Ocultar menu al seleccionar opcion si
}