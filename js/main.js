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

// Crear un grupo para incluir tanto el cubo como las líneas
const group = new THREE.Group();

// Añadir el cubo al grupo
group.add(cube);

// Crear las "líneas" gruesas usando cubos pequeños
const step = size / divisions;
const lineThickness = 0.027; // Grosor de las líneas simuladas con cubos
for (let i = -size / 2; i <= size / 2; i += step) {

    // Líneas paralelas al eje X
    for (let j = -size / 2; j <= size / 2; j += step) {
        const geo1 = new THREE.BoxGeometry(size, lineThickness, lineThickness);
        const line1 = new THREE.Mesh(geo1, new THREE.MeshBasicMaterial({ color: 0x000000 }));
        line1.position.set(0, i, j);
        group.add(line1);
    }

    // Líneas paralelas al eje Y
    for (let j = -size / 2; j <= size / 2; j += step) {
        const geo2 = new THREE.BoxGeometry(lineThickness, size, lineThickness);
        const line2 = new THREE.Mesh(geo2, new THREE.MeshBasicMaterial({ color: 0x000000 }));
        line2.position.set(i, 0, j);
        group.add(line2);
    }

    // Líneas paralelas al eje Z
    for (let j = -size / 2; j <= size / 2; j += step) {
        const geo3 = new THREE.BoxGeometry(lineThickness, lineThickness, size);
        const line3 = new THREE.Mesh(geo3, new THREE.MeshBasicMaterial({ color: 0x000000 }));
        line3.position.set(i, j, 0);
        group.add(line3);
    }
}

// Añadir el grupo a la escena
scene.add(group);

// Asegúrate de que la cámara está mirando al centro de la escena
group.position.set(0, 0, 0);
camera.position.set(3.5, 3.5, 3.5);
camera.lookAt(group.position);

function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.005;
    group.rotation.z += 0.005;
    renderer.render(scene, camera);
}

animate();