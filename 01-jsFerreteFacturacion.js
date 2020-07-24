/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;
    
    precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
    
    resultado=parseInt(resultado);
    
    resultado = precio1 + precio2 + precio3;
    
    alert("La suma es igual a: "+ resultado);

}

function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;

   precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
   precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
   precio3=parseInt(document.getElementById("txtIdPrecioTres").value);	

   resultado=parseFloat(resultado);

   resultado=precio1 + precio2 + precio3; 

   alert("El promedio es: " + (resultado /3).toFixed(2))
  
	
}

function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;
    
    precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
    
    resultado=parseInt(resultado);
    
    resultado = precio1 + precio2 + precio3;
    
    alert("La suma es igual a: " + (resultado + (resultado*21/100))); 
}




