import React, { Suspense, useState } from 'react';
import Loading from './components/utils/loading';
import { Canvas } from '@react-three/fiber';
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from '@react-three/drei';
import WhiteCovers from './models/whiteCover';

const ModelDemo3 = () => {
  return (
    <div>
      <section className='container'>
        <Canvas shadows camera={{ near: 0.1, far: 500 }}>
          <color attach='background' args={['#ececec']} />
          <Suspense fallback={<Loading />}>
            <OrbitControls />
            <Float>
              <WhiteCovers />
            </Float>
            <ContactShadows position-y={-0.5} opacity={0.4} blur={2} />
            <Environment preset='city' />
          </Suspense>
        </Canvas>
      </section>
    </div>
  );
};

export default ModelDemo3;
