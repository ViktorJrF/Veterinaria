const tarjetas = document.getElementById("contenedorTarjetas");
tarjetas.innerHTML = "";

//const agregarTarjeta = () => {
//    let nuevaTarjeta = '<div class="col-md-4">'+
//    '<div class="card" style="width: 18rem;">'+
//        '<img class="mx-auto d-block" src="https://cdn-icons-png.flaticon.com/512/595/595611.png" width="200" alt="medicina"/>'+
//        '<div class="card-body">'+
//          '<h5 class="card-title">Producto</h5>'+
//          '<p class="card-text">Descripción del producto.</p>'+
//          '<a href="#" class="btn btn-primary">botoncito</a>'+
//          '<a href="#" class="btn btn-danger" onclick="eliminar(this)">Eliminar</a>'+
//        '</div>'+
//    '</div>'+
//'</div>';
    
//    tarjetas.innerHTML += nuevaTarjeta;
//};

$("#nuevaTarjeta").click(function(){
    $("#contenedorTarjetas").append('<div class="col-md-4">'+
        '<div class="card" style="width: 18rem;">'+
            '<img class="mx-auto d-block" src="https://cdn-icons-png.flaticon.com/512/595/595611.png" width="200" alt="medicina"/>'+
            '<div class="card-body">'+
              '<h5 class="card-title">Producto</h5>'+
              '<p class="card-text">Descripción del producto.</p>'+
              '<a href="#" class="btn btn-primary">botoncito</a>'+
              '<a href="#" class="btn btn-danger" onclick="eliminar(this)">Eliminar</a>'+
            '</div>'+
        '</div>'+
    '</div>');
})


function eliminar(b){
    b.parentNode.parentNode.parentNode.remove();
};


//window.onload = function() {
//    if (window.jQuery) {  
        // jQuery is loaded  
//        alert("Yeah!");
//    } else {
        // jQuery is not loaded
//        alert("Doesn't Work");
//    }
//};