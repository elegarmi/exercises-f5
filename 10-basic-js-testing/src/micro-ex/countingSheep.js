/* 
## Counting Sheeps

Los "true" son ovejas, los "false" son lobos ... Cuantas ovejas hay?

*/

export function countSheeps(list)
{
    let numbOfSheeps = 0;

    list.forEach( animal => {
        if(animal === true) { 
           numbOfSheeps++;
        };
    });

    if(numbOfSheeps > 0) {
        return `There are ${numbOfSheeps} sheep in total`;
    }

    return `UPS!!! Wolfs eaten Sheeps`;
}