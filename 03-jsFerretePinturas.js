/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var Fahrenheit;
    var convercion;

    Fahrenheit=parseFloat(document.getElementById("txtIdTemperatura").value);
 
    convercion = ((Fahrenheit-32)*5/9).toFixed(2);
 
    alert(Fahrenheit + "° fahrenheit son " + convercion + "° centigrados" );
	
}

function CentigradosFahrenheit () 
{
    let GradosCentigrados;
    let Convercion;
    
    GradosCentigrados = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    Convercion = ((GradosCentigrados * 9/5)+32).toFixed(2);
    
    alert(GradosCentigrados + "° Fahrenheit son " + Convercion + "° centígrados");
}
