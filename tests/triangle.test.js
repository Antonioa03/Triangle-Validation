const triangleType = require('../src/triangle');

describe('Validación de Triángulos', () => {
  // PRUEBAS PARA TRIÁNGULOS VÁLIDOS
  
  describe('Triángulos válidos', () => {
    // Triángulo equilátero
    test('Debe identificar un triángulo equilátero (3,3,3)', () => {
      expect(triangleType(3, 3, 3)).toBe('Equilateral');
    });

    // Triángulo isósceles - todas las permutaciones
    test('Debe identificar un triángulo isósceles (5,5,3)', () => {
      expect(triangleType(5, 5, 3)).toBe('Isosceles');
    });

    test('Debe identificar un triángulo isósceles (5,3,5)', () => {
      expect(triangleType(5, 3, 5)).toBe('Isosceles');
    });

    test('Debe identificar un triángulo isósceles (3,5,5)', () => {
      expect(triangleType(3, 5, 5)).toBe('Isosceles');
    });

    // Triángulo escaleno
    test('Debe identificar un triángulo escaleno (3,4,5)', () => {
      expect(triangleType(3, 4, 5)).toBe('Scalene');
    });

    test('Debe identificar un triángulo escaleno (7,10,12)', () => {
      expect(triangleType(7, 10, 12)).toBe('Scalene');
    });
  });

  // PRUEBAS PARA TRIÁNGULOS INVÁLIDOS
  
  describe('Triángulos inválidos', () => {
    // Lados que no pueden formar un triángulo (desigualdad triangular)
    test('Debe rechazar un triángulo con lados (1,2,3)', () => {
      expect(triangleType(1, 2, 3)).toBe('Invalid');
    });

    test('Debe rechazar un triángulo con lados (3,1,2)', () => {
      expect(triangleType(3, 1, 2)).toBe('Invalid');
    });

    test('Debe rechazar un triángulo con lados (2,3,1)', () => {
      expect(triangleType(2, 3, 1)).toBe('Invalid');
    });

    // Lados de longitud cero
    test('Debe rechazar un triángulo con un lado de longitud 0 (0,4,5)', () => {
      expect(triangleType(0, 4, 5)).toBe('Invalid');
    });

    test('Debe rechazar un triángulo con un lado de longitud 0 (4,0,5)', () => {
      expect(triangleType(4, 0, 5)).toBe('Invalid');
    });

    test('Debe rechazar un triángulo con un lado de longitud 0 (4,5,0)', () => {
      expect(triangleType(4, 5, 0)).toBe('Invalid');
    });

    // Lados negativos
    test('Debe rechazar un triángulo con un lado negativo (-1,4,5)', () => {
      expect(triangleType(-1, 4, 5)).toBe('Invalid');
    });

    test('Debe rechazar un triángulo con un lado negativo (4,-1,5)', () => {
      expect(triangleType(4, -1, 5)).toBe('Invalid');
    });

    test('Debe rechazar un triángulo con un lado negativo (4,5,-1)', () => {
      expect(triangleType(4, 5, -1)).toBe('Invalid');
    });

    // Valores decimales
    test('Debe rechazar un triángulo con lados decimales (3.5,4,5)', () => {
      expect(triangleType(3.5, 4, 5)).toBe('Invalid');
    });

    // Parámetros no numéricos
    test('Debe rechazar parámetros no numéricos ("a",4,5)', () => {
      expect(triangleType("a", 4, 5)).toBe('Invalid');
    });

    test('Debe rechazar parámetros no numéricos (3,"b",5)', () => {
      expect(triangleType(3, "b", 5)).toBe('Invalid');
    });

    test('Debe rechazar parámetros no numéricos (3,4,"c")', () => {
      expect(triangleType(3, 4, "c")).toBe('Invalid');
    });
  });

  // CASOS DE BORDE
  
  describe('Casos de borde', () => {
    // Triángulos isósceles que casi son equiláteros
    test('Debe identificar un triángulo isósceles que casi es equilátero (100,100,99)', () => {
      expect(triangleType(100, 100, 99)).toBe('Isosceles');
    });

    // Triángulos escalenos que casi son isósceles
    test('Debe identificar un triángulo escaleno que casi es isósceles (100,99,98)', () => {
      expect(triangleType(100, 99, 98)).toBe('Scalene');
    });

    // Triángulos muy pequeños
    test('Debe identificar un triángulo equilátero muy pequeño (1,1,1)', () => {
      expect(triangleType(1, 1, 1)).toBe('Equilateral');
    });

    // Triángulos muy grandes
    test('Debe identificar un triángulo equilátero muy grande (10000,10000,10000)', () => {
      expect(triangleType(10000, 10000, 10000)).toBe('Equilateral');
    });

    // Combinación de lados muy grandes y muy pequeños
    test('Debe validar un triángulo con lados muy dispares (1,999,999)', () => {
      expect(triangleType(1, 999, 999)).toBe('Isosceles');
    });

    // Triángulos donde un lado es igual a la suma de los otros dos (caso límite)
    test('Debe rechazar un triángulo con lado igual a la suma de otros (5,2,3)', () => {
      expect(triangleType(5, 2, 3)).toBe('Invalid');
    });

    // Triángulos donde un lado es apenas menor que la suma de los otros dos
    test('Debe aceptar un triángulo con lado apenas menor que la suma (4,2,3)', () => {
      expect(triangleType(4, 2, 3)).toBe('Scalene');
    });
  });
});