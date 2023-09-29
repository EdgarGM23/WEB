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
    //Ocultar menu al seleccionar opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion para animaciones de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
         let habilidades = document.getElementsByClassName("progreso");
         habilidades[0].classList.add("python")
         habilidades[1].classList.add("java")
         habilidades[2].classList.add("CSharp")
         habilidades[3].classList.add("filmora")
         habilidades[4].classList.add("comunicacion")
         habilidades[5].classList.add("twork")
         habilidades[6].classList.add("creative")
         habilidades[7].classList.add("cntrl")
    }
}
//Detectar scrolling para aplicar animaciones
window.onscroll = function(){
    efectoHabilidades();
}
