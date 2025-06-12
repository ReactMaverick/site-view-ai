import * as THREE from 'three';

export const setupThreeJS = ({
    canvasWrapperRef,
    canvasRef,
    topLayerFirstRef
}) => {
    // Select the canvas and top layer text
    const canvas = canvasRef.current;
    const topLayerFirst = topLayerFirstRef.current;

    // Create the scene first
    const scene = new THREE.Scene();

    // Add fog to the scene
    scene.fog = new THREE.Fog(0xffffff, 1, 8); // Color, near distance, far distance

    // Store the aspect ratio of the window
    let aspectRatio = window.innerWidth / window.innerHeight;

    // console.log('Aspect Ratio:', aspectRatio);
    // console.log('Window Width:', window.innerWidth * window.devicePixelRatio);
    // console.log('Window Height:', window.innerHeight * window.devicePixelRatio);

    // console.log('Document Width:', document.documentElement.clientWidth);
    // console.log('Document Height:', document.documentElement.clientHeight);




    // Set the size of the box based on the aspect ratio
    let boxWidth = 5 * aspectRatio;
    let boxHeight = 5;

    let numberOfDivisions = 5; // Number of divisions on the top and side plates

    let xPlateWidth = boxWidth / numberOfDivisions; // There will be 5 divisions on the top plate
    let xPlateHeight = 1; // The height of the top plate will be 1 unit

    let yPlateWidth = boxHeight / numberOfDivisions; // There will be 5 divisions on the side plate
    let yPlateHeight = boxHeight / numberOfDivisions; // The height of the side plate will be 1 unit

    // Create the camera (Parameters: Field of view, aspect ratio, near clipping plane, far clipping plane)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10);

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor(0xffffff); // Set the background color to white

    // Set the size of the renderer based on the container's dimensions
    const setRendererSize = () => {
        const width = canvasWrapperRef.current.clientWidth;
        const height = canvasWrapperRef.current.clientHeight;
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };

    // Set the renderer size initially
    setRendererSize();


    // Append the renderer to the div with the class canvasWrapper
    canvasWrapperRef.current && canvasWrapperRef.current.appendChild(renderer.domElement);
    // document.querySelector(".canvasWrapper").appendChild(renderer.domElement);

    // Create a hollow cube
    let boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, 500);
    let edges = new THREE.EdgesGeometry(boxGeometry);
    let lineMaterial = new THREE.LineBasicMaterial({ color: '#d4d4d4' });
    let hollowCube = new THREE.LineSegments(edges, lineMaterial);

    // Add the hollow cube to the scene
    scene.add(hollowCube);

    // Create a texture loader
    const textureLoader = new THREE.TextureLoader();

    // Load textures
    const textures = [
        textureLoader.load('assets/images/1.jpg'),
        textureLoader.load('assets/images/2.jpg'),
        textureLoader.load('assets/images/3.jpg'),
        textureLoader.load('assets/images/4.jpg'),
        textureLoader.load('assets/images/5.jpg'),
        textureLoader.load('assets/images/6.jpg'),
        textureLoader.load('assets/images/7.jpg'),
        textureLoader.load('assets/images/8.jpg'),
        textureLoader.load('assets/images/9.jpg'),
        textureLoader.load('assets/images/10.jpg'),
        textureLoader.load('assets/images/11.jpg'),
        textureLoader.load('assets/images/12.jpg'),
        textureLoader.load('assets/images/13.jpg'),
        textureLoader.load('assets/images/15.jpg'),
        textureLoader.load('assets/images/16.jpg'),
        textureLoader.load('assets/images/17.jpg'),
        textureLoader.load('assets/images/18.jpg'),
        textureLoader.load('assets/images/19.jpg'),
        textureLoader.load('assets/images/20.jpg'),
        textureLoader.load('assets/images/21.jpg'),
        textureLoader.load('assets/images/22.jpg'),
        textureLoader.load('assets/images/23.jpg'),
        textureLoader.load('assets/images/24.jpg'),
        textureLoader.load('assets/images/25.jpg'),
        textureLoader.load('assets/images/26.jpg'),
        textureLoader.load('assets/images/27.jpg'),
        textureLoader.load('assets/images/28.jpg'),
        textureLoader.load('assets/images/29.jpg'),
        textureLoader.load('assets/images/30.jpg'),
        textureLoader.load('assets/images/31.jpg'),
    ];

    // Function to create a plane with a random texture
    function createRandomPlane() {
        const planeGeometry = new THREE.PlaneGeometry(1, 1);
        const randomTexture = textures[Math.floor(Math.random() * textures.length)];
        const planeMaterial = new THREE.MeshBasicMaterial({ map: randomTexture, side: THREE.DoubleSide });
        return new THREE.Mesh(planeGeometry, planeMaterial);
    }

    // Function to update the dimensions of the plane geometry
    function updatePlaneDimensions(width, height, plane) {
        // Create a new geometry with the desired dimensions
        const newGeometry = new THREE.PlaneGeometry(width, height);

        // Replace the old geometry with the new one
        plane.geometry.dispose(); // Dispose of the old geometry to free up memory
        plane.geometry = newGeometry;
    }

    // Calculate the range for x position
    let minX = -(boxWidth - xPlateWidth) / 2;
    let maxX = (boxWidth - xPlateWidth) / 2;

    // Calculate the range for y position
    let minY = -(boxHeight - yPlateHeight) / 2;
    let maxY = (boxHeight - yPlateHeight) / 2;

    // Length of the scene to position the planes
    const sceneLength = 200;

    // Function to generate a random whole number within the specified range with a minimum gap
    function getRandomXPosition(min, max, gap) {
        const range = Math.floor((max - min) / gap);
        const randomIndex = Math.floor(Math.random() * (range + 1));
        return min + randomIndex * gap;
    }

    // Function to position planes randomly on a face of the cube
    function positionRandomPlanes(face, length) {
        for (let i = 0; i < length; i++) {
            const plane = createRandomPlane();
            switch (face) {
                case 'top':
                    // Update the dimensions of the plane to match the face of the cube
                    updatePlaneDimensions(xPlateWidth, xPlateHeight, plane);
                    plane.position.set(
                        getRandomXPosition(minX, maxX, xPlateWidth), // x position with minimum gap
                        2.5, // y
                        Math.floor(Math.random() * length) + 0.5 // z: 0 to length
                    );
                    plane.rotation.x = Math.PI / 2;
                    break;
                case 'bottom':
                    // Update the dimensions of the plane to match the face of the cube
                    updatePlaneDimensions(xPlateWidth, xPlateHeight, plane);
                    plane.position.set(
                        getRandomXPosition(minX, maxX, xPlateWidth), // x position with minimum gap
                        -2.5, // y
                        Math.floor(Math.random() * length) + 0.5 // z: 0 to length
                    );
                    plane.rotation.x = -Math.PI / 2;
                    break;
                case 'left':
                    // Update the dimensions of the plane to match the face of the cube
                    updatePlaneDimensions(yPlateWidth, yPlateHeight, plane);
                    plane.position.set(
                        -(boxWidth / 2), // x
                        getRandomXPosition(minY, maxY, yPlateHeight), // y position with minimum gap
                        Math.floor(Math.random() * length) + 0.5 // z: 0 to length
                    );
                    plane.rotation.y = Math.PI / 2;
                    break;
                case 'right':
                    // Update the dimensions of the plane to match the face of the cube
                    updatePlaneDimensions(yPlateWidth, yPlateHeight, plane);
                    plane.position.set(
                        (boxWidth / 2), // x
                        getRandomXPosition(minY, maxY, yPlateHeight), // y position with minimum gap
                        Math.floor(Math.random() * length) + 0.5 // z: 0 to length
                    );
                    plane.rotation.y = -Math.PI / 2;
                    break;
            }
            scene.add(plane);
        }
    }

    // Position random planes on each face of the hollow cube
    positionRandomPlanes('top', sceneLength);
    positionRandomPlanes('bottom', sceneLength);
    positionRandomPlanes('left', sceneLength);
    positionRandomPlanes('right', sceneLength);


    // Function to create rectangular grid lines on a face of the cube
    function createRectangularGrid(totalWidth, totalHeight, position, rotation, plane) {
        // (5, 35, 5, 35, { x: -2.5, y: 0, z: 0 }, { x: 0, y: Math.PI / 2, z: 0 }
        const gridGeometry = new THREE.BufferGeometry();
        const vertices = [];

        const horizontalDivision = plane === 'horizontal' ? xPlateWidth : yPlateHeight;
        const verticalDivision = plane === 'horizontal' ? xPlateHeight : yPlateWidth;

        // Create horizontal lines
        for (let i = 0; i <= totalWidth; i += horizontalDivision) {
            const x = i - totalWidth / 2;
            vertices.push(x, -totalHeight / 2, 0, x, totalHeight / 2, 0);
        }

        // Create vertical lines
        for (let j = 0; j <= totalHeight; j += verticalDivision) {
            const y = j - totalHeight / 2;

            vertices.push(-totalWidth / 2, y, 0, totalWidth / 2, y, 0);
        }

        // console.log('Vertices:', vertices);        

        gridGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const gridLines = new THREE.LineSegments(gridGeometry, new THREE.LineBasicMaterial({ color: '#d4d4d4' }));

        gridLines.position.set(position.x, position.y, position.z);
        gridLines.rotation.set(rotation.x, rotation.y, rotation.z);
        
        // console.log('Grid Lines:', gridLines);  
        
        scene.add(gridLines);
    }

    // Create rectangular grid lines on each face of the hollow cube
    createRectangularGrid(boxWidth, sceneLength, { x: 0, y: 2.5, z: sceneLength / 2 }, { x: Math.PI / 2, y: 0, z: 0 }, 'horizontal'); // Top
    createRectangularGrid(boxWidth, sceneLength, { x: 0, y: -2.5, z: sceneLength / 2 }, { x: -Math.PI / 2, y: 0, z: 0 }, 'horizontal'); // Bottom
    createRectangularGrid(boxHeight, sceneLength, { x: -(boxWidth / 2), y: 0, z: sceneLength / 2 }, { x: Math.PI / 2, y: Math.PI / 2, z: 0 }, 'vertical'); // Left
    createRectangularGrid(boxHeight, sceneLength, { x: (boxWidth / 2), y: 0, z: sceneLength / 2 }, { x: - Math.PI / 2, y: -Math.PI / 2, z: 0 }, 'vertical'); // Right

    // createRectangularGrid(boxWidth, sceneLength, { x: 0, y: 2.5, z: 3 * sceneLength / 2 }, { x: Math.PI / 2, y: 0, z: 0 }, 'horizontal'); // Top
    // createRectangularGrid(boxWidth, sceneLength, { x: 0, y: -2.5, z: 3 * sceneLength / 2 }, { x: -Math.PI / 2, y: 0, z: 0 }, 'horizontal'); // Bottom
    // createRectangularGrid(boxHeight, sceneLength, { x: -(boxWidth / 2), y: 0, z: 3 * sceneLength / 2 }, { x: Math.PI / 2, y: Math.PI / 2, z: 0 }, 'vertical'); // Left
    // createRectangularGrid(boxHeight, sceneLength, { x: (boxWidth / 2), y: 0, z: 3 * sceneLength / 2 }, { x: - Math.PI / 2, y: -Math.PI / 2, z: 0 }, 'vertical'); // Right

    // Create an axes helper
    // const axesHelper = new THREE.AxesHelper();
    // scene.add(axesHelper);

    // Set the camera position
    camera.position.z = 0;

    // Set the hollow cube position
    hollowCube.position.z = 100;

    // Make all the materials transparent
    scene?.children?.forEach((child) => {
        child.material.transparent = true;
    });

    // Call the animate function
    renderer.setAnimationLoop(() => {
        animateAndShowTopLayer({
            camera,
            scene,
            renderer,
            topLayerFirstRef
        });
    });

    //Resizing
    window.addEventListener("resize", () => {

        setRendererSize();

    });

    // Return the scene, camera, and renderer
    return { scene, camera, renderer };
};

