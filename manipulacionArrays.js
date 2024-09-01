const lod = require('lodash');

function interseccionYOrdenar(arr1, arr2) {
    const interseccion = lod.intersection(arr1, arr2);
    return lod.sortBy(interseccion);
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(interseccionYOrdenar(array1, array2)); 
