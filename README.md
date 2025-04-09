# Triangle Validation

Este proyecto contiene una función que valida el tipo de triángulo basado en las longitudes de sus lados, junto con un conjunto completo de pruebas unitarias utilizando Jest.

## Descripción

La función `triangleType` acepta tres enteros que representan las longitudes de los lados de un triángulo y devuelve si el triángulo es:
- Equilátero (todos los lados iguales)
- Isósceles (dos lados iguales)
- Escaleno (todos los lados diferentes)
- Inválido (no puede formar un triángulo válido)

## Requisitos

- Node.js (versión 14 o superior recomendada)
- npm (normalmente viene con Node.js)

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/triangle-validation.git
cd triangle-validation
```

2. Instala las dependencias:
```bash
npm install
```

## Ejecución de pruebas

Para ejecutar las pruebas unitarias:
```bash
npm test
```

## Estructura del proyecto

```
triangle-validation/
├── src/
│   └── triangle.js     # Implementación de la función triangleType
├── tests/
│   └── triangle.test.js # Pruebas unitarias con Jest
├── package.json        # Configuración del proyecto
└── README.md           # Este archivo
```

## Casos de prueba

Las pruebas unitarias cubren varios escenarios:

### Triángulos válidos
- Triángulos equiláteros
- Triángulos isósceles (todas las permutaciones)
- Triángulos escalenos

### Triángulos inválidos
- Lados que no cumplen la desigualdad triangular
- Lados con longitud cero o negativa
- Valores decimales
- Parámetros no numéricos

### Casos de borde
- Triángulos isósceles que casi son equiláteros
- Triángulos escalenos que casi son isósceles
- Triángulos muy pequeños o muy grandes
- Combinaciones de lados muy dispares en tamaño
- Casos límite de la desigualdad triangular

## Licencia

MIT