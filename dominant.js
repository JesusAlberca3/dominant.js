/**
 * 1. Crear una funcion para recibir un arreglo
 * 2. Definir un condicional para verificar si esta vacio el arreglo
 * 3.  Definir una variable con el valor del ultimo elemento del arreglo (dominante)
 * 4. Definir un arreglo que va a almacenar los valores dominantes ya con el valor de (dominante)
 * 5. Definir una variable contador con valor igual a uno (k) [opcional]
 * 6. Inicializar un ciclo for iniciando en la longitud del arreglo menos dos hasta ser mayor-igual a cero, (decreciente)
 * 7. Definir un condicional si el arreglo en la posicion (i) es mayor al valor del dominante
 *    el valor de dominante pasa a ser el arreglo en la posicion (i)
 * 8.1 Se le da el valor en el arreglo de resultados con la posicion del contador (0) y se aumenta el valor del contador [opcion]
 * 8.2 mediante la funcion push al arreglo de resultados con el valor de dominante
 * NOTA:
 *  En el caso de utilizar la opción de la variable 'K' se inicializa en 1 dado que el arreglo en la posicion A[0] ya esta el valor del ultimo elemento
 * 
 * Pseudocodigo
 * 
 * dominants(array)
 * input: an Array of numbers
 * output: an array of dominants numbers 
 * IF array.length = 0 THEN:
 *  RETURN -1
 * 
 * dominante <- array[array.length - 1]
 * result <- [dominante]
 * k <- 1
 * 
 * FOR i <- array.length - 2 , i >= 0, i -- DO:
 * IF array[i] > dominante THEN:
 * dominante <- array[i]
 * result[k] <- dominante
 * k <- k + 1
 * 
 * 
 * RETURN result
 * 
 * 
 */
function dominants (array){
    if(array.length === 0) return - 1;

    let dominante = array[array.length -1];
    const result = [dominante]; // se mete el valor del ultimo elemento del 
    let k =1;
    
    for (let i = array.length-2; i >= 0; i--) {
        if(array[i] > dominante){
            dominante = array[i];
            //result.push(dominante);
            result[k] = dominante;
            k++;
        }
            
        
    }

    return result;
}


console.log(dominants([1, 3, 21, 4, 7, 5, 2])); 
console.log(dominants([5, 4, 3, 2, 1])); 
