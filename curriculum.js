document.getElementById("boton").addEventListener("click" , function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Gracias por contactarse"; 
    document.getElementById("demo").style.color = "green"
})