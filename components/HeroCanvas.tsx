'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useState } from 'react';

const RotatingRing = () => {
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    setRotation((prev) => prev + 0.002);
  });

  return (
    <mesh rotation={[rotation, rotation, 0]}>
      <ringGeometry args={[2.2, 4, 120]} />
      <meshBasicMaterial color="#14b8a6" wireframe transparent opacity={0.15} />
    </mesh>
  );
};

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 70 }}>
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <RotatingRing />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
