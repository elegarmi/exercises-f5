/* 
## Array Plus Array 
Obtener la suma de dos matrices / arrays ... en realidad, la suma de todos sus elementos

PD: Cada matriz incluye solo números enteros. La salida también es un número.
*/

export function arrSum(arr1, arr2)
{
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    let resultSumArr1 = arr1.reduce(reducer);
    let resultSumArr2 = arr2.reduce(reducer);

    let result = resultSumArr1 + resultSumArr2;
    return result;
}