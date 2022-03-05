/* 

## Third Angle of the Triangle

Dado dos angulos interiores de un triangulo en grados.
Escribe una función que devuelva el tercer angulo.

PD: Solo se realizarán los tests con números enteros
*/

export function returnThirdAngle(angle1, angle2)
{
    let thirdAngleDegree = 180 - (angle1 + angle2);
    return thirdAngleDegree;
}