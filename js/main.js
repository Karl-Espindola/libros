function ver(){
    
    let listaProductos=document.getElementById("list-pro");
    listaProductos.selectedIndex="0";
    Vmodal.classList.toggle("ocultar");
}
function modal(){
    let listaProductos=document.getElementById("list-pro");

    if(listaProductos.value !="0"){
        let texto=listaProductos.options[listaProductos.selectedIndex].innerText;
        Vmodal.classList.toggle("ocultar");
        padre.innerText=texto;
    }
    else{
        alert("Elija un produto");
    }
    
    
    
}
function adquirido(){
    window.location="./adquirido.html";
}

let log=document.getElementById("log");
let cancelar=document.getElementById("cancelar");
let aceptar=document.getElementById("aceptar");
let pedir=document.getElementById("pedir");




let Vmodal=document.getElementById("modal");
let padre=document.getElementById("padre");


cancelar.addEventListener("click",ver);
aceptar.addEventListener("click",adquirido);
pedir.addEventListener("click",modal);
log.addEventListener("click", ()=>{window.location="index.html"});

