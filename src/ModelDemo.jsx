import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import Loading from './components/utils/loading';
import Island from './models/Island';
import './ModelDemo.css';
import Bird from './models/Bird';
import Sky from './models/Sky';
import Plane from './models/Plan';

// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry attach='geometry' />
//       <meshLambertMaterial attach='material' color='hotpink' />
//     </mesh>
//   );
// }

function ModelDemo() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale;
    let rotation = [0.1, 4.7, 0];
    let screenPosition = [0, -6.5, -43];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    // <Canvas>
    //   <OrbitControls />
    //   <ambientLight intensity={0.5} />
    //   <spotLight position={[10, 15, 10]} angle={0.3} />
    //   <Box />
    // </Canvas>

    <div>
      <title>3DModel Demo</title>
      <section className='container'>
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loading />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <hemisphereLight
              skyColor='#b1e1ff'
              groundColor='#000000'
              intensity={1}
            />
            <Bird />
            <Sky isRotating={isRotating} />

            <Island
              setIsRotating={setIsRotating}
              isRotating={isRotating}
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              setCurrentStage={setCurrentStage}
            />

            <Plane
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              position={biplanePosition}
              rotation={[0, 20.1, 0]}
              scale={biplaneScale}
            />
          </Suspense>
        </Canvas>
      </section>
    </div>
  );
}

export default ModelDemo;
