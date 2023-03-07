//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let ia = document.getElementById("ia");
crearBarra(ia);
let programacion = document.getElementById("programacion");
crearBarra(programacion);
let debubgging = document.getElementById("debubgging");
crearBarra(debubgging);
let diseño = document.getElementById("diseño");
crearBarra(diseño);
let sys = document.getElementById("sys");
crearBarra(sys);
let auto = document.getElementById("auto");
crearBarra(auto);

//guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalia = setInterval(function(){
            pintarBarra(ia, 16, 0, intervalia);
        },100);
        const intervalprogramacion = setInterval(function(){
            pintarBarra(programacion, 11, 1, intervalprogramacion);
        },100);
        const intervaldebubgging = setInterval(function(){
            pintarBarra(debubgging, 11, 2, intervaldebubgging);
        },100);
        const intervaldiseño = setInterval(function(){
            pintarBarra(diseño, 15, 3, intervaldiseño);
        },100);
        const intervalsys = setInterval(function(){
            pintarBarra(sys, 16, 4, intervalsys);
        },100);
        const intervalauto = setInterval(function(){
            pintarBarra(auto, 11, 5, intervalauto);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#2A4D7D";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}