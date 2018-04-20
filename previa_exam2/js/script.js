var i = 0, ri = 0, m = "";
var promedio;
function agregar() {
	i++;
	
	var tb = document.getElementById("data");
	var op = document.getElementById("seleccionar()").value; 
    
    var fil = document.createElement("tr");

    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;

    var can_1 = parseFloat(cantidad);
    var prec_1 = parseFloat(precio);

    var prom = can_1 * prec_1;

    promedio = prom.toFixed(2);

    var fila="<tr><td>"+i+"</td><td>"+op+"</td><td id='precio'>"+precio+"</td><td id='can_1'>"+cantidad+"</td><td id='promedio'>"+promedio+"</td><td><a href='#' onclick='editar(this)'><img src='iconos/e.png'></td><td><a href='#' onclick='eliminar(this)'><img src='iconos/d.png'></td></tr>";    
   	
    fil.innerHTML=fila;
	tb.appendChild(fil);
    
	limpiar();
    bloquear();
    if (seleccionar()[op.value]) {
    var x = document.getElementById("seleccionar()").options[1].disabled = true;
    var x = document.getElementById("seleccionar()").options[2].disabled = true;
}else {
    
}
    //alert("Sus datos han sido registrados");
}

function eliminar(p){
    var opcion = confirm("¿Desea Eliminar...?");
    if (opcion == true) {
        var i = p.parentNode.parentNode.rowIndex;
        document.getElementById("data").deleteRow(i);
        mensaje("Registro Eliminado correctamente...!");        
    } else {
        mensaje("Registro no se eliminó...!");     
    }
}
function limpiar(){
    document.getElementById("seleccionar()").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("select").value = "";
    document.getElementById("cantidad").value = ""; 
    document.getElementById("subtotal").value = "" ;
    document.getElementById("porcentaje").value = "" ;
    document.getElementById("total").value = "" ;
}



function editar(p){
ri = p.parentNode.parentNode.rowIndex;
document.getElementById("seleccionar()").value = document.getElementById("data").rows[ri].cells[1].innerHTML;
document.getElementById("precio").value = document.getElementById("data").rows[ri].cells[2].innerHTML;
document.getElementById("cantidad").value = document.getElementById("data").rows[ri].cells[3].innerHTML;
}
function modificar()
{   var opcion = confirm("¿Desea Modificar...?");
    if (opcion == true) {
        data.rows[ri].cells[1].innerHTML = document.getElementById("seleccionar()").value;
        data.rows[ri].cells[2].innerHTML = document.getElementById("precio").value;
        data.rows[ri].cells[3].innerHTML = document.getElementById("cantidad").value;
        var cantidad = parseInt(document.getElementById("cantidad").value);
        var precio = String(document.getElementById("precio").value);
        var promedio = cantidad*precio;
        data.rows[ri].cells[4].innerHTML = promedio;
        
        
        mensaje("Registro Modificado Correctamente...!");
    } else {
        mensaje("Registro no se Modificó...!");               
    }	
    limpiar(); 
 }	

 function agregar_1(){
    select = document.getElementById('seleccionar()').value;

    var seleccion = select;
    var select_1 = document.getElementById("select").value = seleccion; 

    switch (seleccion) {
        case "Arroz":
            document.getElementById("precio").value = "1.50";
            break;
        case "Azucar":
            document.getElementById("precio").value = "2.50";
            break;
        case "Leche":
            document.getElementById("precio").value = "3.50";
            break;
        default:
            document.getElementById("precio").value = "";
            break;
    }
    
}

function calcular() {
    var qwe = 0.0;    
    for (var q = 1; q < document.getElementById("data").rows.length; q++) {
         qwe = qwe + parseFloat(document.getElementById("data").rows[q].cells[4].innerHTML);         
     } 
     document.getElementById("subtotal").value = qwe;
     document.getElementById("porcentaje").value = 0.18;
     document.getElementById("total").value = qwe + (qwe * 0.18);     
}
function bloquear(){
   //var x = document.getElementById("seleccionar()");
    //var o = document.getElementsByTagName("option");
    //o[seleccionar().value].setAttribute("disabled", "true");
}
function comprobar(x){
     var list= document.getElementById("seleccionar()");
     
     
     for (var i=0;i<list.length;i++ ) {
         if(x==list[i].value){
             document.getElementById(x).setAttribute("disabled", "true");
         }
     }
     
}