// Function to stop the animation
export const stopAnimation = ({
    renderer,
    scene,
    topLayerFirstRef,
    gsap
}) => {
    renderer.setAnimationLoop(null);

    scene && (scene.visible = false);

    // // Hide the canvas
    // const canvasWrapper = canvasWrapperRef?.current;

    // if (canvasWrapper) {
    //     // console.log('Hiding canvas', canvasWrapper);

    //     canvasWrapper.classList.add('d-none');
    // }

    // Move to the next about section
    gsap.to(window,
        {
            duration: 0.5,
            scrollTo: "#featureShowcase",
            onComplete: () => {
                document.body.style.overflow = 'auto';
            }
        }
    );
}

// Function to animate and hide the top layer
export function animateAndHideTopLayer({
    camera,
    scene,
    renderer,
    canvasWrapperRef,
    topLayerFirstRef,
    gsap
}) {

    // Scrolling down
    camera.position.z += 0.2;

    const topLayerFirst = topLayerFirstRef.current;

    // Hide the top layer text
    if (topLayerFirst) {
        topLayerFirst.classList.remove('show');
        topLayerFirst.classList.add('hide');
    }

    // Hide the top layer text after 1 second
    setTimeout(() => {
        // camera.position.z += 10;

        scene?.children?.forEach((child) => {
            if (child.material.opacity > 0.01) {
                child.material.opacity -= 0.02;
            }
        });

    }, 500);

    // if (camera.position.z >= 300) {
    //     stopAnimation();
    // }

    // console.log(scene.children[0].material.opacity);


    if (scene.children.find(child => child.material.opacity <= 0.01)) {
        // console.log('Stopping animation');

        stopAnimation({
            scene,
            renderer,
            topLayerFirstRef,
            gsap
        });

    }

    renderer.render(scene, camera);
}

// Create a function to animate the scene (This function will be called 60 times per second) (The refresh rate of the screen)
export function animateAndShowTopLayer({
    camera,
    scene,
    renderer,
    topLayerFirstRef
}) {

    if (camera.position.z <= 20) {
        // Speed up the camera movement when it is closer to the cube
        camera.position.z += 0.2;
    } else {
        // Move the camera at a normal speed
        camera.position.z += 0.01;

        const topLayerFirst = topLayerFirstRef.current;

        topLayerFirst?.classList.add('show');
        topLayerFirst?.classList.remove('hide');

    }

    renderer.render(scene, camera);
}