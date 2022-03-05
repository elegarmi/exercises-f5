/* 
## Opposites Attract

Timmy y Sarah piensan que están enamorados, pero alrededor de donde viven, solo lo sabrán una vez que elijan una flor cada uno. Si una de las flores tiene un número par de pétalos y la otra tiene un número impar de pétalos, significa que están enamorados.

Escribe una función que tome el número de pétalos de cada flor y devuelva verdadero si están enamorados y falso si no lo están.
*/

export function isLove(petalsFlower1, petalsFlower2)
{
    let thisIsLove = (petalsFlower1 === petalsFlower2) ? false : true;
    return thisIsLove;
}