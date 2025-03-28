import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // Establece el fondo a blanco
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);

// Tamaño del cubo
const size = 2;
const divisions = 6;

// Crear el cubo con material sólido
const geometry = new THREE.BoxGeometry(size, size, size);
const material = new THREE.MeshBasicMaterial({ color: 0x47fee5, wireframe: false });
const cube = new THREE.Mesh(geometry, material);

// Crear las líneas del cubo
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000});

// Crear un grupo de líneas para incluir tanto el cubo como las líneas
const group = new THREE.Group();

// Añadir el cubo al grupo
group.add(cube);

// Añadir las líneas del cubo al grupo
const wireframe = new THREE.LineSegments(edges, lineMaterial);
group.add(wireframe);

// Crear las líneas adicionales en las 3 direcciones
const step = size / divisions;
for (let i = -size / 2; i <= size / 2; i += step) {

    // Líneas paralelas al eje X
    for (let j = -size / 2; j <= size / 2; j += step) {
        const points1 = [new THREE.Vector3(-size / 2, i, j), new THREE.Vector3(size / 2, i, j)];
        const geo1 = new THREE.BufferGeometry().setFromPoints(points1);
        group.add(new THREE.Line(geo1, lineMaterial));
    }

    // Líneas paralelas al eje Y
    for (let j = -size / 2; j <= size / 2; j += step) {
        const points2 = [new THREE.Vector3(i, -size / 2, j), new THREE.Vector3(i, size / 2, j)];
        const geo2 = new THREE.BufferGeometry().setFromPoints(points2);
        group.add(new THREE.Line(geo2, lineMaterial));
    }

    // Líneas paralelas al eje Z
    for (let j = -size / 2; j <= size / 2; j += step) {
        const points3 = [new THREE.Vector3(i, j, -size / 2), new THREE.Vector3(i, j, size / 2)];
        const geo3 = new THREE.BufferGeometry().setFromPoints(points3);
        group.add(new THREE.Line(geo3, lineMaterial));
    }
}

// Añadir el grupo a la escena
scene.add(group);

// Asegúrate de que la cámara está mirando al centro de la escena
group.position.set(0, 0, 0);
camera.position.set(5, 5, 5);
camera.lookAt(group.position);

function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.005;
    renderer.render(scene, camera);
}

animate();