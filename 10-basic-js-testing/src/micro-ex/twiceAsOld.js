/* 
## Twice as old

Tu función debería recibir dos argumentos:

edad actual del padre (años)
edad actual de su hijo (años)

Calcula en cuántos años tendrá el doble de edad el padre o cuantos años han pasado desde que tuvo el doble.

padre: 36, hijo: 7 -> 22
padre: 55, hijo: 30 -> 5
padre: 42, hijo: 21 -> 0
*/

export function twiceAsOld(dadAge, sonAge)
{
    let ageDiff = dadAge - sonAge;

    if(ageDiff > sonAge) {
        return ageDiff - sonAge;  
    }

    return sonAge - ageDiff;
}