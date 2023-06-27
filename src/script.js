import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import * as dat from "lil-gui";

THREE.ColorManagement.enabled = false;

/**
 * Base
 */
// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("textures/matcaps/1.png");

/**
 * Fonts
 */
const fontLoader = new FontLoader();

let objectsToAnimate = [];

fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
  // Material
  const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });

  // Text
  const textGeometry = new TextGeometry(
    "My First\n   Three.js\n       Project",
    {
      font: font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    }
  );
  textGeometry.center();

  const text = new THREE.Mesh(textGeometry, material);
  scene.add(text);

  // Donuts
  // const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 32, 64)

  // for(let i = 0; i < 20; i++)
  // {
  //     const donut = new THREE.Mesh(donutGeometry, material)
  //     donut.position.x = (Math.random() - 0.5) * 15
  //     donut.position.y = (Math.random() - 0.5) * 15
  //     donut.position.z = (Math.random() - 0.5) * 15
  //     donut.rotation.x = Math.random() * Math.PI
  //     donut.rotation.y = Math.random() * Math.PI
  //     const scale = Math.random()
  //     donut.scale.set(scale, scale, scale)

  //     scene.add(donut)

  //     objectsToAnimate.push(donut);
  // }

  // Ege
  // const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)

  // for(let i = 0; i < 20; i++) {
  //     const ege = new THREE.Mesh(sphereGeometry, material)
  //     ege.position.x = (Math.random() - 0.5) * 15
  //     ege.position.y = (Math.random() - 0.5) * 15
  //     ege.position.z = (Math.random() - 0.5) * 15
  //     const scale = Math.random()
  //     ege.scale.set(scale, scale * 1.3, scale)

  //     scene.add(ege)

  //     objectsToAnimate.push(ege);
  // }

  // Box
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

  for (let i = 0; i < 25; i++) {
    const box = new THREE.Mesh(boxGeometry, material);
    box.position.x = (Math.random() - 0.5) * 15;
    box.position.y = (Math.random() - 0.5) * 15;
    box.position.z = (Math.random() - 0.5) * 15;
    // vérifier la distance entre la boîte et le texte
    const distance = box.position.distanceTo(text.position);

    if (distance > 2) {
      // ajuster cette valeur en fonction de la taille du texte
      box.rotation.x = Math.random() * Math.PI;
      box.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      box.scale.set(scale, scale, scale);

      scene.add(box);

      // Ajoutez la boîte à la liste des objets à animer
      objectsToAnimate.push(box);
    }
  }

  // Icosahedrons
  const icosahedronGeometry = new THREE.IcosahedronGeometry(0.5, 0);

  for (let i = 0; i < 25; i++) {
    const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
    icosahedron.position.x = (Math.random() - 0.5) * 15;
    icosahedron.position.y = (Math.random() - 0.5) * 15;
    icosahedron.position.z = (Math.random() - 0.5) * 15;

    const distance = icosahedron.position.distanceTo(text.position);

    if (distance > 2) {
      const scale = Math.random();
      icosahedron.scale.set(scale, scale, scale);

      scene.add(icosahedron);

      objectsToAnimate.push(icosahedron);
    }
  }

  // Octahedrons

  const octahedronGeometry = new THREE.OctahedronGeometry(0.5, 0);

  for (let i = 0; i < 25; i++) {
    const octahedron = new THREE.Mesh(octahedronGeometry, material);
    octahedron.position.x = (Math.random() - 0.5) * 15;
    octahedron.position.y = (Math.random() - 0.5) * 15;
    octahedron.position.z = (Math.random() - 0.5) * 15;

    const distance = octahedron.position.distanceTo(text.position);

    if (distance > 2) {
      const scale = Math.random();
      octahedron.scale.set(scale, scale, scale);

      scene.add(octahedron);

      objectsToAnimate.push(octahedron);
    }
  }

  // Tetrahedrons

  const tetrahedronGeometry = new THREE.TetrahedronGeometry(0.5, 0);

  for (let i = 0; i < 25; i++) {
    const tetrahedron = new THREE.Mesh(tetrahedronGeometry, material);
    tetrahedron.position.x = (Math.random() - 0.5) * 15;
    tetrahedron.position.y = (Math.random() - 0.5) * 15;
    tetrahedron.position.z = (Math.random() - 0.5) * 15;

    const distance = tetrahedron.position.distanceTo(text.position);

    if (distance > 2) {
        const scale = Math.random();
        tetrahedron.scale.set(scale, scale, scale);

        scene.add(tetrahedron);

        objectsToAnimate.push(tetrahedron);
    }
  }
});

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x111, 0.9);

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  objectsToAnimate.forEach((object) => {
    object.rotation.x += 0.01;
    object.rotation.y += 0.01;
  });

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
