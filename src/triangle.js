/**
 * Determina el tipo de triángulo basado en las longitudes de sus lados.
 * 
 * @param {number} a - Longitud del primer lado
 * @param {number} b - Longitud del segundo lado
 * @param {number} c - Longitud del tercer lado
 * @returns {string} - Tipo de triángulo: 'Equilateral', 'Isosceles', 'Scalene' o 'Invalid'
 */
function triangleType(a, b, c) {
    // Verificar que los parámetros sean números
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return 'Invalid';
    }
  
    // Verificar que no haya valores decimales
    if (Math.floor(a) !== a || Math.floor(b) !== b || Math.floor(c) !== c) {
      return 'Invalid';
    }
  
    // Verifica si los lados pueden formar un triángulo
    if (a <= 0 || b <= 0 || c <= 0) {
      return 'Invalid';
    }
  
    // Verifica la desigualdad triangular
    if (a + b <= c || a + c <= b || b + c <= a) {
      return 'Invalid';
    }
  
    // Determina el tipo de triángulo
    if (a === b && b === c) {
      return 'Equilateral';
    } else if (a === b || a === c || b === c) {
      return 'Isosceles';
    } else {
      return 'Scalene';
    }
  }
  
  module.exports = triangleType;