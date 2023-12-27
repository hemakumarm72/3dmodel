import React, { useState } from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import WhiteCover from '../assets/3d/whitecover.glb';
// import { degToRad } from 'three/src/math/MathUtils';
import sampleImg1 from '../450-20180301183118.jpg';
import sampleImg from '../ice3.png';
import { useControls } from 'leva';
import { degToRad } from 'three/src/math/MathUtils.js';

export default function WhiteCovers(props) {
  const { nodes, materials } = useGLTF(WhiteCover);
  const [pos, setPos] = useState([1, 2, 1]);
  const [rotation, setRotation] = useState([0, 0, 0.2]);
  const [scale, setScale] = useState([1.5, 1.5, 1.5]);

  const texture = useTexture(sampleImg);
  useControls({
    angle: {
      min: degToRad(60),
      max: degToRad(300),
      value: Math.PI / 4,
      step: 0.01,
      onChange: (value) => {
        const x = Math.cos(value);
        const z = Math.sin(value);
        const rot = Math.atan2(x, z);
        setRotation(() => [0, rot, 0]);
        setPos((pos) => [x, pos[1], z]);
      },
    },
    posY: {
      min:3.76,
      max: 10,
      value: 1.8,
      step: 0.01,
      onChange: (value) => {
        setPos((pos) => [pos[0], value, pos[2]]);
      },
    },
    scale: {
      min: 0.5,
      max: 8,
      value: 1.5,
      step: 0.01,
      onChange: (value) => {
        setScale(() => [value, value, 10]);
      },
    },
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh0.geometry}
        material={materials.Printable}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh0.geometry}
        material={materials.mat0}
      >
        <meshBasicMaterial transparent opacity={0} />

        <Decal
          // debug
          position={pos} // Position of the decal
          rotation={rotation} // Rotation of the decal (can be a vector or a degree in radians)
          scale={scale} // Scale of the decal
          // position={[1, 2, 1]}
          // rotation={[0, 0, 0.2]}
          // scale={[1.5, 1.5, 1.5]}
        >
          <meshBasicMaterial
            map={texture}
            toneMapped={false}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      </mesh>
    </group>
  );
}

useGLTF.preload(WhiteCover);
