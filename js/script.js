var i=0,ri=0;
var finsubtotal=0;
var igv,totalpago,nuevostock;

function Login(){
}




function add(){
    var tb = document.getElementById("data");
    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;
    var subtotal= parseFloat(precio)*parseInt(cantidad);

    if(cantidad<=0){
      alert("Cantidad no válida"); 
    }else{
        i++;    
        var fila="<tr><td>"+i+"</td><td id='nombre'>"+nombre+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td>"+subtotal+"</td><td><a href='#' onclick='editar(this)'><img src='imagenes/editar.png'></td><td><a href='#' onclick='eliminar(this)'><img src='imagenes/eliminar.png'></td></tr>";
        var fil = document.createElement("tr");
        fil.innerHTML=fila;
        tb.appendChild(fil);
        limpiar();
        alert("Producto guardado correctamente");
         finsubtotal=subtotal+finsubtotal;
        document.getElementById("subtotal").value=finsubtotal;
         igv=finsubtotal*0.18;
        document.getElementById("igv").value=igv;
        totalpago=finsubtotal+igv;
        document.getElementById("tpago").value=totalpago;
    }
 }

function eliminar(p){
  var opcion = confirm("¿Desea eliminar el producto de sus pedidos?");
    if (opcion == true) {
        var i = p.parentNode.parentNode.rowIndex;
        document.getElementById("data").deleteRow(i);         
    } else {
        alert("Producto no se eliminó");     
    }
}
function editar(p){
ri = p.parentNode.parentNode.rowIndex;
document.getElementById("nombre").value = document.getElementById("data").rows[ri].cells[1].innerText;
document.getElementById("precio").value = document.getElementById("data").rows[ri].cells[2].innerText;
document.getElementById("cantidad").value = document.getElementById("data").rows[ri].cells[3].innerText;

}

function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value= "";
    document.getElementById("nombre").focus();
}

