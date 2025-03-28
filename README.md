# intro-threejs

Este proyecto utiliza la biblioteca Three.js para crear una escena 3D interactiva que muestra un cubo con líneas en las tres direcciones (X, Y, Z) y un fondo blanco. Se hace uso de la geometría básica del cubo y se añaden líneas de malla y otras líneas para crear una representación más detallada de la estructura 3D. La animación permite que el cubo gire lentamente, brindando una vista dinámica de la escena.

## Descripción General
En este proyecto se crea una escena 3D utilizando Three.js, en la cual se construye un cubo de tamaño 2x2x2 con líneas adicionales que representan la malla del cubo. A continuación, se detalla el proceso y los elementos utilizados:

- **Escena y cámara**: Se crea una escena y una cámara con perspectiva, configurando el fondo de la escena a blanco.
- **Cubo**: Se genera un cubo con `THREE.BoxGeometry`, donde se le asigna un material básico con un color sólido y se le asignan líneas en el borde del cubo usando `THREE.EdgesGeometry`.
- **Líneas adicionales**: Se añaden líneas paralelas a los ejes X, Y y Z, generando una malla más detallada del cubo con un número de divisiones definido.
- **Animación**: Se aplica una animación que hace que el cubo gire lentamente alrededor del eje Y para dar una visualización dinámica.

> Aplicación desarrollada por [Victor López](https://www.linkedin.com/in/victor-manuel-l%C3%B3pez-cruz-34bb39349/)